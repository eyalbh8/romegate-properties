import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import english from "./english";
import englishExtended from "./english-extended";
import italian from "./italian";
import hebrew from "./hebrew";

function deepMerge(
  target: Record<string, unknown>,
  source: Record<string, unknown>
): Record<string, unknown> {
  const result = { ...target };
  for (const key of Object.keys(source)) {
    const sourceVal = source[key];
    if (sourceVal != null && typeof sourceVal === "object" && !Array.isArray(sourceVal)) {
      result[key] = deepMerge(
        (result[key] as Record<string, unknown>) || {},
        sourceVal as Record<string, unknown>
      );
    } else if (sourceVal !== undefined) {
      result[key] = sourceVal;
    }
  }
  return result;
}

const resources = {
  en: {
    translation: deepMerge(english as Record<string, unknown>, englishExtended as Record<string, unknown>) as typeof english,
  },
  it: {
    translation: italian,
  },
  he: {
    translation: hebrew,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "i18nextLng",
    },
  });

export default i18n;
