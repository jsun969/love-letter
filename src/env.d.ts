/// <reference types="astro/client" />

interface Window {
	Alpine: import('alpinejs').Alpine;
}

interface ImportMetaEnv {
	readonly DATABASE_URL: string;
	readonly DATABASE_AUTH_TOKEN?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
