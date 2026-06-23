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
      // Klinik dışı Velo sayfası noindex; sitemap'ten de hariç tut.
      filter: (page) =>
        !/\/(kisisel|en\/personal)\/?$/.test(new URL(page).pathname),
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
