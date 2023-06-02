import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import shiki from 'shiki';

let highlighter;

const config = defineConfig({
  extensions: ['.svelte.md', '.md', '.svx'],

  smartypants: {
    dashes: 'oldschool',
  },

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

  remarkPlugins: [],
  rehypePlugins: [],
});

export default config;

function escape_svelty(str) {
  return str.replace(/[{}`]/g, (c) => ({ '{': '&#123;', '}': '&#125;', '`': '&#96;' }[c])).replace(/\\([trn])/g, '&#92;$1');
}
