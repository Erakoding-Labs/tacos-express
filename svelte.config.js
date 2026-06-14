import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		// Pin the serverless runtime so the build doesn't depend on the
		// builder's Node version (Vercel currently ships Node 24).
		adapter: adapter({ runtime: 'nodejs20.x' }),
		alias: {
			$lib: 'src/lib'
		}
	}
};

export default config;
