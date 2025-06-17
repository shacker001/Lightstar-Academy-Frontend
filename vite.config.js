//vite.config.json
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: '.spornsorship-frontend/src',  // if your index.html is inside src/
  plugins: [react()],
})

// export default defineConfig({
//     root: './src',
//     build: {
//       rollupOptions: {
//         input: './src/index.html', // Explicitly defining entry point
//       }
//     },
//     plugins: [react()],
//   });
  