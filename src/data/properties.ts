/** Localized text: lang code -> text (e.g. { en: "...", it: "...", he: "..." }) */
export type LocalizedText = Record<string, string>;

export interface Property {
  id: number;
  slug: string;
  /** i18n key for title; used when title (localized) is not set */
  titleKey?: string;
  /** Localized title from JSON; takes precedence over titleKey when present */
  title?: LocalizedText;
  location: string;
  neighborhood: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  type: "rent" | "sale";
  image: string;
  images?: string[];
  /** i18n key for description; used when description (localized) is not set */
  descriptionKey?: string;
  /** Localized description from JSON; takes precedence over descriptionKey when present */
  description?: LocalizedText;
  amenities: string[];
  available: boolean;
  availableFrom?: string;
  energyRating?: string;
  floor?: number;
  furnished?: boolean;
  parking?: boolean;
  balcony?: boolean;
  nearbyUniversities?: string[];
  transportLinks?: string[];
  minimumStay?: string;
  deposit?: number;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

/** Fallback when properties.json fetch fails; allows site to still work */
export const FALLBACK_PROPERTIES: Property[] = [
  {
    id: 1,
    slug: "villa-la-fornaca",
    title: { en: "Villa La Fornaca" },
    description: {
      en: [
        "Nestled in the rolling hills of the Tuscan countryside, just 5 minutes from the charming medieval village of Campagnatico, this exquisite 5-bedroom, 4-bathroom villa offers the perfect blend of rustic heritage and modern luxury. Once a traditional fornace where the region's iconic terracotta tiles were crafted, the property has been thoughtfully restored to the highest standards, seamlessly combining historical charm with contemporary comfort.",
        "",
        "## Living Spaces",
        "With a generous 300 sqm of living space, the villa is designed for both relaxation and entertainment. The ground floor features spacious open-plan living and dining areas, ideal for gathering with family and friends, while four bright and airy bedrooms occupy the upper level.",
        "",
        "## The Estate",
        "Set on 3 hectares of private land, the estate includes: a beautiful swimming pool with panoramic views; a serene private lake; over 100 mature olive trees, producing your own Tuscan olive oil; expansive gardens and shaded terraces for outdoor living.",
        "",
        "## Private Spa",
        "A standout feature of this property is the exclusive, fully-equipped private spa, complete with: a large Jacuzzi, sauna, hammam, changing room and shower.",
        "",
        "## Why This Property",
        "Whether you're seeking a luxurious holiday home, a permanent residence in the heart of Tuscany, or a prime investment opportunity, this property offers a rare chance to own a piece of authentic Tuscan history with all the amenities of modern living.",
      ].join("\n\n"),
    },
    location: "Campagnatico, Grosseto",
    neighborhood: "Campagnatico",
    price: 1690000,
    bedrooms: 5,
    bathrooms: 4,
    area: 300,
    type: "sale",
    image:
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca1.webp",
    images: [
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca1.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca2.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca3.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca4.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca5.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca6.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca7.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca8.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca9.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca10.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca11.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca12.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca13.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca14.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca15.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca16.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca17.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca18.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca19.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca20.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca21.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca22.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca23.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca24.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca25.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca26.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca27.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca28.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca29.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca30.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca31.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca32.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca33.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca34.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca35.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca36.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca37.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca38.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca39.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca40.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca41.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca42.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca43.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca44.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca45.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca46.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca47.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca48.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca49.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca50.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca51.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca52.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca53.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca54.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca55.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca56.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca57.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca58.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca59.webp",
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-la-fornaca/La-Fornaca60.webp",
    ],
    amenities: [
      "swimming_pool",
      "garden",
      "parking",
      "air_conditioning",
      "heating",
      "patio",
      "bbq_grill",
    ],
    available: true,
    parking: true,
    balcony: false,
    transportLinks: [
      "Highway A12 (Rome–Florence), 5 min",
      "Beach, 25 min",
      "Siena, 40 min",
      "Montalcino, 40 min",
      "Florence Airport, 1h 30min",
    ],
    coordinates: {
      lat: 42.8833,
      lng: 11.2667,
    },
  },
];

export function getPropertyBySlug(
  list: Property[],
  slug: string,
): Property | undefined {
  return list.find((p) => p.slug === slug);
}

export function getPropertyById(
  list: Property[],
  id: number,
): Property | undefined {
  return list.find((p) => p.id === id);
}

export function getPropertiesByNeighborhood(
  list: Property[],
  neighborhood: string,
): Property[] {
  return list.filter(
    (p) => p.neighborhood.toLowerCase() === neighborhood.toLowerCase(),
  );
}

export function getPropertiesByType(
  list: Property[],
  type: "rent" | "sale",
): Property[] {
  return list.filter((p) => p.type === type);
}

/** JSON payload from /properties.json */
export interface PropertiesPayload {
  updated?: string;
  properties: Property[];
}
