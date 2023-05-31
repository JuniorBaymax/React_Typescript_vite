import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import reactRefresh from '@vitejs/plugin-react-refresh';
import tsconfigPaths from 'vite-tsconfig-paths';
import eslintPlugin from 'vite-plugin-eslint';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    splitVendorChunkPlugin(),
    eslintPlugin({
      cache: false,
      include: './src/**/*.tsx',
      exclude: [],
      formatter: 'stylish',
      extensions: ['.tsx', '.ts'],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  // optimizeDeps: {
  //   include: ['axios', 'react', 'react-dom', 'react-router-dom'],
  // },
  build: {
    target: 'es2020',
    outDir: 'dist',
    assetsDir: 'assets',
    cssCodeSplit: true,
    sourcemap: true,
  },
  server: {
    port: 5000,
    open: true,
    https: false,
    proxy: {
      '/api': {
        target: 'https://example.com',
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
    hmr: {
      overlay: true,
    },
  },
});
