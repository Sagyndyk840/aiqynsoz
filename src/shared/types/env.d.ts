/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BACKEND_API_DEV_URL: string
  readonly VITE_BACKEND_API_PROD_URL: string
  readonly VITE_PROD: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
