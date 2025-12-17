// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';  // Confirm this is installed: npm i -D @tailwindcss/vite

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'classic',  // ← Add this line
    }),
    tailwindcss(),
  ],
  base: '/',
});