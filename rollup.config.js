const svelte = require('rollup-plugin-svelte');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const { terser } = require('rollup-plugin-terser');

module.exports = {
  input: 'src/Root.svelte',
  output: {
    sourcemap: true,
    format: 'cjs',
    file: 'dist/index.js',
  },
  plugins: [
    svelte({}),
    resolve({
      browser: true,
      dedupe: importee =>
        importee === 'svelte' || importee.startsWith('svelte/'),
    }),
    commonjs(),
    terser(),
  ],
  watch: {
    clearScreen: false,
  },
};
