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
  benefitKeys: string[];
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
    benefitKeys: [
      "services.buyingProperties.benefits.0",
      "services.buyingProperties.benefits.1",
      "services.buyingProperties.benefits.2",
      "services.buyingProperties.benefits.3",
      "services.buyingProperties.benefits.4",
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
    benefitKeys: [
      "services.sellingProperties.benefits.0",
      "services.sellingProperties.benefits.1",
      "services.sellingProperties.benefits.2",
      "services.sellingProperties.benefits.3",
      "services.sellingProperties.benefits.4",
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
    benefitKeys: [
      "services.propertyManagement.benefits.0",
      "services.propertyManagement.benefits.1",
      "services.propertyManagement.benefits.2",
      "services.propertyManagement.benefits.3",
      "services.propertyManagement.benefits.4",
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
    benefitKeys: [
      "services.studentAccommodation.benefits.0",
      "services.studentAccommodation.benefits.1",
      "services.studentAccommodation.benefits.2",
      "services.studentAccommodation.benefits.3",
      "services.studentAccommodation.benefits.4",
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
