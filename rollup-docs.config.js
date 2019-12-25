const svelte = require('rollup-plugin-svelte');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const { terser } = require('rollup-plugin-terser');

const production = !process.env.ROLLUP_WATCH;

module.exports = {
  input: 'docs-src/main.js',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'docs/bundle.js',
  },
  plugins: [
    svelte({
      dev: !production,
      css: css => {
        css.write('docs/bundle.css');
      },
    }),
    resolve({
      browser: true,
      dedupe: importee =>
        importee === 'svelte' || importee.startsWith('svelte/'),
    }),
    commonjs(),
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};
