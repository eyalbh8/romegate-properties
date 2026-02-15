export interface Neighborhood {
  id: number;
  slug: string;
  nameKey: string;
  descriptionKey: string;
  fullDescriptionKey: string;
  image: string;
  images: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  highlights: string[];
  universities: string[];
  transportLinks: string[];
  averageRent: {
    studio: number;
    oneBedroom: number;
    twoBedroom: number;
  };
  studentFriendly: boolean;
  nightlife: "low" | "moderate" | "high";
  safety: "good" | "very good" | "excellent";
  attractions: string[];
  bestFor: string[];
  nearbyNeighborhoods: string[];
}

export const neighborhoods: Neighborhood[] = [
  {
    id: 1,
    slug: "trastevere",
    nameKey: "neighborhoods.trastevere.name",
    descriptionKey: "neighborhoods.trastevere.description",
    fullDescriptionKey: "neighborhoods.trastevere.fullDescription",
    image: "https://images.unsplash.com/photo-1529260830199-42c24126f198?w=800",
    images: [
      "https://images.unsplash.com/photo-1529260830199-42c24126f198?w=800",
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800",
    ],
    coordinates: {
      lat: 41.8897,
      lng: 12.4686,
    },
    highlights: [
      "Charming medieval streets",
      "Vibrant nightlife",
      "Traditional trattorias",
      "Bohemian atmosphere",
      "Street art and culture",
    ],
    universities: ["John Cabot University", "American University of Rome"],
    transportLinks: ["Tram 8", "Bus H", "Bus 780"],
    averageRent: {
      studio: 700,
      oneBedroom: 900,
      twoBedroom: 1300,
    },
    studentFriendly: true,
    nightlife: "high",
    safety: "very good",
    attractions: [
      "Santa Maria in Trastevere",
      "Villa Farnesina",
      "Gianicolo Hill",
      "Piazza Trilussa",
    ],
    bestFor: ["Students", "Young Professionals", "Nightlife Lovers", "Culture"],
    nearbyNeighborhoods: ["Centro Storico", "Testaccio"],
  },
  {
    id: 2,
    slug: "san-lorenzo",
    nameKey: "neighborhoods.sanLorenzo.name",
    descriptionKey: "neighborhoods.sanLorenzo.description",
    fullDescriptionKey: "neighborhoods.sanLorenzo.fullDescription",
    image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800",
    images: [
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800",
    ],
    coordinates: {
      lat: 41.9008,
      lng: 12.5155,
    },
    highlights: [
      "University district",
      "Affordable living",
      "Street art scene",
      "Student bars and cafes",
      "Multicultural atmosphere",
    ],
    universities: ["Sapienza University of Rome"],
    transportLinks: ["Tram 3", "Tram 19", "Bus 492", "Metro B - Termini"],
    averageRent: {
      studio: 550,
      oneBedroom: 750,
      twoBedroom: 1000,
    },
    studentFriendly: true,
    nightlife: "high",
    safety: "good",
    attractions: [
      "Verano Cemetery",
      "Pigneto district",
      "Street art murals",
      "Local markets",
    ],
    bestFor: ["Students", "Budget Travelers", "Young People", "Artists"],
    nearbyNeighborhoods: ["Centro Storico", "Pigneto"],
  },
  {
    id: 3,
    slug: "centro-storico",
    nameKey: "neighborhoods.centroStorico.name",
    descriptionKey: "neighborhoods.centroStorico.description",
    fullDescriptionKey: "neighborhoods.centroStorico.fullDescription",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800",
    images: [
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800",
    ],
    coordinates: {
      lat: 41.9028,
      lng: 12.4830,
    },
    highlights: [
      "Historic center",
      "World-famous monuments",
      "Luxury shopping",
      "Fine dining",
      "Cultural events",
    ],
    universities: [],
    transportLinks: ["Bus 64", "Bus 40", "Bus 46", "Bus 62", "Bus 916"],
    averageRent: {
      studio: 1200,
      oneBedroom: 1600,
      twoBedroom: 2200,
    },
    studentFriendly: false,
    nightlife: "moderate",
    safety: "excellent",
    attractions: [
      "Pantheon",
      "Piazza Navona",
      "Trevi Fountain",
      "Spanish Steps",
      "Campo de' Fiori",
    ],
    bestFor: ["Tourists", "Luxury Living", "Culture Enthusiasts", "Shopping"],
    nearbyNeighborhoods: ["Trastevere", "Monti", "Prati"],
  },
  {
    id: 4,
    slug: "testaccio",
    nameKey: "neighborhoods.testaccio.name",
    descriptionKey: "neighborhoods.testaccio.description",
    fullDescriptionKey: "neighborhoods.testaccio.fullDescription",
    image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800",
    images: [
      "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800",
    ],
    coordinates: {
      lat: 41.8776,
      lng: 12.4774,
    },
    highlights: [
      "Authentic Roman neighborhood",
      "Food market",
      "Nightlife clubs",
      "Residential feel",
      "Good value",
    ],
    universities: ["Roma Tre University"],
    transportLinks: ["Metro B - Piramide", "Bus 23", "Tram 3"],
    averageRent: {
      studio: 600,
      oneBedroom: 850,
      twoBedroom: 1200,
    },
    studentFriendly: true,
    nightlife: "high",
    safety: "very good",
    attractions: [
      "Testaccio Market",
      "Protestant Cemetery",
      "MACRO Museum",
      "Monte Testaccio",
    ],
    bestFor: ["Students", "Food Lovers", "Nightlife", "Local Experience"],
    nearbyNeighborhoods: ["Trastevere", "Ostiense"],
  },
  {
    id: 5,
    slug: "monti",
    nameKey: "neighborhoods.monti.name",
    descriptionKey: "neighborhoods.monti.description",
    fullDescriptionKey: "neighborhoods.monti.fullDescription",
    image: "https://images.unsplash.com/photo-1548585744-f4f789e00f6e?w=800",
    images: [
      "https://images.unsplash.com/photo-1548585744-f4f789e00f6e?w=800",
    ],
    coordinates: {
      lat: 41.8947,
      lng: 12.4916,
    },
    highlights: [
      "Trendy boutiques",
      "Artistic vibe",
      "Cafes and wine bars",
      "Historic charm",
      "Near Colosseum",
    ],
    universities: [],
    transportLinks: ["Metro B - Colosseo", "Metro B - Cavour", "Bus 75"],
    averageRent: {
      studio: 900,
      oneBedroom: 1200,
      twoBedroom: 1700,
    },
    studentFriendly: false,
    nightlife: "moderate",
    safety: "excellent",
    attractions: [
      "Colosseum",
      "Roman Forum",
      "Monti neighborhood streets",
      "Via Urbana boutiques",
    ],
    bestFor: ["Young Professionals", "Artists", "Foodies", "Culture"],
    nearbyNeighborhoods: ["Centro Storico", "Esquilino"],
  },
  {
    id: 6,
    slug: "prati",
    nameKey: "neighborhoods.prati.name",
    descriptionKey: "neighborhoods.prati.description",
    fullDescriptionKey: "neighborhoods.prati.fullDescription",
    image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800",
    images: [
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800",
    ],
    coordinates: {
      lat: 41.9073,
      lng: 12.4575,
    },
    highlights: [
      "Elegant residential area",
      "Near Vatican",
      "Shopping streets",
      "Professional area",
      "Good transport",
    ],
    universities: [],
    transportLinks: ["Metro A - Ottaviano", "Metro A - Lepanto", "Bus 32"],
    averageRent: {
      studio: 850,
      oneBedroom: 1150,
      twoBedroom: 1600,
    },
    studentFriendly: false,
    nightlife: "low",
    safety: "excellent",
    attractions: [
      "Vatican Museums",
      "St. Peter's Basilica",
      "Castel Sant'Angelo",
      "Via Cola di Rienzo",
    ],
    bestFor: ["Families", "Professionals", "Quiet Living", "Vatican Access"],
    nearbyNeighborhoods: ["Centro Storico", "Trionfale"],
  },
];

export const getNeighborhoodBySlug = (
  slug: string
): Neighborhood | undefined => {
  return neighborhoods.find((n) => n.slug === slug);
};

export const getNeighborhoodById = (id: number): Neighborhood | undefined => {
  return neighborhoods.find((n) => n.id === id);
};

export const getStudentFriendlyNeighborhoods = (): Neighborhood[] => {
  return neighborhoods.filter((n) => n.studentFriendly);
};
