import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/meghana/' : '/',
  server: {
    port: 3000,
    open: true,
  },
}));
