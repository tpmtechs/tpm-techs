export const i18n = {
  locales: ["en-us", "vi", "ja",],
  defaultLocale: "en-us",
};

export type I18nConfig = typeof i18n;
export type Locale = I18nConfig["locales"][number];