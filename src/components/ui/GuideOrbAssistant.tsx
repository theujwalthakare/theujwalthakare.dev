// GuideOrbAssistant.tsx
import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import GuideOrb from './GuideOrb';
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
  action?: 'respond' | 'navigate' | 'highlight' | 'open_modal' | 'search' | 'none';
  target?: string;
  confidence?: number;
};

const STORAGE_KEY = 'guideorb:v1';
const NAME_TTL_MS = 1000 * 60 * 60 * 24 * 365; // 1 year

const PREFERRED_VOICES = [/wavenet|neural|google|microsoft/i];

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
  const [isTranscriptOpen, setIsTranscriptOpen] = useState(true);

  // refs
  const recognitionRef = useRef<any>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const voiceRef = useRef<SpeechSynthesisVoice | null>(null);
  const isMountedRef = useRef(false);
  const statusRef = useRef<AssistantMode>('idle');

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

  useEffect(() => {
    statusRef.current = mode;
    onStateChange?.({ mode, message: overlayMessage, ephemeral: true });
  }, [mode, overlayMessage, onStateChange]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const initialize = () => {
      if (window.innerWidth < 640) {
        setIsTranscriptOpen(false);
      } else {
        setIsTranscriptOpen(true);
      }
    };
    initialize();
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsTranscriptOpen(true);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // util: push conversation
  const pushConversation = useCallback((role: 'user' | 'assistant', text: string) => {
    setConversationHistory((p) => [
      ...p,
      { id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`, role, text, time: Date.now() },
    ]);
  }, []);

  // SPEAK NATURAL: chunking + optional breath
  const speakNatural = useCallback(async (text: string) => {
    const synth = synthRef.current;
    if (!synth) return;

    const breathUrl = '/sfx/breath-1.mp3';
    const maybeBreath = async (segment: string) => {
      if (segment.length < 55) return;
      try {
        const a = new Audio(breathUrl);
        a.volume = 0.05;
        await a.play();
        await new Promise((resolve) => setTimeout(resolve, 60));
        a.pause();
      } catch {}
    };

    const normalized = text.replace(/\s+/g, ' ').trim();
    const chunks = normalized.length > 0 ? normalized.match(/[^.!?]+[.!?]?/g) ?? [normalized] : [];

    synth.cancel();
    for (let i = 0; i < chunks.length; i++) {
      const chunk = chunks[i]?.trim();
      if (!chunk) continue;
      if (i > 0) {
        await maybeBreath(chunk);
      }

      await new Promise<void>((resolve) => {
        const utterance = new SpeechSynthesisUtterance(chunk);
        const baseRate = 1.2;
        utterance.rate = Math.min(1.35, baseRate + Math.sin(i * 0.6) * 0.05);
        utterance.pitch = 0.98 + ((i % 2) === 0 ? 0.01 : -0.01);
        utterance.volume = 0.94;
        if (voiceRef.current) utterance.voice = voiceRef.current;
        utterance.onend = () => resolve();
        utterance.onerror = () => resolve();
        synth.speak(utterance);
      });

      await new Promise((resolve) => setTimeout(resolve, 8));
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
    try {
      const key = wikiCacheKey(query);
      const cached = localStorage.getItem(key);
      if (cached) {
        const parsed = JSON.parse(cached);
        // treat cache as valid for 7 days
        if (Date.now() - parsed.ts < 1000 * 60 * 60 * 24 * 7) return parsed.summary;
      }
      // Wikipedia REST summary endpoint
      const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`;
      const res = await fetch(url);
      if (!res.ok) return null;
      const data = await res.json();
      const summary = data.extract || null;
      if (summary) localStorage.setItem(key, JSON.stringify({ summary, ts: Date.now() }));
      return summary;
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
    emitState('knowledgeLookup', 'Looking that up...', true);
    const summary = await fetchWikiSummary(text);
    if (summary) {
      return { caption: summary.slice(0, 200) + (summary.length > 200 ? '...' : ''), speech: summary, action: 'respond', confidence: 0.7 };
    }
    return { caption: "I’m not aware of that. Try rephrasing or ask something else.", speech: "I'm not aware of that. I couldn't find a quick summary.", action: 'respond', confidence: 0.2 };
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
    pushConversation('user', raw);
    emitState('processing', 'Processing your request...', true);
    const response = await resolveResponse(raw);
    pushConversation('assistant', response.caption);
    setOverlayMessage(response.caption);
    await speakNatural(response.speech);
    await handleAction(response);
    if (!isMountedRef.current) return;
    emitState('idle', 'Tap the orb to talk.', true);
  }, [emitState, handleAction, pushConversation, resolveResponse, speakNatural]);

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
            emitState('idle', `Welcome, ${extracted}.`);
          } else {
            await speakNatural(`No problem. I won't save your name.`);
            emitState('idle', 'Okay — I will not remember your name.');
          }
        };

        confirmRec.onerror = async () => {
          confirmRec.stop?.();
          await speakNatural("I couldn't hear that. I won't save your name for now.");
          emitState('idle', 'Name not saved.');
        };

        confirmRec.start();
      };

      oneRec.onerror = async () => {
        oneRec.stop?.();
        await speakNatural("I couldn't hear you. Try tapping the orb and telling me your name.");
        emitState('idle', 'Tap to tell me your name.');
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
    emitState('idle', 'Tap the orb to talk.', true);
  }, [emitState]);

  const handleOrbToggle = useCallback(() => {
    if (mode !== 'idle') {
      deactivateAssistant();
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

    setMode('listening');
    statusRef.current = 'listening';
    setOverlayMessage('Listening — speak now.');
    try {
      recognitionRef.current?.start?.();
    } catch {
      emitState('error', 'Microphone busy. Tap to retry.', true);
    }
  }, [askForNameAndMaybeSave, deactivateAssistant, emitState, mode, speakNatural, userName]);

  const handleKeyActivate = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleOrbToggle();
      }
    },
    [handleOrbToggle]
  );

  // small UI helpers
  const isActive = mode !== 'idle' && mode !== 'error';

  return (
    <div className={`flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-6 ${className}`}>
      <div
        role="button"
        tabIndex={0}
        aria-label="Activate GuideOrb assistant"
        aria-pressed={isActive}
        onClick={handleOrbToggle}
        onKeyDown={handleKeyActivate}
        className={`relative flex w-full max-w-[420px] items-center justify-center rounded-full p-1 transition-all sm:justify-center sm:max-w-[320px] lg:max-w-[720px] xl:max-w-[880px] 2xl:max-w-[980px] ${
          isActive ? 'shadow-[0_0_25px_rgba(0,240,255,0.35)]' : 'shadow-[0_0_12px_rgba(0,240,255,0.18)]'
        }`}
      >
        <GuideOrb className={`pointer-events-none w-full ${orbClassName}`} isActive={isActive} />
        {mode === 'listening' && (
          <span className="absolute -bottom-4 flex items-center gap-2 rounded-full bg-gray-900/90 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.3em] text-pink-400 sm:text-xs">
            Listening
            <span className="h-2 w-2 animate-pulse rounded-full bg-pink-400" />
          </span>
        )}
      </div>

      <div className="flex w-full max-w-md flex-col gap-2 sm:max-w-[16rem]">
        <div className="rounded-xl border border-cyber-blue/25 bg-[rgba(5,7,9,0.7)] px-3 py-3 text-xs shadow-[0_8px_24px_rgba(0,0,0,0.4)] backdrop-blur">
          <div className="mb-1 text-[10px] font-mono uppercase tracking-[0.35em] text-gray-400">Assistant</div>
          <div className="text-sm leading-relaxed text-white sm:text-xs">{overlayMessage}</div>
        </div>

        {!isTranscriptOpen && (
          <button
            type="button"
            onClick={() => setIsTranscriptOpen(true)}
            className="sm:hidden rounded-full border border-cyber-blue/30 bg-black/60 px-4 py-2 text-xs font-mono uppercase tracking-[0.3em] text-cyber-blue shadow-[0_8px_20px_rgba(2,12,24,0.35)]"
          >
            Show Conversation
          </button>
        )}

        {isTranscriptOpen && (
          <div className="max-h-48 w-full overflow-y-auto rounded-xl border border-cyber-blue/15 bg-black/70 px-3 py-3 text-xs shadow-[0_12px_30px_rgba(2,12,24,0.45)] backdrop-blur">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-[0.35em] text-gray-400">Recent</span>
              <button
                type="button"
                onClick={() => setIsTranscriptOpen(false)}
                className="sm:hidden text-[9px] uppercase tracking-[0.3em] text-cyber-blue"
              >
                Hide
              </button>
            </div>
            {conversationHistory.length === 0 ? (
              <div className="text-center text-[11px] text-gray-400 sm:text-left">
                Conversation will appear here after you chat.
              </div>
            ) : (
              conversationHistory
                .slice(-6)
                .reverse()
                .map((item) => (
                  <div key={item.id} className={`mb-2 last:mb-0 ${item.role === 'user' ? 'text-cyan-300' : 'text-pink-300'}`}>
                    <div className="font-mono text-[9px] uppercase tracking-[0.25em] opacity-70">{item.role}</div>
                    <div className="text-xs leading-relaxed">{item.text}</div>
                  </div>
                ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
