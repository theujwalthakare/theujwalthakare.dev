export type AgentActionType =
  | 'respond'
  | 'navigate'
  | 'highlight'
  | 'open_modal'
  | 'search'
  | 'none';

export type AgentAction = {
  action: AgentActionType;
  target: string;
  confidence: number;
  summary: string;
  speak: boolean;
  meta?: Record<string, unknown>;
};

export type ParseResult = {
  ok: true;
  value: AgentAction;
} | {
  ok: false;
  error: string;
};

export const parseAgentResponse = (raw: string): ParseResult => {
  try {
    const parsed = JSON.parse(raw.trim()) as Partial<AgentAction>;
    if (!parsed || typeof parsed !== 'object') {
      return { ok: false, error: 'Response payload was not an object.' };
    }

    const required: Array<keyof AgentAction> = ['action', 'target', 'confidence', 'summary', 'speak'];
    for (const key of required) {
      if (!(key in parsed)) {
        return { ok: false, error: `Missing field: ${key}` };
      }
    }

    const action = parsed.action;
    if (!action || typeof action !== 'string') {
      return { ok: false, error: 'Invalid action field.' };
    }

    if (!['respond', 'navigate', 'highlight', 'open_modal', 'search', 'none'].includes(action)) {
      return { ok: false, error: `Unsupported action: ${action}` };
    }

    const target = typeof parsed.target === 'string' ? parsed.target : '';
    const confidence = typeof parsed.confidence === 'number' ? parsed.confidence : Number(parsed.confidence);
    const summary = typeof parsed.summary === 'string' ? parsed.summary : '';
    const speak = Boolean(parsed.speak);
    const meta = (parsed.meta && typeof parsed.meta === 'object') ? parsed.meta : {};

    if (!Number.isFinite(confidence) || confidence < 0 || confidence > 1) {
      return { ok: false, error: 'Confidence must be between 0 and 1.' };
    }

    return {
      ok: true,
      value: { action, target, confidence, summary, speak, meta },
    };
  } catch (error) {
    return { ok: false, error: error instanceof Error ? error.message : 'Failed to parse response.' };
  }
};
