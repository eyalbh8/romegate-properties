import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useLocation, useParams } from "react-router-dom";

const SEOHead: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const { lang } = useParams<{ lang?: string }>();
  const currentLang = lang || i18n.language || "en";

  // Base URL
  const baseUrl = "https://romegate.it";

  // Language-specific URLs
  const langUrls: Record<string, string> = {
    en: `${baseUrl}/en`,
    it: `${baseUrl}/it`,
    he: `${baseUrl}/he`,
  };

  // Current page URL
  const currentUrl = `${baseUrl}${location.pathname}${location.hash || ""}`;

  // Get language-specific meta data
  const title = t("seo.title");
  const description = t("seo.description");
  const keywords = t("seo.keywords");

  // OG locale mapping
  const ogLocaleMap: Record<string, string> = {
    en: "en_US",
    it: "it_IT",
    he: "he_IL",
  };

  const ogLocale = ogLocaleMap[currentLang] || "en_US";

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <html lang={currentLang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta
        name="language"
        content={
          currentLang === "en"
            ? "English"
            : currentLang === "it"
            ? "Italian"
            : "Hebrew"
        }
      />

      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />

      {/* Hreflang Tags */}
      <link rel="alternate" hrefLang="en" href={langUrls.en} />
      <link rel="alternate" hrefLang="it" href={langUrls.it} />
      <link rel="alternate" hrefLang="he" href={langUrls.he} />
      <link rel="alternate" hrefLang="x-default" href={langUrls.en} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${baseUrl}/og-image.jpg`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:site_name" content="Romegate Properties" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${baseUrl}/twitter-image.jpg`} />
    </Helmet>
  );
};

export default SEOHead;
