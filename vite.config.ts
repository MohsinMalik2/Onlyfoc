import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'OnlyFoc',
        short_name: 'OnlyFoc',
        description: 'Productivity Timer App',
        theme_color: '#18cb96', // Updated to match the primary color
        icons: [
          {
            src: '/images/brand/192x192 - onlyfoc.png', // Relative path for 192x192 icon
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/images/brand/512x512 - onlyfoc.png', // Relative path for 512x512 icon
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        navigateFallback: null,
        cleanupOutdatedCaches: true,
        sourcemap: false,
      },
      devOptions: {
        enabled: true,
        type: 'module',
        navigateFallback: 'index.html',
      },
    }),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});