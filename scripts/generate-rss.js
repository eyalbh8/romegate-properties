const fs = require("fs");
const path = require("path");

const baseUrl = "https://vero.it";

const blogPosts = [
  {
    slug: "top-5-neighborhoods-erasmus-students-rome",
    title: "Top 5 Neighborhoods for Erasmus Students in Rome",
    excerpt: "Discover the best neighborhoods in Rome for international students...",
    author: "Maria Rossi",
    date: "2025-01-15",
    category: "Student Life",
    image: "https://images.unsplash.com/photo-1529260830199-42c24126f198?w=800",
  },
  {
    slug: "understanding-rental-market-rome-2026",
    title: "Understanding Italy's Rental Market in 2026",
    excerpt: "A comprehensive guide to the current state of Italy's rental market...",
    author: "Giuseppe Bianchi",
    date: "2025-01-10",
    category: "Real Estate",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
  },
  {
    slug: "property-investment-trends-rome-2026",
    title: "Property Investment Trends in Italy for 2026",
    excerpt: "Explore the latest trends in Italy's property investment landscape...",
    author: "Francesca Romano",
    date: "2025-01-05",
    category: "Investment",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
  },
  {
    slug: "erasmus-success-stories-rome",
    title: "Erasmus Success Stories from Italy",
    excerpt: "Hear from students who found their perfect home with Vero...",
    author: "Sofia Conti",
    date: "2024-12-28",
    category: "Student Life",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
  },
  {
    slug: "navigating-property-laws-italy-foreigners",
    title: "Navigating Property Laws in Italy for Foreigners",
    excerpt: "Everything you need to know about Italian property law as a foreigner...",
    author: "Marco De Luca",
    date: "2024-12-20",
    category: "Legal",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
  },
  {
    slug: "best-time-buy-rent-rome",
    title: "Best Time to Buy or Rent in Italy",
    excerpt: "Timing is everything in real estate. Learn when to make your move...",
    author: "Elena Ferrari",
    date: "2024-12-15",
    category: "Real Estate",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
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

function generateRss() {
  const currentDate = new Date().toUTCString();

  let rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Vero Properties Blog</title>
    <link>${baseUrl}/en/blog</link>
    <description>Latest news, insights, and guides on Italian real estate, student accommodation, and property investment</description>
    <language>en</language>
    <lastBuildDate>${currentDate}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${baseUrl}/logo.png</url>
      <title>Vero Properties</title>
      <link>${baseUrl}/en/blog</link>
    </image>
`;

  blogPosts.forEach((post) => {
    const postDate = new Date(post.date).toUTCString();
    const postUrl = `${baseUrl}/en/blog/${post.slug}`;

    rss += `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <pubDate>${postDate}</pubDate>
      <dc:creator>${escapeXml(post.author)}</dc:creator>
      <category>${escapeXml(post.category)}</category>
      <description>${escapeXml(post.excerpt)}</description>
      <content:encoded><![CDATA[
        <img src="${post.image}" alt="${escapeXml(post.title)}" />
        <p>${post.excerpt}</p>
        <p><a href="${postUrl}">Read full article</a></p>
      ]]></content:encoded>
      <enclosure url="${post.image}" type="image/jpeg"/>
    </item>`;
  });

  rss += `
  </channel>
</rss>`;

  return rss;
}

// Generate and save RSS feed
const rss = generateRss();
const outputPath = path.join(__dirname, "..", "public", "rss.xml");
fs.writeFileSync(outputPath, rss, "utf8");

console.log(`✅ RSS feed generated successfully at ${outputPath}`);
console.log(`📄 Total posts: ${blogPosts.length}`);
