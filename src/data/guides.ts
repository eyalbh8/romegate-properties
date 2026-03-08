export type GuideCategory =
  | "buying"
  | "bureaucracy"
  | "taxCosts"
  | "financing"
  | "legal"
  | "market";

export interface Guide {
  id: number;
  slug: string;
  titleKey: string;
  excerptKey: string;
  contentKey: string;
  categoryKey: string;
  order: number;
  image?: string;
  readTime: string;
}

export const guides: Guide[] = [
  {
    id: 1,
    slug: "how-to-buy-house-italy",
    titleKey: "guides.list.howToBuyHouseItaly.title",
    excerptKey: "guides.list.howToBuyHouseItaly.excerpt",
    contentKey: "guides.list.howToBuyHouseItaly.content",
    categoryKey: "guides.categories.buying",
    order: 1,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    readTime: "12",
  },
  {
    id: 2,
    slug: "bureaucracy-documents-italy",
    titleKey: "guides.list.bureaucracyDocumentsItaly.title",
    excerptKey: "guides.list.bureaucracyDocumentsItaly.excerpt",
    contentKey: "guides.list.bureaucracyDocumentsItaly.content",
    categoryKey: "guides.categories.bureaucracy",
    order: 2,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800",
    readTime: "10",
  },
  {
    id: 3,
    slug: "taxes-costs-buying-italy",
    titleKey: "guides.list.taxesCostsBuyingItaly.title",
    excerptKey: "guides.list.taxesCostsBuyingItaly.excerpt",
    contentKey: "guides.list.taxesCostsBuyingItaly.content",
    categoryKey: "guides.categories.taxCosts",
    order: 3,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
    readTime: "9",
  },
  {
    id: 4,
    slug: "mortgages-financing-foreigners",
    titleKey: "guides.list.mortgagesFinancingForeigners.title",
    excerptKey: "guides.list.mortgagesFinancingForeigners.excerpt",
    contentKey: "guides.list.mortgagesFinancingForeigners.content",
    categoryKey: "guides.categories.financing",
    order: 4,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
    readTime: "11",
  },
  {
    id: 5,
    slug: "legal-checks-before-buying",
    titleKey: "guides.list.legalChecksBeforeBuying.title",
    excerptKey: "guides.list.legalChecksBeforeBuying.excerpt",
    contentKey: "guides.list.legalChecksBeforeBuying.content",
    categoryKey: "guides.categories.legal",
    order: 5,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
    readTime: "8",
  },
  {
    id: 6,
    slug: "rent-vs-buy-italy",
    titleKey: "guides.list.rentVsBuyItaly.title",
    excerptKey: "guides.list.rentVsBuyItaly.excerpt",
    contentKey: "guides.list.rentVsBuyItaly.content",
    categoryKey: "guides.categories.market",
    order: 6,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    readTime: "7",
  },
  {
    id: 7,
    slug: "best-areas-buy-italy",
    titleKey: "guides.list.bestAreasBuyItaly.title",
    excerptKey: "guides.list.bestAreasBuyItaly.excerpt",
    contentKey: "guides.list.bestAreasBuyItaly.content",
    categoryKey: "guides.categories.market",
    order: 7,
    image: "https://images.unsplash.com/photo-1529260830199-42c24126f198?w=800",
    readTime: "10",
  },
  {
    id: 8,
    slug: "risks-buying-property-italy",
    titleKey: "guides.list.risksBuyingPropertyItaly.title",
    excerptKey: "guides.list.risksBuyingPropertyItaly.excerpt",
    contentKey: "guides.list.risksBuyingPropertyItaly.content",
    categoryKey: "guides.categories.legal",
    order: 8,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
    readTime: "9",
  },
  {
    id: 9,
    slug: "residency-visa-property-italy",
    titleKey: "guides.list.residencyVisaPropertyItaly.title",
    excerptKey: "guides.list.residencyVisaPropertyItaly.excerpt",
    contentKey: "guides.list.residencyVisaPropertyItaly.content",
    categoryKey: "guides.categories.legal",
    order: 9,
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800",
    readTime: "8",
  },
];

export const getGuideBySlug = (slug: string): Guide | undefined => {
  return guides.find((g) => g.slug === slug);
};

export const getGuideById = (id: number): Guide | undefined => {
  return guides.find((g) => g.id === id);
};

export const getGuidesByCategory = (categoryKey: string): Guide[] => {
  return guides.filter((g) => g.categoryKey === categoryKey);
};

export const getRelatedGuides = (guideId: number, limit = 3): Guide[] => {
  const guide = getGuideById(guideId);
  if (!guide) return [];
  return guides
    .filter((g) => g.id !== guideId && g.categoryKey === guide.categoryKey)
    .slice(0, limit);
};
