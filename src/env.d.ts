/// <reference types="astro/client" />


interface ImportMetaEnv {
  readonly PUBLIC_BACKEND_URL: string;
  readonly AUTH_SECRET:        string
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}