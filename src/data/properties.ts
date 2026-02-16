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
    slug: "modern-apartment-trastevere",
    titleKey: "properties.propertyTitles.modernApartmentTrastevere",
    location: "Trastevere, Rome",
    neighborhood: "Trastevere",
    price: 1200,
    bedrooms: 2,
    bathrooms: 1,
    area: 75,
    type: "rent",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    ],
    descriptionKey: "properties.descriptions.modernApartmentTrastevere",
    amenities: ["wifi", "heating", "washing_machine", "dishwasher", "balcony"],
    available: true,
    availableFrom: "2026-03-01",
    energyRating: "C",
    floor: 3,
    furnished: true,
    balcony: true,
    nearbyUniversities: ["John Cabot University", "American University of Rome"],
    transportLinks: ["Tram 8", "Bus H"],
    minimumStay: "6 months",
    deposit: 2400,
    coordinates: {
      lat: 41.8897,
      lng: 12.4686,
    },
  },
  {
    id: 2,
    slug: "luxury-villa-near-colosseum",
    titleKey: "properties.propertyTitles.luxuryVillaNearColosseum",
    location: "Monti, Rome",
    neighborhood: "Monti",
    price: 450000,
    bedrooms: 4,
    bathrooms: 3,
    area: 200,
    type: "sale",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    ],
    descriptionKey: "properties.descriptions.luxuryVillaNearColosseum",
    amenities: [
      "wifi",
      "heating",
      "air_conditioning",
      "washing_machine",
      "dishwasher",
      "terrace",
      "parking",
    ],
    available: true,
    energyRating: "B",
    floor: 2,
    furnished: false,
    parking: true,
    balcony: false,
    transportLinks: ["Metro B - Colosseo", "Bus 75", "Bus 87"],
    coordinates: {
      lat: 41.8947,
      lng: 12.4916,
    },
  },
  {
    id: 3,
    slug: "student-studio-near-sapienza",
    titleKey: "properties.propertyTitles.studentStudioNearSapienza",
    location: "San Lorenzo, Rome",
    neighborhood: "San Lorenzo",
    price: 650,
    bedrooms: 1,
    bathrooms: 1,
    area: 35,
    type: "rent",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800",
    images: ["https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800"],
    descriptionKey: "properties.descriptions.studentStudioNearSapienza",
    amenities: ["wifi", "heating", "washing_machine", "desk"],
    available: true,
    availableFrom: "2026-09-01",
    energyRating: "D",
    floor: 1,
    furnished: true,
    balcony: false,
    nearbyUniversities: ["Sapienza University of Rome"],
    transportLinks: ["Tram 3", "Tram 19", "Bus 492"],
    minimumStay: "5 months",
    deposit: 1300,
    coordinates: {
      lat: 41.9008,
      lng: 12.5155,
    },
  },
  {
    id: 4,
    slug: "cozy-apartment-centro-storico",
    titleKey: "properties.propertyTitles.cozyApartmentCentroStorico",
    location: "Centro Storico, Rome",
    neighborhood: "Centro Storico",
    price: 1800,
    bedrooms: 3,
    bathrooms: 2,
    area: 100,
    type: "rent",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
    images: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800"],
    descriptionKey: "properties.descriptions.cozyApartmentCentroStorico",
    amenities: [
      "wifi",
      "heating",
      "air_conditioning",
      "washing_machine",
      "dishwasher",
    ],
    available: true,
    energyRating: "C",
    floor: 2,
    furnished: true,
    balcony: false,
    transportLinks: ["Bus 64", "Bus 40", "Bus 46"],
    minimumStay: "12 months",
    deposit: 3600,
    coordinates: {
      lat: 41.9028,
      lng: 12.4830,
    },
  },
  {
    id: 5,
    slug: "elegant-penthouse-with-terrace",
    titleKey: "properties.propertyTitles.elegantPenthouseWithTerrace",
    location: "Prati, Rome",
    neighborhood: "Prati",
    price: 680000,
    bedrooms: 3,
    bathrooms: 2,
    area: 150,
    type: "sale",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    images: ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"],
    descriptionKey: "properties.descriptions.elegantPenthouseWithTerrace",
    amenities: [
      "wifi",
      "heating",
      "air_conditioning",
      "washing_machine",
      "dishwasher",
      "terrace",
      "elevator",
    ],
    available: true,
    energyRating: "A",
    floor: 5,
    furnished: false,
    balcony: false,
    parking: false,
    transportLinks: ["Metro A - Ottaviano", "Bus 32", "Bus 81"],
    coordinates: {
      lat: 41.9073,
      lng: 12.4575,
    },
  },
  {
    id: 6,
    slug: "shared-student-room-testaccio",
    titleKey: "properties.propertyTitles.sharedStudentRoom",
    location: "Testaccio, Rome",
    neighborhood: "Testaccio",
    price: 450,
    bedrooms: 1,
    bathrooms: 1,
    area: 20,
    type: "rent",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
    images: ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800"],
    descriptionKey: "properties.descriptions.sharedStudentRoom",
    amenities: ["wifi", "heating", "washing_machine", "shared_kitchen"],
    available: true,
    availableFrom: "2026-03-15",
    energyRating: "C",
    floor: 2,
    furnished: true,
    balcony: false,
    nearbyUniversities: ["Roma Tre University"],
    transportLinks: ["Metro B - Piramide", "Bus 23", "Tram 3"],
    minimumStay: "4 months",
    deposit: 900,
    coordinates: {
      lat: 41.8776,
      lng: 12.4774,
    },
  },
];

export function getPropertyBySlug(
  list: Property[],
  slug: string
): Property | undefined {
  return list.find((p) => p.slug === slug);
}

export function getPropertyById(
  list: Property[],
  id: number
): Property | undefined {
  return list.find((p) => p.id === id);
}

export function getPropertiesByNeighborhood(
  list: Property[],
  neighborhood: string
): Property[] {
  return list.filter(
    (p) => p.neighborhood.toLowerCase() === neighborhood.toLowerCase()
  );
}

export function getPropertiesByType(
  list: Property[],
  type: "rent" | "sale"
): Property[] {
  return list.filter((p) => p.type === type);
}

/** JSON payload from /properties.json */
export interface PropertiesPayload {
  updated?: string;
  properties: Property[];
}
