import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh';
import { VitePWA } from 'vite-plugin-pwa';
import { generateSW } from 'workbox-build';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
    react(),
    reactRefresh(),
    VitePWA({
      manifest: {
        name: 'Agromart Site',
        short_name: 'Agromart',
        icons: [
          {
            src: '/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#000000',
        display: 'standalone',
      },
      workbox: {
        generateSW,
        globDirectory: 'dist',
        globPatterns: ['**/*.{html,js,css}'],
        runtimeCaching: [
          {
            urlPattern: new RegExp('^https://myapi.com/'),
            handler: 'NetworkFirst',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, './src/assets'),
    },
  },
})
