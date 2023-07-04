import { sveltekit } from '@sveltejs/kit/vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import process from 'node:process';

const BUILD_MODE = process.env.BUILD_MODE;

let config;
if (BUILD_MODE === 'standalone') {
	config = defineConfig({
		build: {
			outDir: 'dist/standalone',
			lib: {
				entry: 'dist/lib/index.js',
				name: 'SvelteJsonTree',
				fileName: (format) => `${format}/index.js`,
				formats: ['umd', 'es'],
			},
		},
		plugins: [svelte({ extensions: ['.svelte'], emitCss: false })],
	});
} else if (BUILD_MODE === 'bundled') {
	config = defineConfig({
		build: {
			outDir: 'dist/esm',
			lib: {
				entry: 'dist/lib/index.js',
				name: 'SvelteJsonTree',
				fileName: 'index',
				formats: ['es'],
			},
			rollupOptions: {
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
			},
		},
		plugins: [svelte({ extensions: ['.svelte'], emitCss: false })],
	});
} else {
	config = defineConfig({
		plugins: [sveltekit()]
	});
}

export default config;