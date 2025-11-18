// GuideOrbAssistant.tsx
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchExternalAnswer } from '../../services/externalSearch';
import { NeonAIInteractionView, type NeonAIController, type VoiceState } from './NeonAIInteraction';
import breathSfx from './sfx/breath-1.mp3';
/**
 * Drop-in GuideOrbAssistant
 * - First-time handshake: asks for name and optionally persists locally (localStorage)
 * - Quick intent router: navigation, smalltalk, control
 * - Knowledge fallback: Wikipedia summary lookup (cached)
* - All replies spoken with speakNatural (uses speechSynthesis). Breath audio optional at /sfx/breath-1.mp3
 *
 * NOTE: If you uploaded a file earlier and want me to patch it directly, please re-upload the file.
 */
type AssistantMode =
  | 'greeting'
  | 'idle'
  | 'listening'
  | 'processing'
  | 'navigation'
  | 'smalltalk'
  | 'knowledgeLookup'
  | 'error';

type ResponsePayload = {
  caption: string;
  speech: string;
  action?: 'respond' | 'navigate' | 'highlight' | 'open_modal' | 'search' | 'external_search' | 'none';
  target?: string;
  confidence?: number;
  meta?: Record<string, unknown>;
};

const STORAGE_KEY = 'guideorb:v1';
const NAME_TTL_MS = 1000 * 60 * 60 * 24 * 365; // 1 year

const PREFERRED_VOICES = [/wavenet|neural|google|microsoft/i];

const MODE_TO_VOICE_STATE: Record<AssistantMode, VoiceState> = {
  greeting: 'speaking',
  idle: 'idle',
  listening: 'listening',
  processing: 'thinking',
  navigation: 'thinking',
  smalltalk: 'speaking',
  knowledgeLookup: 'thinking',
  error: 'error',
};

const AMPLITUDE_TARGETS: Record<VoiceState, number> = {
  idle: 0.18,
  listening: 0.45,
  thinking: 0.36,
  speaking: 0.72,
  error: 0.28,
};

const VOICE_STATE_TO_MODE: Record<VoiceState, AssistantMode> = {
  idle: 'idle',
  listening: 'listening',
  thinking: 'processing',
  speaking: 'smalltalk',
  error: 'error',
};

const VOICE_STATE_OVERLAY: Record<VoiceState, string> = {
  idle: 'Tap the orb to talk.',
  listening: 'Listening — speak now.',
  thinking: 'Processing your request...',
  speaking: 'Responding with details.',
  error: 'Voice not supported in this browser.',
};

const MODE_STATUS_TEXT: Record<AssistantMode, string> = {
  greeting: 'Greeting…',
  idle: 'Standing by for your next question.',
  listening: 'Listening for your voice.',
  processing: 'Processing your request…',
  navigation: 'Routing to the requested section…',
  smalltalk: 'Sharing a quick note.',
  knowledgeLookup: 'Searching trusted sources…',
  error: 'Something went wrong. Tap to retry.',
};

const SITE_FACTS: { pattern: RegExp; caption: string; speech: string }[] = [
  {
    pattern: /(this (site|website)|your (site|portfolio)|theujwal|ujwal.?thakare\.dev|guide orb)/i,
    caption: 'This portfolio belongs to Ujwal Thakare — a security-first engineering leader.',
    speech:
      'This site is Ujwal Thakare’s portfolio, showcasing his security-first engineering leadership, delivery systems, and the Guide Orb assistant you are using right now.',
  },
  {
    pattern: /(blog|blogs page|knowledge dispatch)/i,
    caption: 'The Blogs page curates strategy dossiers with neon cards and tag filters.',
    speech:
      'The Blogs section curates strategy dossiers, featuring a highlighted dispatch, neon knowledge cards, and a subject navigator driven by tag filters.',
  },
  {
    pattern: /(projects page|projects section)/i,
    caption: 'Projects highlights applied case studies with cyber-themed visuals.',
    speech:
      'Projects showcases applied case studies, each cyber-themed card linking to deeper dives on resilience, automation, and AI workflows.',
  },
  {
    pattern: /(experience page|experience section)/i,
    caption: 'Experience maps Ujwal’s leadership roles across security and engineering.',
    speech:
      'The Experience section maps Ujwal’s leadership roles across security, DevOps, and engineering programs with timeline callouts.',
  },
  {
    pattern: /(contact page|contact section|reach you|connect with you)/i,
    caption: 'Use the Contact module to send a note via the EmailJS-powered form.',
    speech: 'Use the Contact module or social links to send a note through the built-in EmailJS form.',
  },
];

const maybeResolveSiteQuestion = (query: string): ResponsePayload | null => {
  for (const fact of SITE_FACTS) {
    if (fact.pattern.test(query)) {
      return {
        caption: fact.caption,
        speech: fact.speech,
        action: 'respond',
        confidence: 0.82,
      };
    }
  }
  return null;
};

const formatExternalSummary = (query: string, summary: string) => {
  const normalized = summary.replace(/\s+/g, ' ').trim();
  const sentences = normalized.split(/(?<=[.!?])\s+/).filter(Boolean);
  const lowerQuery = query.toLowerCase();

  if (/^who\s+(is|was)\b/.test(lowerQuery)) {
    const identity = sentences[0] ?? normalized;
    const knownFor =
      sentences.find((s) =>
        /known|captain|leader|founder|actor|player|engineer|scientist|author|entrepreneur|politician|artist|coach|developer|security|cricket|football|technology|research|innovator/i.test(
          s,
        ),
      ) || sentences[1] || identity;
    const highlight =
      sentences.find((s) =>
        /award|record|title|champion|won|achievement|milestone|trophy|medal|world cup|notable|founded|launched|breakthrough|century|lead|innovated|captained/i.test(
          s,
        ),
      ) || sentences[2] || knownFor;

    const clean = (value: string) => value.replace(/\s+/g, ' ').replace(/[\.;]+$/, '');
    return `Identity: ${clean(identity)}. Known for: ${clean(knownFor)}. Notable highlight: ${clean(highlight)}.`;
  }

  const first = sentences[0] ?? normalized;
  return first.length > 140 ? `${first.slice(0, 137)}...` : first;
};

const useOrbAmplitude = (voiceState: VoiceState) => {
  const [amplitude, setAmplitude] = useState(AMPLITUDE_TARGETS[voiceState]);
  const jitterPhase = useMemo(() => Math.random() * Math.PI * 2, []);

  useEffect(() => {
    let frame: number;

    const animate = () => {
      const now = performance.now() * 0.002;
      const jitter = Math.sin(now + jitterPhase) * 0.08;
      const target = AMPLITUDE_TARGETS[voiceState] + jitter;
      setAmplitude((prev) => {
        const next = prev + (target - prev) * 0.12;
        return Math.min(1, Math.max(0, next));
      });
      frame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(frame);
  }, [voiceState, jitterPhase]);

  return amplitude;
};

export default function GuideOrbAssistant({
  className = '',
  orbClassName = '',
  onStateChange,
}: {
  className?: string;
  orbClassName?: string;
  onStateChange?: (s: { mode: AssistantMode; message?: string; ephemeral?: boolean }) => void;
}) {
  const navigate = useNavigate();

  // status
  const [mode, setMode] = useState<AssistantMode>('idle');
  const [overlayMessage, setOverlayMessage] = useState<string>('Tap the orb to talk.');
  const [conversationHistory, setConversationHistory] = useState<
    { id: string; role: 'user' | 'assistant'; text: string; time: number }[]
  >([]);
  const [isSpeechSupported, setIsSpeechSupported] = useState(true);

  // refs
  const recognitionRef = useRef<any>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const breathAudioRef = useRef<HTMLAudioElement | null>(null);
  const voiceRef = useRef<SpeechSynthesisVoice | null>(null);
  const isMountedRef = useRef(false);
  const statusRef = useRef<AssistantMode>('idle');
  // const speakingSessionRef = useRef(0);

  // storage helpers
  const loadStorage = useCallback(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  }, []);

  const saveStorage = useCallback((obj: Record<string, any>) => {
    try {
      const cur = loadStorage();
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...cur, ...obj, savedAt: Date.now() }));
    } catch {}
  }, [loadStorage]);

  // state: name
  const [userName, setUserName] = useState<string | null>(() => {
    try {
      const s = loadStorage();
      if (!s.name) return null;
      if (s.savedAt && Date.now() - s.savedAt > NAME_TTL_MS) {
        return null;
      }
      return s.name || null;
    } catch {
      return null;
    }
  });

  const visualVoiceState = MODE_TO_VOICE_STATE[mode];
  const amplitude = useOrbAmplitude(visualVoiceState);
  const transcriptPreview = useMemo(() => {
    if (!conversationHistory.length) return overlayMessage;
    const recent = conversationHistory
      .slice(-4)
      .map((entry) => `${entry.role === 'user' ? 'You' : 'Guide'}: ${entry.text}`)
      .join('\n');
    return recent || overlayMessage;
  }, [conversationHistory, overlayMessage]);

  useEffect(() => {
    statusRef.current = mode;
    onStateChange?.({ mode, message: overlayMessage, ephemeral: true });
  }, [mode, overlayMessage, onStateChange]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setIsSpeechSupported('speechSynthesis' in window);
  }, []);

  // util: push conversation
  const pushConversation = useCallback((role: 'user' | 'assistant', text: string) => {
    const entry = { id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`, role, text, time: Date.now() };
    setConversationHistory((prev) => {
      if (role === 'user') {
        return [entry];
      }
      const base = prev.slice(-1);
      return [...base, entry].slice(-2);
    });
  }, []);

  // SPEAK NATURAL: chunking + optional breath
 // SPEAK NATURAL: chunking + optional breath

  const speakNatural = useCallback(async (text: string) => {
    const synth = synthRef.current;
    if (!synth) return;

    // const sessionId = ++speakingSessionRef.current;

    const breathAudio = (() => {
      if (!breathAudioRef.current) {
        breathAudioRef.current = new Audio(breathSfx);
        breathAudioRef.current.volume = 0.11;
      }
      return breathAudioRef.current;
    })();
    const maybeBreath = async (segment: string) => {
      if (segment.length < 55 ) return;
      try {
        breathAudio.pause();
        breathAudio.currentTime = 0;
        await breathAudio.play();
        await new Promise((resolve) => setTimeout(resolve, 90));
        breathAudio.pause();
      } catch {}
    };

    const normalized = text.replace(/\s+/g, ' ').trim();
    const chunks = normalized.length > 0 ? normalized.match(/[^.!?]+[.!?]?/g) ?? [normalized] : [];

    synth.cancel();
    await new Promise((resolve) => setTimeout(resolve, 20));
    if (synth.paused) synth.resume();
    if (!chunks.length) return;
    for (let i = 0; i < chunks.length; i++) {
      // if (sessionId !== speakingSessionRef.current) break;
      const chunk = chunks[i]?.trim();
      if (!chunk) continue;
      if (i > 0) {
        await maybeBreath(chunk);
        // if (sessionId !== speakingSessionRef.current) break;
      }

      await new Promise<void>((resolve) => {
        const utterance = new SpeechSynthesisUtterance(chunk);
        const baseRate = 1.06;
        const swing = Math.sin(i * 0.45) * 0.035;
        utterance.rate = Math.min(1.2, Math.max(1.02, baseRate + swing));
        utterance.pitch = 1 + ((i % 2) === 0 ? 0.015 : -0.015);
        utterance.volume = 0.92;
        utterance.lang = voiceRef.current?.lang ?? 'en-US';
        if (voiceRef.current) utterance.voice = voiceRef.current;
        utterance.onend = () => resolve();
        utterance.onerror = () => resolve();
        synth.speak(utterance);
      });

      // if (sessionId !== speakingSessionRef.current) break;

      await new Promise((resolve) => setTimeout(resolve, 12));
      // if (sessionId !== speakingSessionRef.current) break;
    }
  }, []);

  // pick voice
  useEffect(() => {
    synthRef.current = typeof window !== 'undefined' ? window.speechSynthesis : null;
    let mounted = true;
    let tries = 0;

    const pickVoice = () => {
      if (!synthRef.current) return;
      const voices = synthRef.current.getVoices?.() ?? [];
      if (voices.length === 0 && tries < 5) {
        tries += 1;
        setTimeout(pickVoice, 200 + tries * 150);
        return;
      }
      if (!mounted) return;
      const preferred = voices.find((v: SpeechSynthesisVoice) => PREFERRED_VOICES.some((r) => r.test(v.name)));
      const localePrefer = voices.find((v: SpeechSynthesisVoice) => v.lang?.toLowerCase().startsWith('en'));
      voiceRef.current = preferred ?? localePrefer ?? voices[0] ?? null;
    };

    pickVoice();

    const handler = () => {
      pickVoice();
    };
    synthRef.current?.addEventListener?.('voiceschanged', handler);

    return () => {
      mounted = false;
      synthRef.current?.removeEventListener?.('voiceschanged', handler);
    };
  }, []);

  // small helper: emit mode + overlay
  const emitState = useCallback((m: AssistantMode, msg?: string, ephemeral = true) => {
    setMode(m);
    statusRef.current = m;
    if (msg) setOverlayMessage(msg);
    onStateChange?.({ mode: m, message: msg, ephemeral });
  }, [onStateChange]);

  // NAME extraction
  const extractName = useCallback((text: string): string | null => {
    // patterns for simple handshakes; prefer capitalized token or proper noun sequence
    const low = text.trim();
    const patterns = [/i(?:'| a)m\s+([A-Za-z][A-Za-z\s'\-]{0,28})/i, /my name is\s+([A-Za-z][A-Za-z\s'\-]{0,28})/i, /call me\s+([A-Za-z][A-Za-z\s'\-]{0,28})/i, /\bthis is\s+([A-Za-z][A-Za-z\s'\-]{0,28})/i];
    for (const p of patterns) {
      const m = low.match(p);
      if (m && m[1]) {
        const candidate = m[1].trim().replace(/[^A-Za-z\s'\-]/g, '').slice(0, 30);
        if (candidate.length) return candidate.split(' ').map(s => s[0].toUpperCase()+s.slice(1)).join(' ');
      }
    }
    // fallback: maybe user said a single token name
    const tokens = low.split(/\s+/);
    if (tokens.length === 1 && tokens[0].length <= 24) {
      const t = tokens[0].replace(/[^A-Za-z]/g, '');
      if (t.length >= 2) return t[0].toUpperCase() + t.slice(1);
    }
    return null;
  }, []);

  // QUICK intent router
  const quickIntent = useCallback((text: string) => {
    const t = text.toLowerCase();
    if (/\b(open|go to|show|take me to|navigate)\b/.test(t) && /\b(projects|experience|blog|resume|contact|home)\b/.test(t)) {
      const slug = t.match(/\b(projects|experience|blog|resume|contact|home)\b/)![1];
      return { intent: 'navigate' as const, target: slug === 'home' ? '/' : `/${slug}` };
    }
    if (/\b(stop|pause|cancel|hold on|wait)\b/.test(t)) return { intent: 'control' as const, cmd: 'pause' };
    if (/\b(hello|hi|hey|thanks|thank you|who are you|what can you do)\b/.test(t)) return { intent: 'smalltalk' as const };
    // default -> knowledge query
    return { intent: 'knowledge' as const, query: text };
  }, []);

  // WIKI fetch (cached)
  const wikiCacheKey = (q: string) => `wiki:${q.toLowerCase().slice(0, 64)}`;
  const fetchWikiSummary = useCallback(async (query: string) => {
    const fetchSummaryForTitle = async (title: string) => {
      const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`);
      if (!res.ok) return null;
      const data = await res.json();
      return data.extract ? String(data.extract) : null;
    };

    const searchFallbackTitle = async (search: string) => {
      const searchUrl =
        'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*' +
        `&srsearch=${encodeURIComponent(search)}&srlimit=1`;
      const res = await fetch(searchUrl);
      if (!res.ok) return null;
      const data = await res.json();
      const title = data?.query?.search?.[0]?.title;
      return typeof title === 'string' && title.trim().length ? title : null;
    };

    try {
      const key = wikiCacheKey(query);
      const cached = localStorage.getItem(key);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Date.now() - parsed.ts < 1000 * 60 * 60 * 24 * 7) return parsed.summary;
      }

      const initial = await fetchSummaryForTitle(query);
      if (initial) {
        localStorage.setItem(key, JSON.stringify({ summary: initial, ts: Date.now() }));
        return initial;
      }

      const fallbackTitle = await searchFallbackTitle(query);
      if (!fallbackTitle) return null;

      const fallbackSummary = await fetchSummaryForTitle(fallbackTitle);
      if (fallbackSummary) {
        localStorage.setItem(key, JSON.stringify({ summary: fallbackSummary, ts: Date.now(), resolvedTitle: fallbackTitle }));
      }
      return fallbackSummary;
    } catch {
      return null;
    }
  }, []);

  // resolveResponse: uses quickIntent; if knowledge -> calls wiki
  const resolveResponse = useCallback(async (text: string): Promise<ResponsePayload> => {
    const intent = quickIntent(text);
    if (intent.intent === 'navigate') {
      return {
        caption: `Opening ${intent.target.replace('/', '') || 'home'}...`,
        speech: `Opening ${intent.target.replace('/', '') || 'home'} now.`,
        action: 'navigate',
        target: intent.target,
        confidence: 0.9,
      };
    }
    if (intent.intent === 'control') {
      return {
        caption: 'Paused. Tap to resume the assistant.',
        speech: 'Okay, I will pause listening. Tap the orb to resume.',
        action: 'respond',
        confidence: 0.95,
      };
    }
    if (intent.intent === 'smalltalk') {
      // basic small talk replies
      const t = text.toLowerCase();
      if (/\bwho are you\b/.test(t)) {
        return { caption: 'I am Ujwal’s guide orbit.', speech: 'I am Ujwal’s guide orbit — here to help you explore the site.', action: 'respond', confidence: 0.9 };
      }
      if (/\bwhat can you do\b/.test(t)) {
        return { caption: 'I can open pages, highlight sections, and answer general questions.', speech: 'I can open pages, highlight sections, and answer general questions. Ask me to open Experience or show Projects.', action: 'respond', confidence: 0.9 };
      }
      if (/\bhello|hi|hey\b/.test(t)) {
        return { caption: `Hi${userName ? ', ' + userName : ''}! How can I help?`, speech: `Hi${userName ? ', ' + userName : ''}! How can I help?`, action: 'respond', confidence: 0.9 };
      }
      return { caption: "I'm here — ask me to open Experience or Projects.", speech: "I'm here — ask me to open Experience or Projects.", action: 'respond', confidence: 0.8 };
    }

    // knowledge: try wiki
    const local = maybeResolveSiteQuestion(text.toLowerCase());
    if (local) return local;

    emitState('knowledgeLookup', 'Looking that up...', true);
    const summary = await fetchWikiSummary(text);
    if (summary) {
      return { caption: summary.slice(0, 200) + (summary.length > 200 ? '...' : ''), speech: summary, action: 'respond', confidence: 0.7 };
    }
    emitState('knowledgeLookup', 'Searching trusted sources...', true);
    const external = await fetchExternalAnswer(text);
    if (external?.summary) {
      const trimmed = external.summary.trim();
      const concise = formatExternalSummary(text, trimmed);
      return {
        caption: concise,
        speech: concise,
        action: 'respond',
        confidence: 0.55,
        meta: {
          provenance: external.source ?? 'external_search',
        },
      };
    }

    return { caption: 'I’m not aware of that. Try rephrasing or ask something else.', speech: "I'm not aware of that. I couldn't find a quick summary.", action: 'respond', confidence: 0.2 };
  }, [emitState, fetchWikiSummary, quickIntent, userName]);

  // ACTION handler
  const handleAction = useCallback(async (payload: ResponsePayload) => {
    if (!payload) return;
    if (payload.action === 'navigate' && payload.target) {
      // auto-navigate when confident
      if ((payload.confidence ?? 0) >= 0.6) {
        emitState('navigation', `Navigating to ${payload.target}`, true);
        navigate(payload.target);
      } else {
        // ask confirm (simple confirm)
        emitState('processing', `Do you want me to go to ${payload.target}?`, true);
        // simple window confirm for now
        const ok = window.confirm(`Go to ${payload.target}?`);
        if (ok) navigate(payload.target);
      }
    }
    if (payload.action === 'highlight' && payload.target) {
      const el = document.querySelector(payload.target);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.add('guide-orb-highlight');
        setTimeout(() => el.classList.remove('guide-orb-highlight'), 3000);
      }
    }
  }, [emitState, navigate]);

  // handle recognized transcript
  const handleUserQuestion = useCallback(async (raw: string) => {
    if (!isMountedRef.current) return;
    synthRef.current?.cancel?.();
    // cancelSpeech();
    pushConversation('user', raw);
    emitState('processing', 'Processing your request...', true);
    const response = await resolveResponse(raw);
    pushConversation('assistant', response.caption);
    setOverlayMessage(response.caption);
    await speakNatural(response.speech);
    await handleAction(response);
    if (!isMountedRef.current) return;
    emitState('idle', VOICE_STATE_OVERLAY.idle, true);
  }, [ emitState, handleAction, pushConversation, resolveResponse, speakNatural]);

  // SpeechRecognition setup
  useEffect(() => {
    isMountedRef.current = true;
    if (typeof window === 'undefined') return () => { isMountedRef.current = false; };

    const SpeechRecognitionCtor = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition || null;
    if (!SpeechRecognitionCtor || !window.speechSynthesis) {
      emitState('error', 'Voice not supported in this browser.', true);
      return () => { isMountedRef.current = false; };
    }

    const recognition = new SpeechRecognitionCtor();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';
    recognition.maxAlternatives = 1;

    recognition.onresult = (ev: any) => {
      const transcript = ev?.results?.[0]?.[0]?.transcript ?? '';
      if (!transcript) {
        emitState('error', "I didn't catch that. Please try again.", true);
        return;
      }
      handleUserQuestion(transcript);
    };

    recognition.onerror = () => {
      emitState('error', 'Microphone error. Tap to retry.', true);
    };

    recognition.onend = () => {
      // rely on manual tap to resume
    };

    recognitionRef.current = recognition;

    return () => {
      recognitionRef.current?.stop?.();
      recognitionRef.current = null;
      isMountedRef.current = false;
    };
  }, [emitState, handleUserQuestion]);

  // handshake: greeting & name flow
  const askForNameAndMaybeSave = useCallback(async () => {
    recognitionRef.current?.stop?.();

    emitState('greeting', 'Hi! What is your name?', true);
    setOverlayMessage('Hi! What is your name?');

    try {
      const SpeechRecognitionCtor = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition || null;
      if (!SpeechRecognitionCtor) return;

      const oneRec = new SpeechRecognitionCtor();
      oneRec.continuous = false;
      oneRec.interimResults = false;
      oneRec.lang = 'en-US';
      oneRec.maxAlternatives = 1;

      oneRec.onresult = async (ev: any) => {
        const t = ev?.results?.[0]?.[0]?.transcript ?? '';
        if (!t) {
          await speakNatural("I didn't catch the name. Could you say that again?");
          await askForNameAndMaybeSave();
          return;
        }
        const extracted = extractName(t) ?? t.split(' ').slice(0, 2).map((segment: string) => segment[0].toUpperCase() + segment.slice(1)).join(' ');
        await speakNatural(`Nice to meet you, ${extracted}. Shall I remember your name on this device? Say yes or no.`);

        const confirmRec = new SpeechRecognitionCtor();
        confirmRec.continuous = false;
        confirmRec.interimResults = false;
        confirmRec.lang = 'en-US';
        confirmRec.maxAlternatives = 1;

        confirmRec.onresult = async (cev: any) => {
          const resp = (cev?.results?.[0]?.[0]?.transcript ?? '').toLowerCase();
          confirmRec.stop?.();
          setUserName(extracted);
          if (/\b(yes|sure|yep|yeah|okay|ok|haa)\b/.test(resp)) {
            saveStorage({ name: extracted, savedAt: Date.now() }); 
            await speakNatural(`All set, ${extracted}. I will remember you here.`);
            emitState('idle', `Welcome, ${extracted}.`, true);
          } else {
            await speakNatural('No problem. I will not save your name.');
            emitState('idle', VOICE_STATE_OVERLAY.idle, true);
          }
        };

        confirmRec.onerror = async () => {
          confirmRec.stop?.();
          await speakNatural("I couldn't hear that. I won't save your name for now.");
          emitState('idle', 'Name not saved.', true);
        };

        confirmRec.start();
      };

      oneRec.onerror = async () => {
        oneRec.stop?.();
        await speakNatural("I couldn't hear you. Try tapping the orb and telling me your name.");
        emitState('idle', 'Tap to tell me your name.', true);
      };

      oneRec.start();
    } catch {
      emitState('error', 'Microphone busy or unavailable.', true);
    }
  }, [emitState, extractName, saveStorage, speakNatural]);

  // activate assistant
  const deactivateAssistant = useCallback(() => {
    recognitionRef.current?.stop?.();
    synthRef.current?.cancel?.();
    emitState('idle', VOICE_STATE_OVERLAY.idle, true);
  },[ emitState]);

  const interruptAndListen = useCallback(() => {
    synthRef.current?.cancel?.();
    recognitionRef.current?.stop?.();
    emitState('listening', VOICE_STATE_OVERLAY.listening, true);
    setTimeout(() => {
      try {
        recognitionRef.current?.start?.();
      } catch {
        emitState('error', 'Microphone busy. Tap to retry.', true);
      }
    }, 120);
  }, [ emitState]);

  const handleOrbToggle = useCallback(() => {
    if (mode !== 'idle') {
      interruptAndListen();
      return;
    }

    if (!userName) {
      emitState('greeting', "Let's get to know each other.", true);
      void (async () => {
        await speakNatural("Hello — I'm your guide orb. What's your name?");
        await askForNameAndMaybeSave();
      })();
      return;
    }

    emitState('listening', VOICE_STATE_OVERLAY.listening, true);
    try {
      recognitionRef.current?.start?.();
    } catch {
      emitState('error', 'Microphone busy. Tap to retry.', true);
    }
  }, [askForNameAndMaybeSave, emitState, interruptAndListen, mode, speakNatural, userName]);

  const startListening = useCallback(async () => {
    if (mode === 'idle') {
      handleOrbToggle();
    }
  }, [handleOrbToggle, mode]);

  const stopListening = useCallback(() => {
    if (mode !== 'idle') {
      deactivateAssistant();
    }
  }, [deactivateAssistant, mode]);

  const speakFromController = useCallback((text: string) => {
    void speakNatural(text);
  }, [speakNatural]);

  const forceState = useCallback((state: VoiceState) => {
    const targetMode = VOICE_STATE_TO_MODE[state];
    const message = VOICE_STATE_OVERLAY[state];
    emitState(targetMode, message, true);
  }, [emitState]);

  const controller = useMemo<NeonAIController>(() => ({
    voiceState: visualVoiceState,
    amplitude,
    transcript: transcriptPreview,
    isSupported: isSpeechSupported,
    startListening,
    stopListening,
    speak: speakFromController,
    forceState,
  }), [visualVoiceState, amplitude, transcriptPreview, isSpeechSupported, startListening, stopListening, speakFromController, forceState]);

  const viewClassName = useMemo(() => [orbClassName].filter(Boolean).join(' ').trim(), [orbClassName]);
  const wrapperClassName = useMemo(
    () => ['flex flex-col items-center gap-2 text-white', className].filter(Boolean).join(' ').trim(),
    [className]
  );
  const statusText = MODE_STATUS_TEXT[mode];
  const statusTone =
    mode === 'listening' || mode === 'processing' || mode === 'knowledgeLookup'
      ? 'text-cyber-blue/80 animate-pulse'
      : 'text-white/60';

  return (
    <div className={wrapperClassName}>
      <NeonAIInteractionView
        className={viewClassName}
        controller={controller}
        initialDisplayMode="globe"
        showSidePanel={false}
        showModeToggle={false}
        showStateButtons={false}
        showVoiceControls={false}
        showTranscript={false}
        headline="Guide AI Assistant"
        kicker="Neon Command Relay"
        description={overlayMessage}
        onOrbActivate={handleOrbToggle}
      />

      <div className={`mt-1 text-xs uppercase tracking-[0.35em] ${statusTone}`}>{statusText}</div>

      <div className="w-full max-w-xs rounded-2xl border border-white/15 bg-white/5 p-3 text-[11px] uppercase tracking-[0.3em] text-white/60">
        {conversationHistory.length === 0 ? (
          <p className="text-center text-white/40">No transcript yet — ask anything.</p>
        ) : (
          conversationHistory.map((entry) => (
            <div key={entry.id} className={`mb-3 last:mb-0 ${entry.role === 'assistant' ? 'text-cyber-green/80' : 'text-white/70'}`}>
              <span className="block text-[9px] font-semibold tracking-[0.45em] text-white/40">
                {entry.role === 'assistant' ? 'Guide' : 'You'}
              </span>
              <span className="block normal-case tracking-[0.02em] text-white/80">{entry.text}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
