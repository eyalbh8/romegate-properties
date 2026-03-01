/**
 * SEO utility functions
 */

/** RTL language codes */
const RTL_LANGS = ["he", "ar"];

/**
 * Updates the HTML lang and dir attributes based on the current language
 */
export const updateHtmlLang = (lang: string): void => {
  if (typeof document !== "undefined") {
    document.documentElement.lang = lang;
    document.documentElement.dir = RTL_LANGS.includes(lang) ? "rtl" : "ltr";
  }
};

/**
 * Returns the text direction for a language
 */
export const getDirForLang = (lang: string): "rtl" | "ltr" =>
  RTL_LANGS.includes(lang) ? "rtl" : "ltr";

/**
 * Gets the language code from the URL path
 */
export const getLangFromPath = (pathname: string): string => {
  const langMatch = pathname.match(/^\/(en|it|he)(\/|$)/);
  return langMatch ? langMatch[1] : "en";
};

/**
 * Removes language prefix from pathname
 */
export const removeLangFromPath = (pathname: string): string => {
  return pathname.replace(/^\/(en|it|he)(\/|$)/, "/");
};
