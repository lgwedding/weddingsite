import { createNavigation } from "next-intl/navigation";
import { defineRouting } from 'next-intl/routing';
// import { locales } from "./i18n/settings";

export const routing = defineRouting({
  locales: ['hu-HU', 'ro-RO'],
  defaultLocale: 'hu-HU',
  localePrefix: {
    mode: 'always',
    prefixes: {
      'hu-HU': '/hu',
      'ro-RO': '/ro'
    }
  }
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
