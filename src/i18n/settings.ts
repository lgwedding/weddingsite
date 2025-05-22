export const locales = ["ro", "hu"] as const;
export const defaultLocale = "hu" as const;

export type Locale = (typeof locales)[number];
