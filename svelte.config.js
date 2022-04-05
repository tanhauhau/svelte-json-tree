import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import mm from 'micromatch';
import { readFileSync } from 'fs';
import shiki from 'shiki';

let highlighter;
// const theme = JSON.parse(readFileSync('node_modules/shiki/themes/dracula.json', 'utf-8'));

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    preprocess(),
    mdsvex({
      extensions: ['.md'],
      highlight: {
        highlighter: async (code, lang) => {
          if (!highlighter) {
            highlighter = await shiki.getHighlighter({
              theme: 'dracula-soft',
            });
          }

          return escape_svelty(highlighter.codeToHtml(code, { lang }));
        },
      },
    }),
  ],
  paths: {
    assets: 'https://lihautan.com/svelte-json-tree',
  },
  kit: {
    adapter: adapter({
      pages: 'docs',
      assets: 'docs',
      fallback: null,
    }),
    package: {
      files: mm.matcher('!doc-components/**/*'),
    },
  },
  extensions: ['.svelte', '.md'],
};

export default config;

function escape_svelty(str) {
  return str.replace(/[{}`]/g, (c) => ({ '{': '&#123;', '}': '&#125;', '`': '&#96;' }[c])).replace(/\\([trn])/g, '&#92;$1');
}
