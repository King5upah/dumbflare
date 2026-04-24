import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Used only for the GitHub Pages demo build — no library mode
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/dumbflare/',
  build: {
    outDir: 'demo-dist',
  },
});
