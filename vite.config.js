import { sentryVitePlugin } from '@sentry/vite-plugin';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint(),
    sentryVitePlugin({
      org: 'jsm-z3',
      project: 'mock-apple-website',
    }),
  ],

  build: {
    sourcemap: true,
  },
});
