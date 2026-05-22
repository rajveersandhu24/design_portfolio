import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/design_portfolio/',
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('matter-js')) {
              return 'vendor-matter';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-motion';
            }
            return 'vendor'; // standard vendor chunk for React, Router, Lenis, etc.
          }
        }
      }
    }
  }
})
