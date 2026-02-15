export interface Service {
  id: number;
  slug: string;
  titleKey: string;
  descriptionKey: string;
  icon: string;
  fullDescriptionKey: string;
  processSteps: {
    titleKey: string;
    descriptionKey: string;
  }[];
  benefits: string[];
  targetAudience: string[];
  relatedPropertyTypes: string[];
  pricingKey?: string;
  faqKeys?: string[];
}

export const services: Service[] = [
  {
    id: 1,
    slug: "buying-properties",
    titleKey: "services.buyingProperties.title",
    descriptionKey: "services.buyingProperties.description",
    icon: "home",
    fullDescriptionKey: "services.buyingProperties.fullDescription",
    processSteps: [
      {
        titleKey: "services.buyingProperties.process.step1.title",
        descriptionKey: "services.buyingProperties.process.step1.description",
      },
      {
        titleKey: "services.buyingProperties.process.step2.title",
        descriptionKey: "services.buyingProperties.process.step2.description",
      },
      {
        titleKey: "services.buyingProperties.process.step3.title",
        descriptionKey: "services.buyingProperties.process.step3.description",
      },
      {
        titleKey: "services.buyingProperties.process.step4.title",
        descriptionKey: "services.buyingProperties.process.step4.description",
      },
      {
        titleKey: "services.buyingProperties.process.step5.title",
        descriptionKey: "services.buyingProperties.process.step5.description",
      },
    ],
    benefits: [
      "Expert local market knowledge",
      "Access to exclusive listings",
      "Negotiation support",
      "Legal assistance",
      "Post-purchase support",
    ],
    targetAudience: ["Property Buyers", "Investors", "Expats"],
    relatedPropertyTypes: ["sale", "luxury", "investment"],
    pricingKey: "services.buyingProperties.pricing",
    faqKeys: ["buying.faq1", "buying.faq2", "buying.faq3"],
  },
  {
    id: 2,
    slug: "selling-properties",
    titleKey: "services.sellingProperties.title",
    descriptionKey: "services.sellingProperties.description",
    icon: "attach_money",
    fullDescriptionKey: "services.sellingProperties.fullDescription",
    processSteps: [
      {
        titleKey: "services.sellingProperties.process.step1.title",
        descriptionKey: "services.sellingProperties.process.step1.description",
      },
      {
        titleKey: "services.sellingProperties.process.step2.title",
        descriptionKey: "services.sellingProperties.process.step2.description",
      },
      {
        titleKey: "services.sellingProperties.process.step3.title",
        descriptionKey: "services.sellingProperties.process.step3.description",
      },
      {
        titleKey: "services.sellingProperties.process.step4.title",
        descriptionKey: "services.sellingProperties.process.step4.description",
      },
      {
        titleKey: "services.sellingProperties.process.step5.title",
        descriptionKey: "services.sellingProperties.process.step5.description",
      },
    ],
    benefits: [
      "Professional property valuation",
      "Wide buyer network",
      "Marketing and promotion",
      "Handling negotiations",
      "Transaction management",
    ],
    targetAudience: ["Property Owners", "Landlords", "Investors"],
    relatedPropertyTypes: ["sale", "luxury", "investment"],
    pricingKey: "services.sellingProperties.pricing",
    faqKeys: ["selling.faq1", "selling.faq2", "selling.faq3"],
  },
  {
    id: 3,
    slug: "property-management",
    titleKey: "services.propertyManagement.title",
    descriptionKey: "services.propertyManagement.description",
    icon: "build",
    fullDescriptionKey: "services.propertyManagement.fullDescription",
    processSteps: [
      {
        titleKey: "services.propertyManagement.process.step1.title",
        descriptionKey:
          "services.propertyManagement.process.step1.description",
      },
      {
        titleKey: "services.propertyManagement.process.step2.title",
        descriptionKey:
          "services.propertyManagement.process.step2.description",
      },
      {
        titleKey: "services.propertyManagement.process.step3.title",
        descriptionKey:
          "services.propertyManagement.process.step3.description",
      },
      {
        titleKey: "services.propertyManagement.process.step4.title",
        descriptionKey:
          "services.propertyManagement.process.step4.description",
      },
    ],
    benefits: [
      "Tenant screening and placement",
      "Rent collection",
      "Maintenance coordination",
      "Financial reporting",
      "Legal compliance",
    ],
    targetAudience: ["Landlords", "Property Owners", "Investors"],
    relatedPropertyTypes: ["rent", "investment"],
    pricingKey: "services.propertyManagement.pricing",
    faqKeys: ["management.faq1", "management.faq2", "management.faq3"],
  },
  {
    id: 4,
    slug: "student-accommodation",
    titleKey: "services.studentAccommodation.title",
    descriptionKey: "services.studentAccommodation.description",
    icon: "school",
    fullDescriptionKey: "services.studentAccommodation.fullDescription",
    processSteps: [
      {
        titleKey: "services.studentAccommodation.process.step1.title",
        descriptionKey:
          "services.studentAccommodation.process.step1.description",
      },
      {
        titleKey: "services.studentAccommodation.process.step2.title",
        descriptionKey:
          "services.studentAccommodation.process.step2.description",
      },
      {
        titleKey: "services.studentAccommodation.process.step3.title",
        descriptionKey:
          "services.studentAccommodation.process.step3.description",
      },
      {
        titleKey: "services.studentAccommodation.process.step4.title",
        descriptionKey:
          "services.studentAccommodation.process.step4.description",
      },
    ],
    benefits: [
      "Semester-based leases",
      "University proximity",
      "Affordable pricing",
      "Student community",
      "Quick placement",
    ],
    targetAudience: ["Erasmus Students", "International Students", "Students"],
    relatedPropertyTypes: ["rent", "student-housing"],
    pricingKey: "services.studentAccommodation.pricing",
    faqKeys: ["student.faq1", "student.faq2", "student.faq3"],
  },
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find((s) => s.slug === slug);
};

export const getServiceById = (id: number): Service | undefined => {
  return services.find((s) => s.id === id);
};
