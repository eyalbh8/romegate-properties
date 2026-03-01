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
  /** Land area in m²; optional (e.g. for villas). */
  landArea?: number;
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
    landArea: 30000,
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
  {
    id: 2,
    slug: "villa-pieve-vecchia",
    title: { en: "Villa Pieve Vecchia" },
    description: {
      en: [
        "A Once-in-a-Lifetime Property: A Tuscan Villa Built on Ancient Roman Ruins",
        "",
        "Nestled in the rolling hills of Tuscany lies a truly unparalleled estate - a property unlike any other in the world. This remarkable villa is built directly on the ruins of a 2,000-year-old Roman village, with documented historical significance. Scattered throughout the lush garden are remnants of ancient Roman architecture, offering a unique and awe-inspiring glimpse into the past.",
        "",
        "Just 50 meters behind the main house stands one of the estate's most extraordinary features: an original Roman water reservoir, constructed to collect rainwater for the ancient settlement - a rare and tangible piece of living history.",
        "",
        "## The Main Villa",
        "The main villa, measuring approximately 250 square meters, dates back to medieval times, when a local farmer built the home atop the Roman foundations - many of which remain visible today. The villa was masterfully restored by world-renowned Italian architect Cini Boeri, who preserved its rustic external character while transforming the interiors with a modern, minimalist touch. The result is a stunning blend of history and contemporary comfort.",
        "",
        "On the ground floor, once used as stables, you'll find an open-plan living and dining area, along with a guest bedroom with independent access, ideal for visitors or staff. The contrast between sleek modern finishes and the centuries-old stonework creates a timeless, elegant ambiance.",
        "",
        "Upstairs on the first floor, there are three additional bedrooms, each with modern features and air conditioning, thoughtfully integrated into the medieval layout.",
        "",
        "## The Garden and Pool",
        "The garden is a peaceful oasis filled with centuries-old olive trees and Roman ruins. At its heart lies the architectural masterpiece of the estate: the pool area, beautifully embedded into the natural terrain and offering breathtaking panoramic views - a cinematic setting straight out of a dream.",
        "",
        "## The Guesthouse",
        "Just 100 meters from the main villa, a modern guesthouse offers an additional bedroom, bathroom, and a full kitchen with dining and living space. Surrounded by glass walls, the guesthouse is bright, contemporary, and fully air-conditioned, with stunning views over the Tuscan countryside.",
        "",
        "## Why This Property",
        "This is not just a property - it's a statement, a legacy, and a living piece of history. For those seeking something truly extraordinary, this villa offers an experience that cannot be replicated. After all, who else can say they own a home in Tuscany with Roman ruins in the garden?",
      ].join("\n\n"),
    },
    location: "Campagnatico, Grosseto",
    neighborhood: "Campagnatico",
    price: 1990000,
    bedrooms: 5,
    bathrooms: 4,
    area: 310,
    landArea: 30000,
    type: "sale",
    image:
      "https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-pieve-vecchia/pieve-vecchia1.webp",
    images: Array.from(
      { length: 68 },
      (_, i) =>
        `https://vero-assets-public.s3.us-east-1.amazonaws.com/villa-pieve-vecchia/pieve-vecchia${i + 1}.webp`,
    ),
    amenities: [
      "swimming_pool",
      "bathtub",
      "shower",
      "garden",
      "parking",
      "air_conditioning",
      "heating",
      "terrace",
      "patio",
      "bbq_grill",
    ],
    available: true,
    parking: true,
    balcony: false,
    transportLinks: [
      "Campagnatico (medieval village), 500 m",
      "Highway Rome–Florence, 10 min",
      "Tuscan coast and beaches, 25 min",
      "Siena, 35 min",
      "Montalcino, 30 min",
      "Florence, 1h 10min",
      "Florence or Pisa airport, 1h 15min",
      "Terme di Saturnia, 45 min",
      "Maremma Sea (Marina di Alberese, Principina a Mare), 40–45 min",
      "Val d'Orcia, 1 hour",
      "Monte Amiata, 1 hour",
      "Grosseto, 15 min",
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
