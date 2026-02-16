const fs = require("fs");
const path = require("path");

const baseUrl = "https://vero.it";

const propertyImages = [
  {
    pageUrl: `${baseUrl}/en/properties/1/modern-apartment-trastevere`,
    images: [
      {
        loc: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
        caption: "Modern Apartment in Trastevere - Main View",
        title: "Modern Apartment in Trastevere",
      },
    ],
  },
  {
    pageUrl: `${baseUrl}/en/properties/2/luxury-villa-near-colosseum`,
    images: [
      {
        loc: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
        caption: "Luxury Villa near Colosseum - Exterior",
        title: "Luxury Villa near Colosseum",
      },
    ],
  },
  {
    pageUrl: `${baseUrl}/en/properties/3/student-studio-near-sapienza`,
    images: [
      {
        loc: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800",
        caption: "Student Studio near Sapienza University",
        title: "Student Studio near Sapienza",
      },
    ],
  },
  {
    pageUrl: `${baseUrl}/en/properties/4/cozy-apartment-centro-storico`,
    images: [
      {
        loc: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
        caption: "Cozy Apartment in Centro Storico",
        title: "Cozy Apartment Centro Storico",
      },
    ],
  },
  {
    pageUrl: `${baseUrl}/en/properties/5/elegant-penthouse-with-terrace`,
    images: [
      {
        loc: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
        caption: "Elegant Penthouse with Terrace in Prati",
        title: "Elegant Penthouse with Terrace",
      },
    ],
  },
  {
    pageUrl: `${baseUrl}/en/properties/6/shared-student-room-testaccio`,
    images: [
      {
        loc: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
        caption: "Shared Student Room in Testaccio",
        title: "Shared Student Room Testaccio",
      },
    ],
  },
];

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
