//vite.config.json
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    root: './sponsorship-frontend/src',
    build: {
      rollupOptions: {
        input: './index.html',
      }
    },
    plugins: [react()],
  });
  