import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const faqs: FAQItem[] = [
    {
      question: "How do I find student accommodation in Rome?",
      answer:
        "We specialize in helping Erasmus and international students find accommodation in Rome. Simply contact us with your requirements, budget, and preferred location, and we'll match you with suitable properties near universities.",
    },
    {
      question: "What documents do I need to rent a property in Rome?",
      answer:
        "Typically, you'll need a valid ID or passport, proof of income or a guarantor, and sometimes a tax code (codice fiscale). For students, we can help you navigate the requirements and provide guidance on obtaining necessary documents.",
    },
    {
      question: "How long does it take to find a property?",
      answer:
        "For students, we often find suitable accommodation within 3-7 days. For buyers or long-term renters, the process typically takes 2-4 weeks depending on your specific requirements and market availability.",
    },
    {
      question: "Do you offer property management services?",
      answer:
        "Yes, we provide comprehensive property management services including maintenance, tenant relations, rent collection, and financial reporting. We handle all aspects of property management so you don't have to.",
    },
    {
      question: "What areas of Rome do you cover?",
      answer:
        "We cover all neighborhoods in Rome, with special expertise in areas popular with students such as Trastevere, San Lorenzo, Testaccio, and Centro Storico. We also serve luxury markets in Prati, Monti, and other prime locations.",
    },
    {
      question: "Can you help with property investment in Rome?",
      answer:
        "Absolutely! We provide investment consulting services, market analysis, and help identify profitable investment opportunities in Rome's real estate market. We work with both local and international investors.",
    },
    {
      question: "What languages do you speak?",
      answer:
        "Our team is multilingual and can assist you in English, Italian, Spanish, French, and German. We ensure clear communication for all our international clients.",
    },
    {
      question: "Do you offer virtual property tours?",
      answer:
        "Yes, we offer virtual tours for many of our properties. This is especially useful for international clients and students who cannot visit in person before making a decision.",
    },
  ];

  const faqSchema = {
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <Box
        id="faq"
        component="section"
        aria-label="Frequently Asked Questions"
        sx={{
          py: 8,
          backgroundColor: "background.default",
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ textAlign: "center", mb: 2 }}
            >
              Frequently Asked Questions
            </Typography>
            <Typography
              variant="h6"
              component="p"
              sx={{ textAlign: "center", mb: 6, color: "text.secondary" }}
            >
              Find answers to common questions about our services
            </Typography>
          </motion.div>

          <Box sx={{ maxWidth: 800, mx: "auto" }}>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Accordion
                  expanded={expanded === `panel${index}`}
                  onChange={handleChange(`panel${index}`)}
                  sx={{
                    mb: 2,
                    "&:before": {
                      display: "none",
                    },
                    boxShadow: 2,
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${index}-content`}
                    id={`panel${index}-header`}
                  >
                    <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body1" color="text.secondary">
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default FAQ;

