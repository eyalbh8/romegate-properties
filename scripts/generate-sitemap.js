const fs = require("fs");
const path = require("path");

const baseUrl = "https://vero.it";
const languages = ["en", "it", "he"];

// Read properties from public/properties.json (single source of truth)
const propertiesJsonPath = path.join(__dirname, "..", "public", "properties.json");
let propertiesData = [];
try {
  const raw = fs.readFileSync(propertiesJsonPath, "utf8");
  const data = JSON.parse(raw);
  propertiesData = Array.isArray(data.properties) ? data.properties.map((p) => ({ id: p.id, slug: p.slug })) : [];
} catch (err) {
  console.warn("⚠️ Could not read public/properties.json, property URLs will be omitted from sitemap:", err.message);
}

const blogPostsData = [
  { slug: "top-5-neighborhoods-erasmus-students-rome" },
  { slug: "understanding-rental-market-rome-2026" },
  { slug: "property-investment-trends-rome-2026" },
  { slug: "erasmus-success-stories-rome" },
  { slug: "navigating-property-laws-italy-foreigners" },
  { slug: "best-time-buy-rent-rome" },
];

const servicesData = [
  { slug: "buying-properties" },
  { slug: "selling-properties" },
  { slug: "property-management" },
  { slug: "student-accommodation" },
];

const neighborhoodsData = [
  { slug: "trastevere" },
  { slug: "san-lorenzo" },
  { slug: "centro-storico" },
  { slug: "testaccio" },
  { slug: "monti" },
  { slug: "prati" },
];

const currentDate = new Date().toISOString().split("T")[0];

function generateXmlHeader() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`;
}

function generateUrlEntry(loc, priority, changefreq, lastmod, alternates = true) {
  let entry = `
  <url>
    <loc>${loc}</loc>`;

  if (alternates) {
    languages.forEach((lang) => {
      const alternateLoc = loc.replace(/\/(en|it|he)\//, `/${lang}/`);
      entry += `
    <xhtml:link rel="alternate" hreflang="${lang}" href="${alternateLoc}" />`;
    });
    entry += `
    <xhtml:link rel="alternate" hreflang="x-default" href="${loc.replace(/\/(en|it|he)\//, `/en/`)}" />`;
  }

  entry += `
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;

  return entry;
}

function generateSitemap() {
  let sitemap = generateXmlHeader();

  // Homepage for each language
  languages.forEach((lang) => {
    sitemap += generateUrlEntry(
      `${baseUrl}/${lang}/`,
      "1.0",
      "weekly",
      currentDate
    );
  });

  // Properties listing pages
  languages.forEach((lang) => {
    sitemap += generateUrlEntry(
      `${baseUrl}/${lang}/properties`,
      "0.9",
      "daily",
      currentDate
    );
  });

  // Individual property pages
  propertiesData.forEach((property) => {
    languages.forEach((lang) => {
      sitemap += generateUrlEntry(
        `${baseUrl}/${lang}/properties/${property.id}/${property.slug}`,
        "0.8",
        "weekly",
        currentDate
      );
    });
  });

  // Services pages
  languages.forEach((lang) => {
    sitemap += generateUrlEntry(
      `${baseUrl}/${lang}/services`,
      "0.8",
      "monthly",
      currentDate
    );
  });

  // Individual service pages
  servicesData.forEach((service) => {
    languages.forEach((lang) => {
      sitemap += generateUrlEntry(
        `${baseUrl}/${lang}/services/${service.slug}`,
        "0.7",
        "monthly",
        currentDate
      );
    });
  });

  // Blog listing pages
  languages.forEach((lang) => {
    sitemap += generateUrlEntry(
      `${baseUrl}/${lang}/blog`,
      "0.8",
      "daily",
      currentDate
    );
  });

  // Individual blog post pages
  blogPostsData.forEach((post) => {
    languages.forEach((lang) => {
      sitemap += generateUrlEntry(
        `${baseUrl}/${lang}/blog/${post.slug}`,
        "0.7",
        "weekly",
        currentDate
      );
    });
  });

  // Neighborhood pages
  neighborhoodsData.forEach((neighborhood) => {
    languages.forEach((lang) => {
      sitemap += generateUrlEntry(
        `${baseUrl}/${lang}/neighborhoods/${neighborhood.slug}`,
        "0.7",
        "weekly",
        currentDate
      );
    });
  });

  // About and Contact pages
  languages.forEach((lang) => {
    sitemap += generateUrlEntry(
      `${baseUrl}/${lang}/about`,
      "0.6",
      "monthly",
      currentDate
    );
    sitemap += generateUrlEntry(
      `${baseUrl}/${lang}/contact`,
      "0.6",
      "monthly",
      currentDate
    );
  });

  sitemap += "\n</urlset>";

  return sitemap;
}

// Generate and save sitemap
const sitemap = generateSitemap();
const outputPath = path.join(__dirname, "..", "public", "sitemap.xml");
fs.writeFileSync(outputPath, sitemap, "utf8");

console.log(`✅ Sitemap generated successfully at ${outputPath}`);
console.log(`📄 Total URLs: ${(sitemap.match(/<url>/g) || []).length}`);
