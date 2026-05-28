import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          /* React core — stays tiny, cached forever */
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          /* Animation libraries — split from app code */
          'vendor-gsap':  ['gsap'],
          'vendor-motion': ['framer-motion'],
          /* Three.js isolated — lazy loaded only by HeroGL */
          'vendor-three': ['three'],
          /* Form utilities */
          'vendor-forms': ['react-hook-form', 'zod', '@hookform/resolvers'],
        },
      },
    },
    /* Raise warning threshold slightly since we're code-splitting intentionally */
    chunkSizeWarningLimit: 700,
  },
})
