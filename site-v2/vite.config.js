import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    // sem preload polyfill: evita referências ./assets/*.js soltas,
    // essenciais para o standalone.html abrir limpo via file://
    modulePreload: false,
    rollupOptions: { output: { inlineDynamicImports: true } },
  },
})
