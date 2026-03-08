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
  { slug: "property-market-trends-italy-2025-2026" },
  { slug: "where-to-buy-property-italy-tuscany-rome-amalfi" },
  { slug: "annual-costs-owning-property-italy" },
];

const servicesData = [
  { slug: "buying-properties" },
  { slug: "selling-properties" },
  { slug: "property-management" },
  { slug: "student-accommodation" },
];

const guidesData = [
  {
    slug: "how-to-buy-house-italy",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    title: "How to Buy a House in Italy",
  },
  {
    slug: "bureaucracy-documents-italy",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800",
    title: "Bureaucracy and Documents When Buying Property in Italy",
  },
  {
    slug: "taxes-costs-buying-italy",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
    title: "Taxes and Costs When Buying Property in Italy",
  },
  {
    slug: "mortgages-financing-foreigners",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
    title: "Mortgages and Financing for Foreign Buyers",
  },
  {
    slug: "legal-checks-before-buying",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
    title: "Legal and Technical Checks Before Buying",
  },
  {
    slug: "rent-vs-buy-italy",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    title: "Rent vs Buy in Italy: When to Choose What",
  },
  {
    slug: "best-areas-buy-italy",
    image: "https://images.unsplash.com/photo-1529260830199-42c24126f198?w=800",
    title: "Best Regions and Areas to Buy in Italy",
  },
  {
    slug: "risks-buying-property-italy",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
    title: "Risks and Pitfalls When Buying Property in Italy",
  },
  {
    slug: "residency-visa-property-italy",
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800",
    title: "Residency and Visas: Does Buying Property Help?",
  },
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

function escapeXml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function generateXmlHeader() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`;
}

function generateUrlEntry(loc, priority, changefreq, lastmod, alternates = true, imageInfo = null) {
  let entry = `
  <url>
    <loc>${loc}</loc>`;

  if (imageInfo && imageInfo.url) {
    entry += `
    <image:image>
      <image:loc>${imageInfo.url}</image:loc>`;
    if (imageInfo.title) {
      entry += `
      <image:title>${escapeXml(imageInfo.title)}</image:title>`;
    }
    entry += `
    </image:image>`;
  }

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

  // Guides listing pages
  languages.forEach((lang) => {
    sitemap += generateUrlEntry(
      `${baseUrl}/${lang}/guides`,
      "0.8",
      "weekly",
      currentDate
    );
  });

  // Individual guide pages
  guidesData.forEach((guide) => {
    languages.forEach((lang) => {
      sitemap += generateUrlEntry(
        `${baseUrl}/${lang}/guides/${guide.slug}`,
        "0.7",
        "weekly",
        currentDate,
        true,
        { url: guide.image, title: guide.title }
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
