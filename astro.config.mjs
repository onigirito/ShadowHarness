// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://onigirito.github.io',
  base: '/ShadowHarness/',
  integrations: [sitemap()],
});
