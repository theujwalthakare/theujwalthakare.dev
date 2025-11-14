import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

type VoiceStatus = 'idle' | 'initializing' | 'listening' | 'error';

type UseVoiceOptions = {
  lang?: string;
  continuous?: boolean;
  interimResults?: boolean;
  autoStop?: boolean;
  onPartialTranscript?: (text: string) => void;
  onFinalTranscript?: (text: string) => void;
  onError?: (message: string) => void;
};

type SpeakOptions = {
  voiceId?: string;
  rate?: number;
  pitch?: number;
  volume?: number;
};

const DEFAULT_OPTIONS: Required<Pick<UseVoiceOptions, 'lang' | 'continuous' | 'interimResults' | 'autoStop'>> = {
  lang: 'en-US',
  continuous: false,
  interimResults: true,
  autoStop: true,
};

const getRecognitionConstructor = () => {
  if (typeof window === 'undefined') {
    return null;
  }
  const globalWindow = window as typeof window & {
    SpeechRecognition?: unknown;
    webkitSpeechRecognition?: unknown;
  };
  const ctor = (globalWindow as any).SpeechRecognition || (globalWindow as any).webkitSpeechRecognition;
  return (ctor ?? null) as { new (): any } | null;
};

type VoiceHookState = {
  status: VoiceStatus;
  isListening: boolean;
  transcript: string;
  partialTranscript: string;
  error: string | null;
  speechError: string | null;
  isSpeaking: boolean;
};

const INITIAL_STATE: VoiceHookState = {
  status: 'idle',
  isListening: false,
  transcript: '',
  partialTranscript: '',
  error: null,
  speechError: null,
  isSpeaking: false,
};

export const useVoice = (options?: UseVoiceOptions) => {
  const mergedOptions = useMemo(() => ({ ...DEFAULT_OPTIONS, ...options }), [options]);
  const optionsRef = useRef({ ...mergedOptions });

  useEffect(() => {
    optionsRef.current = { ...mergedOptions };
  }, [mergedOptions]);

  const [state, setState] = useState<VoiceHookState>(INITIAL_STATE);
  const recognitionRef = useRef<any | null>(null);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const voicesRef = useRef<SpeechSynthesisVoice[]>([]);
  const [preferredVoiceId, setPreferredVoiceId] = useState<string | null>(null);

  const isRecognitionSupported = useMemo(() => Boolean(getRecognitionConstructor()), []);
  const isSynthesisSupported = useMemo(() => typeof window !== 'undefined' && 'speechSynthesis' in window, []);

  const updateVoices = useCallback(() => {
    if (!isSynthesisSupported || typeof window === 'undefined') {
      return;
    }
    try {
      const list = window.speechSynthesis.getVoices();
      voicesRef.current = list;
      setVoices(list);
    } catch (error) {
      setState(prev => ({ ...prev, speechError: 'Unable to load speech voices.' }));
    }
  }, [isSynthesisSupported]);

  useEffect(() => {
    if (!isSynthesisSupported || typeof window === 'undefined') {
      return;
    }
    updateVoices();

    const handler = () => updateVoices();
    window.speechSynthesis.addEventListener?.('voiceschanged', handler);

    return () => {
      window.speechSynthesis.removeEventListener?.('voiceschanged', handler);
    };
  }, [isSynthesisSupported, updateVoices]);

  const ensureRecognition = useCallback(() => {
    if (!isRecognitionSupported) {
      return null;
    }
    if (recognitionRef.current) {
      return recognitionRef.current;
    }

    const Ctor = getRecognitionConstructor();
    if (!Ctor) {
      return null;
    }

    const recognition: any = new Ctor();
    recognition.maxAlternatives = 1;
    recognition.continuous = optionsRef.current.continuous;
    recognition.interimResults = optionsRef.current.interimResults;
    recognition.lang = optionsRef.current.lang;

    recognition.onstart = () => {
      setState(prev => ({ ...prev, status: 'listening', isListening: true, error: null }));
    };

    recognition.onresult = (event: any) => {
      let interim = '';
      let finalText = '';

      for (let i = event.resultIndex; i < event.results.length; i += 1) {
        const result = event.results[i];
        const text = result[0]?.transcript ?? '';
        if (result.isFinal) {
          finalText += text;
        } else {
          interim += text;
        }
      }

      if (interim) {
        const trimmed = interim.trim();
        setState(prev => ({ ...prev, partialTranscript: trimmed }));
        optionsRef.current.onPartialTranscript?.(trimmed);
      } else {
        setState(prev => ({ ...prev, partialTranscript: '' }));
      }

      if (finalText) {
        const trimmed = finalText.trim();
        setState(prev => ({
          ...prev,
          transcript: prev.transcript ? `${prev.transcript} ${trimmed}`.trim() : trimmed,
          partialTranscript: '',
        }));
        optionsRef.current.onFinalTranscript?.(trimmed);
        if (optionsRef.current.autoStop) {
          try {
            recognition.stop();
          } catch (_) {
            /* ignore stop errors */
          }
        }
      }
    };

    recognition.onerror = (event: any) => {
      const errorMessage = event?.error === 'not-allowed'
        ? 'Microphone permission denied. Allow access and try again.'
        : (event?.error || 'Speech recognition error.');
      setState(prev => ({ ...prev, status: 'error', isListening: false, partialTranscript: '', error: errorMessage }));
      optionsRef.current.onError?.(errorMessage);
    };

    recognition.onend = () => {
      setState(prev => ({ ...prev, status: 'idle', isListening: false, partialTranscript: '' }));
    };

    recognitionRef.current = recognition;
    return recognition;
  }, [isRecognitionSupported]);

  const start = useCallback(() => {
    if (!isRecognitionSupported) {
      const errorMessage = 'Speech recognition is not supported in this browser.';
      setState(prev => ({ ...prev, status: 'error', error: errorMessage }));
      optionsRef.current.onError?.(errorMessage);
      return false;
    }

    const recognition = ensureRecognition();
    if (!recognition) {
      const errorMessage = 'Unable to initialize speech recognition.';
      setState(prev => ({ ...prev, status: 'error', error: errorMessage }));
      optionsRef.current.onError?.(errorMessage);
      return false;
    }

    if (state.isListening) {
      return true;
    }

    try {
      recognition.lang = optionsRef.current.lang;
      recognition.continuous = optionsRef.current.continuous;
      recognition.interimResults = optionsRef.current.interimResults;
      setState(prev => ({ ...prev, status: 'initializing', error: null }));
      recognition.start();
      return true;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to start recognition.';
      setState(prev => ({ ...prev, status: 'error', error: errorMessage }));
      optionsRef.current.onError?.(errorMessage);
      return false;
    }
  }, [ensureRecognition, isRecognitionSupported, state.isListening]);

  const stop = useCallback(() => {
    const recognition = recognitionRef.current;
    if (recognition && state.isListening) {
      try {
        recognition.stop();
      } catch (_) {
        /* ignore */
      }
    }
  }, [state.isListening]);

  const reset = useCallback(() => {
    setState(prev => ({ ...prev, transcript: '', partialTranscript: '', error: null }));
  }, []);

  const cancelSpeech = useCallback(() => {
    if (!isSynthesisSupported || typeof window === 'undefined') {
      return;
    }
    window.speechSynthesis.cancel();
    setState(prev => ({ ...prev, isSpeaking: false }));
  }, [isSynthesisSupported]);

  const speak = useCallback(async (message: string, speakOptions?: SpeakOptions) => {
    if (!isSynthesisSupported || typeof window === 'undefined') {
      const errorMessage = 'Speech synthesis is not supported in this browser.';
      setState(prev => ({ ...prev, speechError: errorMessage }));
      return false;
    }

    if (!message?.trim()) {
      return false;
    }

    try {
      const utterance = new SpeechSynthesisUtterance(message);
      const { rate = 1, pitch = 1, volume = 1, voiceId } = speakOptions ?? {};
      utterance.rate = rate;
      utterance.pitch = pitch;
      utterance.volume = volume;

      const targetVoiceId = voiceId ?? preferredVoiceId;
      if (targetVoiceId) {
        const selected = voicesRef.current.find(
          voice => voice.voiceURI === targetVoiceId || voice.name === targetVoiceId,
        );
        if (selected) {
          utterance.voice = selected;
        }
      }

      cancelSpeech();
      setState(prev => ({ ...prev, speechError: null, isSpeaking: true }));

      return await new Promise<boolean>((resolve) => {
        utterance.onend = () => {
          setState(prev => ({ ...prev, isSpeaking: false }));
          resolve(true);
        };
        utterance.onerror = () => {
          const errorMessage = 'Speech synthesis failed.';
          setState(prev => ({ ...prev, isSpeaking: false, speechError: errorMessage }));
          resolve(false);
        };
        window.speechSynthesis.speak(utterance);
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Speech synthesis failed.';
      setState(prev => ({ ...prev, isSpeaking: false, speechError: errorMessage }));
      return false;
    }
  }, [cancelSpeech, isSynthesisSupported, preferredVoiceId]);

  useEffect(() => () => {
    try {
      recognitionRef.current?.abort?.();
    } catch (_) {
      /* ignore cleanup errors */
    }
  }, []);

  return {
    status: state.status,
    isListening: state.isListening,
    transcript: state.transcript,
    partialTranscript: state.partialTranscript,
    error: state.error,
    speechError: state.speechError,
    isSpeaking: state.isSpeaking,
    isRecognitionSupported,
    isSynthesisSupported,
    voices,
    preferredVoiceId,
    setPreferredVoiceId,
    start,
    stop,
    reset,
    speak,
    cancelSpeech,
  };
};
