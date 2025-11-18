import { GoogleGenerativeAI } from '@google/generative-ai';

/**
 * Minimal serverless handler (Vercel-style) that proxies user queries to a
 * third-party generative search provider. Deploy this under your hosting
 * platform's serverless directory. Keep API keys in environment variables.
 */

// Avoid a hard dependency on @vercel/node types in this project; use any for handler params.

// Set these environment variables in your hosting platform.
const GOOGLE_GENAI_API_KEY = process.env.GOOGLE_GENAI_API_KEY ?? '';
const GOOGLE_GENAI_MODEL = process.env.GOOGLE_GENAI_MODEL ?? 'gemini-2.5-flash';

let cachedClient: GoogleGenerativeAI | null = null;

const getModel = () => {
  if (!GOOGLE_GENAI_API_KEY) {
    return null;
  }
  if (!cachedClient) {
    cachedClient = new GoogleGenerativeAI(GOOGLE_GENAI_API_KEY);
  }
  return cachedClient.getGenerativeModel({ model: GOOGLE_GENAI_MODEL });
};

const buildPrompt = (query: string) =>
  `You are assisting visitors on theujwalthakare.dev. Provide a concise, factual paragraph answering: "${query}". ` +
  'Cite relevant highlights when possible. Keep it under 120 words.';

const extractSummary = (result: any): string | null => {
  if (!result) return null;

  const direct = typeof result?.response?.text === 'function' ? result.response.text() : '';
  if (typeof direct === 'string' && direct.trim()) return direct.trim();

  const rawText = typeof result?.text === 'string' ? result.text.trim() : '';
  if (rawText) return rawText;

  const candidates = result?.response?.candidates ?? result?.candidates;
  if (Array.isArray(candidates)) {
    const joined = candidates
      .map((candidate: any) =>
        (candidate?.content?.parts ?? [])
          .map((part: any) => (typeof part?.text === 'string' ? part.text : ''))
          .join(' ')
      )
      .join('\n')
      .trim();
    if (joined) return joined;
  }

  return null;
};

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const model = getModel();
  if (!model) {
    res.status(500).json({ error: 'Missing GOOGLE_GENAI_API_KEY env variable.' });
    return;
  }

  const query = typeof req.body?.query === 'string' ? req.body.query.trim() : '';
  if (!query) {
    res.status(400).json({ error: 'Query is required.' });
    return;
  }

  try {
    const prompt = buildPrompt(query);
    const response = await model.generateContent(prompt);

    const summary = extractSummary(response);

    if (!summary) {
      res.status(502).json({ error: 'Provider returned no content.' });
      return;
    }

    res.status(200).json({ summary, source: 'google_gemini' });
  } catch (error) {
    res.status(500).json({ error: 'External lookup failed.', detail: (error as Error).message });
  }
}
