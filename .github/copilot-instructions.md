# Copilot Instructions

## Big Picture
- React 19 + TypeScript app bootstrapped with Vite (`src/main.tsx`) and wrapped in a `HashRouter` for GitHub Pages compatibility; routes render through `src/components/layout/Layout.tsx`.
- Layout layers a global `MatrixRain` canvas backdrop and expects sections to expose anchored IDs so `HashRouter` hash navigation + smooth scroll in `Layout` keeps working.
- Visual identity leans on custom Tailwind design tokens defined in `tailwind.config.cjs` (`cyber-*` colors, dystopian font) and utility components declared in `src/index.css` (`cyber-button`, `cyber-card`, etc.).

## Key Systems & Patterns
- `GuideOrbAssistant` in `src/components/ui/GuideOrbAssistant.tsx` orchestrates the voice UI: Web Speech recognition + synthesis, navigation intent routing, Wikipedia fallback, and localStorage memory. Keep its JSON protocol in sync with `src/config/agentPrompts.ts` and `src/services/actionParser.ts` when extending assistant features.
- `GuideOrb` (`src/components/ui/GuideOrb.tsx`) renders the hero globe with Three.js. It now builds procedural Earth textures, adds an animated neural network layer, and manages manual disposals; reuse its helpers (`createEarthTextures`, `createNetworkLayer`) when introducing new 3D flourishes to avoid GPU leaks.
- Static page content lives in purpose-built modules: blog metadata in `src/content/blogs.ts`, section components in `src/components/sections`, and route shells in `src/pages`. Follow this separation instead of embedding large data literal blocks inside pages.
- Tailwind-first styling is assumed, but bespoke animations sit in component CSS or utility layers. Prefer extending Tailwind via `@apply` inside `index.css` if you need new recurring patterns.
- Local caching utilities (`src/services/cache/indexeddb.ts`) wrap IndexedDB via `idb`; reuse them for agent data instead of new storage calls.

## Workflow Notes
- Common scripts: `npm run dev` (Vite dev server), `npm run build` (type-check + bundle), `npm run lint`, and `npm run deploy` (prebuild + `gh-pages`). Build relies on `tsc -b`, so fix type errors before shipping.
- Hash-based routing means deep links expect `/index.html#/path`; when adding routes ensure navigation helpers use hash-friendly paths and update `Navbar` anchors.
- Images ship from `public/images`; keep filenames in sync with the literals declared in components like `Projects.tsx` (see open TODO in `TODO.md`).
- When touching speech or transformer features, guard for browser support—existing hooks already bail out gracefully; match that pattern.

## Testing & Verification
- After editing Three.js or canvas code, validate `GuideOrb` renders without console warnings and that cleanup disposes resources (check devtools performance tab if in doubt).
- For voice features, confirm both recognition and synthesis paths degrade gracefully when APIs are unavailable (emits `mode: 'error'`).

## Integration Reminders
- Deployment targets a custom domain with `vite.config.ts` `base: '/'`; do not change unless you understand domain routing.
- Fonts load from `/sd-dystopian-font`; include corresponding `@font-face` updates if adding more custom fonts.
- Keep accessibility affordances (role, `aria-*`, keyboard handlers) intact on interactive elements like the orb and navigation buttons.

Let us know if any section needs deeper detail or if new patterns emerge that should be documented here."}