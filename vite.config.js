import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: './src',  // if your index.html is inside src/
  plugins: [react()],
})
