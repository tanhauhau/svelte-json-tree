import path from 'path';
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

const STANDALONE = !!process.env.STANDALONE;

let outDir,
  fileName,
  formats,
  rollupOptions = {};
if (STANDALONE) {
  outDir = 'package/dist/standalone';
  fileName = (format) => `${format}/index.js`;
  formats = ['umd', 'es', 'cjs'];
} else {
  outDir = 'package/dist';
  fileName = (format) => `${format}/index.js`;
  formats = ['es', 'cjs'];
  rollupOptions = {
    external: [
      'svelte',
      'svelte/animate',
      'svelte/easing',
      'svelte/internal',
      'svelte/motion',
      'svelte/store',
      'svelte/transition',
      'svelte/ssr',
    ],
  };
}

export default defineConfig({
  build: {
    outDir,
    lib: {
      entry: path.resolve('package/index.js'),
      name: 'SvelteJsonTree',
      fileName,
      formats,
    },
    rollupOptions,
  },
  plugins: [svelte({ extensions: ['.svelte'], emitCss: false })],
});
