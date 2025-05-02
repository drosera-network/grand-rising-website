// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://drosera-network.github.io',
  base: '/grand-rising-website',
  vite: {
    plugins: [tailwindcss()]
  }
});