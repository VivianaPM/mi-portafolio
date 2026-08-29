import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { load } from "js-yaml";

import enTranslationsRaw from "../../i18n/locales/en/common.yml?raw";
import esTranslationsRaw from "../../i18n/locales/es/common.yml?raw";

const enTranslations = load(enTranslationsRaw) ?? {};
const esTranslations = load(esTranslationsRaw) ?? {};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enTranslations,
      },
      es: {
        common: esTranslations,
      },
    },
    supportedLngs: ["en", "es"],
    fallbackLng: "en",
    defaultNS: "common",
    ns: ["common"],
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    debug: false,
  });

export default i18n;
