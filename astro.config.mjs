import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';
import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), svelte(), alpinejs()],
    output: 'server',
    adapter: netlify(),
});
