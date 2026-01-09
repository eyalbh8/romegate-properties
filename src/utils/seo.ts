/**
 * SEO utility functions
 */

/**
 * Updates the HTML lang attribute based on the current language
 */
export const updateHtmlLang = (lang: string): void => {
  if (typeof document !== "undefined") {
    document.documentElement.lang = lang;
  }
};

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
