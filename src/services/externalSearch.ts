/**
 * External search bridge.
 * Calls our backend relay endpoint which should wrap any third-party provider
 * (e.g., Google AI Studio, Gemini, Serper). Keep API keys server-side only.
 */

const ENDPOINT = import.meta.env.VITE_EXTERNAL_SEARCH_ENDPOINT ?? '/api/external-search';
const API_KEY = import.meta.env.VITE_EXTERNAL_SEARCH_CLIENT_KEY;

export type ExternalSearchResponse = {
  summary: string;
  source?: string;
};

export const fetchExternalAnswer = async (query: string): Promise<ExternalSearchResponse | null> => {
  if (!query.trim()) return null;

  try {
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(API_KEY ? { 'x-client-key': API_KEY } : {}),
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      let errorDetail: unknown = null;
      try {
        errorDetail = await response.clone().json();
      } catch {
        try {
          errorDetail = await response.text();
        } catch {
          errorDetail = null;
        }
      }
      console.warn('External search failed:', response.status, response.statusText, errorDetail);
      return null;
    }

    const data = (await response.json()) as Partial<ExternalSearchResponse> & { summary?: string };
    if (!data?.summary) {
      return null;
    }
    return { summary: data.summary.trim(), source: data.source };
  } catch (error) {
    console.warn('External search request error', error);
    return null;
  }
};
