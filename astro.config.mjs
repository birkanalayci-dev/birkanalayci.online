import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build
export default defineConfig({
  site: 'https://birkanalayci.online',
  trailingSlash: 'ignore',

  i18n: {
    defaultLocale: 'tr',
    locales: ['tr', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [
    sitemap({
      // Velo (akademik dışı) sayfası noindex; sitemap'ten de hariç tut.
      filter: (page) => !/\/(kisisel|en\/personal)\/?$/.test(new URL(page).pathname),
      i18n: {
        defaultLocale: 'tr',
        locales: {
          tr: 'tr-TR',
          en: 'en',
        },
      },
    }),
  ],

  build: {
    inlineStylesheets: 'always',
  },

  adapter: cloudflare(),
});
