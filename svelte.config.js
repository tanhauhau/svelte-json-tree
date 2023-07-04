import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

let highlighter;

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],
  preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],
  kit: {
    paths: {
      assets: 'https://lihautan.com/svelte-json-tree',
      base: dev ? '' : '/svelte-json-tree',
    },
    adapter: adapter({
      fallback: null,
    }),
    prerender: {
      entries: ['*'],
      crawl: false,
    },
  },
};

export default config;
