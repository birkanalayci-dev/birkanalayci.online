import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build
export default defineConfig({
  site: 'https://birkanalayci.online',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr', 'en', 'ru', 'ar'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      // Velo (klinik dışı) ve şimdilik gizli hekim kılavuz destesi noindex;
      // sitemap'ten de hariç tut.
      filter: (page) =>
        !/\/(kisisel|en\/personal|kilavuz-kartlari)\/?$/.test(new URL(page).pathname),
      i18n: {
        defaultLocale: 'tr',
        locales: {
          tr: 'tr-TR',
          en: 'en',
          ru: 'ru',
          ar: 'ar',
        },
      },
    }),
  ],
  build: {
    inlineStylesheets: 'always',
  },
});
