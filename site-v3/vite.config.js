import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const pagina = (caminho) => fileURLToPath(new URL(caminho, import.meta.url))

// As páginas legais só entram no build de produção. O standalone é um HTML único.
const paginas = {
  main: pagina('./index.html'),
  termos: pagina('./termos-de-uso/index.html'),
  privacidade: pagina('./politica-de-privacidade/index.html'),
  publicidade: pagina('./politica-de-publicidade/index.html'),
}

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: './',
  build: {
    modulePreload: false,
    chunkSizeWarningLimit: mode === 'standalone' ? 1000 : 500,
    rolldownOptions: {
      input: mode === 'standalone' ? undefined : paginas,
      output: {
        codeSplitting: mode !== 'standalone',
      },
    },
  },
}))
