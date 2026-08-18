import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: './',
  build: {
    modulePreload: false,
    chunkSizeWarningLimit: mode === 'standalone' ? 1000 : 500,
    rolldownOptions: {
      output: {
        codeSplitting: mode !== 'standalone',
      },
    },
  },
}))
