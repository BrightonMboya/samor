// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://samursafaris.com',
  integrations: [sitemap({ i18n: { defaultLocale: 'ar', locales: { en: 'en', ar: 'ar' } } })],
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'ar',
    routing: { prefixDefaultLocale: false },
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Poppins',
      cssVariable: '--font-poppins',
      weights: [400, 500, 600, 700],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Roboto Serif',
      cssVariable: '--font-roboto-serif',
      weights: [400, 500],
      fallbacks: ['Georgia', 'serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'IBM Plex Sans Arabic',
      cssVariable: '--font-plex-arabic',
      weights: [400, 500, 600, 700],
      subsets: ['arabic', 'latin'],
      fallbacks: ['Tahoma', 'sans-serif'],
    },
  ],
});
