export const locales = ["en", "pt", "es", "fr", "de"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  pt: "Portugues",
  es: "Espanhol",
  fr: "Frances",
  de: "Alemao",
};

export const localeNativeLabels: Record<Locale, string> = {
  en: "EN",
  pt: "PT",
  es: "ES",
  fr: "FR",
  de: "DE",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
