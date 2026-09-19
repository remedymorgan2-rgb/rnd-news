import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://remedymorgan2-rgb.github.io/rnd-news',
  output: 'static',
  base: '/rnd-news',
  integrations: [tailwind(), sitemap()],
});
