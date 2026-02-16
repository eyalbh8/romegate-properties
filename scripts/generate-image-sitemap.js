const fs = require("fs");
const path = require("path");

const baseUrl = "https://vero.it";

// Read properties from public/properties.json (single source of truth)
const propertiesJsonPath = path.join(__dirname, "..", "public", "properties.json");
let propertyImages = [];
try {
  const raw = fs.readFileSync(propertiesJsonPath, "utf8");
  const data = JSON.parse(raw);
  const list = Array.isArray(data.properties) ? data.properties : [];
  propertyImages = list.map((p) => ({
    pageUrl: `${baseUrl}/en/properties/${p.id}/${p.slug}`,
    images: [
      {
        loc: p.image,
        caption: (p.title && p.title.en) || p.slug.replace(/-/g, " "),
        title: (p.title && p.title.en) || p.slug.replace(/-/g, " "),
      },
    ],
  }));
} catch (err) {
  console.warn("⚠️ Could not read public/properties.json, property image sitemap will be empty:", err.message);
}

const blogImages = [
  {
    pageUrl: `${baseUrl}/en/blog/top-5-neighborhoods-erasmus-students-rome`,
    images: [
      {
        loc: "https://images.unsplash.com/photo-1529260830199-42c24126f198?w=800",
        caption: "Top 5 Neighborhoods for Erasmus Students in Rome",
        title: "Best Neighborhoods for Students in Rome",
      },
    ],
  },
  {
    pageUrl: `${baseUrl}/en/blog/understanding-rental-market-rome-2026`,
    images: [
      {
        loc: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
        caption: "Understanding Italy's Rental Market",
        title: "Italy Rental Market 2026",
      },
    ],
  },
];

function escapeXml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function generateImageSitemap() {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`;

  const allImages = [...propertyImages, ...blogImages];

  allImages.forEach((page) => {
    sitemap += `
  <url>
    <loc>${page.pageUrl}</loc>`;

    page.images.forEach((image) => {
      sitemap += `
    <image:image>
      <image:loc>${image.loc}</image:loc>
      <image:caption>${escapeXml(image.caption)}</image:caption>
      <image:title>${escapeXml(image.title)}</image:title>
    </image:image>`;
    });

    sitemap += `
  </url>`;
  });

  sitemap += `
</urlset>`;

  return sitemap;
}

// Generate and save image sitemap
const sitemap = generateImageSitemap();
const outputPath = path.join(__dirname, "..", "public", "sitemap-images.xml");
fs.writeFileSync(outputPath, sitemap, "utf8");

console.log(`✅ Image sitemap generated successfully at ${outputPath}`);
console.log(
  `📸 Total images: ${propertyImages.reduce((acc, p) => acc + p.images.length, 0) + blogImages.reduce((acc, p) => acc + p.images.length, 0)}`
);
