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

  // Language-specific structured data
  const languageNames: Record<string, string> = {
    en: "English",
    it: "Italian",
    he: "Hebrew",
  };

  const realEstateAgentSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Romegate Properties",
    alternateName: "Romegate",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description: description,
    inLanguage: currentLang,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+39-06-1234-5678",
      contactType: "customer service",
      email: "info@romegate.it",
      availableLanguage: [
        "English",
        "Italian",
        "Hebrew",
        "Spanish",
        "French",
        "German",
      ],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via del Corso 123",
      addressLocality: "Rome",
      addressRegion: "Lazio",
      postalCode: "00186",
      addressCountry: "IT",
    },
    areaServed: {
      "@type": "City",
      name: "Rome",
      "@id": "https://www.wikidata.org/wiki/Q220",
    },
    serviceType: [
      "Property Sales",
      "Property Rentals",
      "Property Management",
      "Student Accommodation",
      "Real Estate Consulting",
    ],
    priceRange: "$$",
    sameAs: [
      "https://www.facebook.com/romegate",
      "https://www.instagram.com/romegate",
      "https://www.linkedin.com/company/romegate",
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Romegate Properties",
    alternateName: "Romegate",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description: description,
    inLanguage: currentLang,
    sameAs: [
      "https://www.facebook.com/romegate",
      "https://www.instagram.com/romegate",
      "https://www.linkedin.com/company/romegate",
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Romegate Properties",
    image: `${baseUrl}/logo.png`,
    "@id": baseUrl,
    url: baseUrl,
    telephone: "+39-06-1234-5678",
    priceRange: "$$",
    description: description,
    inLanguage: currentLang,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via del Corso 123",
      addressLocality: "Rome",
      addressRegion: "Lazio",
      postalCode: "00186",
      addressCountry: "IT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.9028,
      longitude: 12.4964,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: [
      "https://www.facebook.com/romegate",
      "https://www.instagram.com/romegate",
      "https://www.linkedin.com/company/romegate",
    ],
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <html lang={currentLang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="language" content={languageNames[currentLang] || "English"} />

      {/* AI-Specific Meta Tags */}
      <meta name="content-type" content="real-estate-agency" />
      <meta
        name="content-category"
        content="property-listings,student-housing,real-estate-services"
      />
      <meta name="ai-content-type" content="structured" />
      <meta name="ai-language" content={currentLang} />
      <meta
        name="ai-summary"
        content={`Romegate Properties is a premier real estate agency in Rome, Italy, specializing in buying, selling, and managing properties with a focus on student accommodation for Erasmus and international students. Services include property sales, rentals, management, and specialized student housing in neighborhoods like Trastevere, San Lorenzo, Testaccio, and Centro Storico. Available in ${
          languageNames[currentLang] || "English"
        }.`}
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
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}/twitter-image.jpg`} />

      {/* Language-Specific Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(realEstateAgentSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </Helmet>
  );
};

export default SEOHead;
