const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');
const workbox = require('workbox-build');

module.exports = defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
        entryFileNames: '[name].[hash].js',
        chunkFileNames: '[name].[hash].js',
        assetFileNames: '[name].[hash].[ext]',
        format: 'es',
      },

    },
    outDir: 'dist',
    emptyOutDir: true,
    assetsInlineLimit: 0,
    sourcemap: false,
    chunkSizeWarningLimit: 1500,
    write: true,
    minify: true,
    brotliSize: true,
    manifest: true,
    target: 'es2018',
    terserOptions: {
      format: {
        comments: false,
      },
      compress: {
        drop_console: true,
        drop_debugger: true,
        ecma: 2018,
        module: true,
        toplevel: true,
        warnings: false,
      },
    },
  },
});
