export interface BlogPost {
  id: number;
  slug: string;
  titleKey: string;
  excerptKey: string;
  author: string;
  authorBio?: string;
  date: string;
  category: "Student Life" | "Real Estate" | "Investment" | "Legal";
  image: string;
  readTime: string;
  contentKey: string;
  tags: string[];
  relatedPosts?: number[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "top-5-neighborhoods-erasmus-students-rome",
    titleKey: "blog.posts.top5Neighborhoods.title",
    excerptKey: "blog.posts.top5Neighborhoods.excerpt",
    author: "Maria Rossi",
    authorBio:
      "Maria is a real estate expert specializing in student accommodation in Rome. She has helped hundreds of Erasmus students find their perfect home.",
    date: "2025-01-15",
    category: "Student Life",
    image: "https://images.unsplash.com/photo-1529260830199-42c24126f198?w=800",
    readTime: "5",
    contentKey: "blog.posts.top5Neighborhoods.content",
    tags: [
      "Erasmus",
      "Student Housing",
      "Neighborhoods",
      "Trastevere",
      "San Lorenzo",
    ],
    relatedPosts: [4, 3],
  },
  {
    id: 2,
    slug: "understanding-rental-market-rome-2026",
    titleKey: "blog.posts.understandingRentalMarket.title",
    excerptKey: "blog.posts.understandingRentalMarket.excerpt",
    author: "Giuseppe Bianchi",
    authorBio:
      "Giuseppe has over 15 years of experience in the Roman real estate market. He provides insights on market trends and investment opportunities.",
    date: "2025-01-10",
    category: "Real Estate",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    readTime: "8",
    contentKey: "blog.posts.understandingRentalMarket.content",
    tags: ["Rental Market", "Rome", "Market Analysis", "Trends"],
    relatedPosts: [3, 6],
  },
  {
    id: 3,
    slug: "property-investment-trends-rome-2026",
    titleKey: "blog.posts.propertyInvestmentTrends.title",
    excerptKey: "blog.posts.propertyInvestmentTrends.excerpt",
    author: "Francesca Romano",
    authorBio:
      "Francesca is an investment advisor specializing in real estate. She helps clients make informed decisions about property investments in Rome.",
    date: "2025-01-05",
    category: "Investment",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    readTime: "6",
    contentKey: "blog.posts.propertyInvestmentTrends.content",
    tags: ["Investment", "Property", "Market Trends", "ROI"],
    relatedPosts: [2, 6],
  },
  {
    id: 4,
    slug: "erasmus-success-stories-rome",
    titleKey: "blog.posts.erasmusSuccessStories.title",
    excerptKey: "blog.posts.erasmusSuccessStories.excerpt",
    author: "Sofia Conti",
    authorBio:
      "Sofia coordinates our Erasmus student program. She works directly with international students to ensure they have the best experience in Rome.",
    date: "2024-12-28",
    category: "Student Life",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    readTime: "4",
    contentKey: "blog.posts.erasmusSuccessStories.content",
    tags: ["Erasmus", "Student Stories", "Testimonials", "Student Life"],
    relatedPosts: [1],
  },
  {
    id: 5,
    slug: "navigating-property-laws-italy-foreigners",
    titleKey: "blog.posts.navigatingPropertyLaws.title",
    excerptKey: "blog.posts.navigatingPropertyLaws.excerpt",
    author: "Marco De Luca",
    authorBio:
      "Marco is a real estate attorney with expertise in Italian property law. He helps international clients understand the legal aspects of buying and renting in Italy.",
    date: "2024-12-20",
    category: "Legal",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
    readTime: "10",
    contentKey: "blog.posts.navigatingPropertyLaws.content",
    tags: ["Legal", "Property Law", "Foreigners", "Italy", "Regulations"],
    relatedPosts: [2],
  },
  {
    id: 6,
    slug: "best-time-buy-rent-rome",
    titleKey: "blog.posts.bestTimeToBuyOrRent.title",
    excerptKey: "blog.posts.bestTimeToBuyOrRent.excerpt",
    author: "Elena Ferrari",
    authorBio:
      "Elena is a market analyst who tracks real estate trends in Rome. She provides timing advice for buyers and renters.",
    date: "2024-12-15",
    category: "Real Estate",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
    readTime: "7",
    contentKey: "blog.posts.bestTimeToBuyOrRent.content",
    tags: ["Timing", "Market", "Buying", "Renting", "Strategy"],
    relatedPosts: [2, 3],
  },
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((p) => p.slug === slug);
};

export const getBlogPostById = (id: number): BlogPost | undefined => {
  return blogPosts.find((p) => p.id === id);
};

export const getBlogPostsByCategory = (
  category: string
): BlogPost[] => {
  return blogPosts.filter((p) => p.category === category);
};

export const getRelatedBlogPosts = (postId: number): BlogPost[] => {
  const post = getBlogPostById(postId);
  if (!post || !post.relatedPosts) return [];
  return post.relatedPosts
    .map((id) => getBlogPostById(id))
    .filter((p): p is BlogPost => p !== undefined);
};
