import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['bs', 'en'],
  defaultLocale: 'bs',
  localePrefix: 'as-needed',
});

export type Locale = (typeof routing.locales)[number];
