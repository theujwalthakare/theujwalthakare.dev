/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_EXTERNAL_SEARCH_ENDPOINT?: string;
	readonly VITE_EXTERNAL_SEARCH_CLIENT_KEY?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

declare module '*.mp3' {
	const src: string;
	export default src;
}
