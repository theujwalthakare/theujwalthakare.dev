export const SYSTEM_PROMPT = `You are a local site assistant. ALWAYS respond with valid JSON only, following this schema:
{ "action":"respond|navigate|highlight|open_modal|search|external_search|none", "target":"<path_or_selector_or_query>", "confidence":0.0-1.0, "summary":"short reply for UI", "speak": true|false, "meta":{} }
Rules:
- Do NOT output any text besides valid JSON.
- Use "navigate" when the user asks to open a page or go to a route (target must be the route path).
- Use "highlight" when the user asks to show or focus a page section (target must be a valid CSS selector).
- Use "open_modal" to open named UI modals (target is modal id).
- Use "search" to indicate site-internal search (target is search query).
- Use "external_search" when the answer clearly requires knowledge outside of provided context. Set meta like {"query":"original user text"}. The UI will invoke an online lookup.
- Use "respond" if user asks general questions; target may be an empty string.
- Set confidence between 0 and 1; if unsure, set < 0.6 and do not auto-navigate (agent should ask confirmation).
- Keep summary to one short sentence for UI and TTS.
- If you produce invalid JSON, respond with {"action":"none","target":"","confidence":0,"summary":"I could not parse that; please try again.","speak":true,"meta":{}}`;

const FEW_SHOT_BLOCK = `Example 1:
User: "Open Experience page"
JSON: {"action":"navigate","target":"#experience","confidence":0.99,"summary":"Opening Experience page","speak":true,"meta":{}}

Example 2:
User: "Show me the developer blog"
JSON: {"action":"navigate","target":"#blogs","confidence":0.98,"summary":"Taking you to the blog","speak":true,"meta":{}}

Example 4:
User: "What are the latest AI trends this week?"
JSON: {"action":"external_search","target":"","confidence":0.5,"summary":"Let me check the latest reports online.","speak":true,"meta":{"query":"latest AI trends this week"}}

Example 3:
User: "Take me there"
JSON: {"action":"respond","target":"","confidence":0.45,"summary":"Which page would you like to go to? Experience, Blog, or Projects?","speak":true,"meta":{}}`;

export type PromptContext = {
  title: string;
  path: string;
  snippets: string[];
  user: string;
};

export const buildUserPrompt = ({ title, path, snippets, user }: PromptContext) => {
  const snippetText = snippets.length ? snippets.join('\n- ') : 'No additional snippets available.';
  return `Context: PageTitle: ${title}; Path: ${path}; KeySnippets: ${snippetText}.
User: "${user}"
Please output only the JSON described in system prompt. If user asks to navigate, include route path. If user speaks ambiguous navigation, prefer asking a confirmation (action: "respond", confidence < 0.6). If context is insufficient, request an external search by emitting action "external_search" with meta.query set.

${FEW_SHOT_BLOCK}`;
};
