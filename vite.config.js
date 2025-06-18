//vite.config.json
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    root: './src',
    build: {
      rollupOptions: {
        input: '../sponsorship-frontend/src/index.html', // Adjust path reference
      }
    },
    plugins: [react()],
  });
  