// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Important pour les routes Apache
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  // Si vous déployez dans un sous-dossier
  // base: '/mon-sous-dossier/'
})