export interface BreadcrumbItem {
  name: string;
  url: string;
}

export const generateBreadcrumbSchema = (
  items: BreadcrumbItem[]
): object => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};

export interface PropertySchema {
  name: string;
  description: string;
  image: string | string[];
  price: number;
  priceCurrency: string;
  availability: "InStock" | "OutOfStock";
  url: string;
  address?: {
    locality: string;
    region: string;
    country: string;
  };
  geo?: {
    lat: number;
    lng: number;
  };
}

export const generatePropertySchema = (property: PropertySchema): object => {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: property.name,
    description: property.description,
    image: property.image,
    offers: {
      "@type": "Offer",
      price: property.price,
      priceCurrency: property.priceCurrency,
      availability: `https://schema.org/${property.availability}`,
      url: property.url,
    },
  };

  if (property.address) {
    schema.address = {
      "@type": "PostalAddress",
      addressLocality: property.address.locality,
      addressRegion: property.address.region,
      addressCountry: property.address.country,
    };
  }

  if (property.geo) {
    schema.geo = {
      "@type": "GeoCoordinates",
      latitude: property.geo.lat,
      longitude: property.geo.lng,
    };
  }

  return schema;
};

export interface BlogPostSchema {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: {
    name: string;
    bio?: string;
  };
  url: string;
}

export const generateBlogPostSchema = (post: BlogPostSchema): object => {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.headline,
    description: post.description,
    image: post.image,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: {
      "@type": "Person",
      name: post.author.name,
      ...(post.author.bio && { description: post.author.bio }),
    },
    publisher: {
      "@type": "Organization",
      name: "Vero Properties",
      logo: {
        "@type": "ImageObject",
        url: "https://vero.it/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": post.url,
    },
  };
};

export interface ServiceSchema {
  name: string;
  description: string;
  provider: string;
  areaServed: string;
  url: string;
}

export const generateServiceSchema = (service: ServiceSchema): object => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    provider: {
      "@type": "RealEstateAgent",
      name: service.provider,
    },
    description: service.description,
    areaServed: {
      "@type": "City",
      name: service.areaServed,
    },
    url: service.url,
  };
};

export interface Review {
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
}

export const generateReviewSchema = (review: Review): object => {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    author: {
      "@type": "Person",
      name: review.author,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: "5",
      worstRating: "1",
    },
    reviewBody: review.reviewBody,
    datePublished: review.datePublished,
  };
};

export interface AggregateRating {
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
  worstRating?: number;
}

export const generateAggregateRatingSchema = (
  rating: AggregateRating
): object => {
  return {
    "@type": "AggregateRating",
    ratingValue: rating.ratingValue,
    reviewCount: rating.reviewCount,
    bestRating: rating.bestRating || 5,
    worstRating: rating.worstRating || 1,
  };
};

export interface FAQItem {
  question: string;
  answer: string;
}

export const generateFAQSchema = (faqs: FAQItem[]): object => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
};

export interface LocalBusinessSchema {
  name: string;
  description?: string;
  telephone: string;
  email: string;
  address: {
    streetAddress: string;
    locality: string;
    region: string;
    postalCode: string;
    country: string;
  };
  geo: {
    lat: number;
    lng: number;
  };
  url: string;
  image?: string;
  openingHours?: {
    dayOfWeek: string[];
    opens: string;
    closes: string;
  };
}

export const generateLocalBusinessSchema = (
  business: LocalBusinessSchema
): object => {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    url: business.url,
    telephone: business.telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.streetAddress,
      addressLocality: business.address.locality,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.lat,
      longitude: business.geo.lng,
    },
  };

  if (business.description) {
    schema.description = business.description;
  }

  if (business.image) {
    schema.image = business.image;
  }

  if (business.email) {
    schema.email = business.email;
  }

  if (business.openingHours) {
    schema.openingHoursSpecification = {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: business.openingHours.dayOfWeek,
      opens: business.openingHours.opens,
      closes: business.openingHours.closes,
    };
  }

  return schema;
};
