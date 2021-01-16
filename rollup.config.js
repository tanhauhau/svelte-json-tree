import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const name = pkg.name
	.replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
	.replace(/^\w/, m => m.toUpperCase())
	.replace(/-\w/g, m => m[1].toUpperCase());

export default {
  input: 'src/Root.svelte',
	output: [
		{
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
		{
      file: pkg.main,
      format: 'umd',
      name,
      sourcemap: true,
    },
	],
  plugins: [
    svelte({
      emitCss: false,
    }),
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
