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
import { useTranslation } from "react-i18next";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const faqs: FAQItem[] = [
    {
      question: t("faq.questions.findStudentAccommodation.question"),
      answer: t("faq.questions.findStudentAccommodation.answer"),
    },
    {
      question: t("faq.questions.documentsForRenting.question"),
      answer: t("faq.questions.documentsForRenting.answer"),
    },
    {
      question: t("faq.questions.howLongToFindProperty.question"),
      answer: t("faq.questions.howLongToFindProperty.answer"),
    },
    {
      question: t("faq.questions.propertyManagementServices.question"),
      answer: t("faq.questions.propertyManagementServices.answer"),
    },
    {
      question: t("faq.questions.areasCovered.question"),
      answer: t("faq.questions.areasCovered.answer"),
    },
    {
      question: t("faq.questions.propertyInvestment.question"),
      answer: t("faq.questions.propertyInvestment.answer"),
    },
    {
      question: t("faq.questions.languagesSpoken.question"),
      answer: t("faq.questions.languagesSpoken.answer"),
    },
    {
      question: t("faq.questions.virtualTours.question"),
      answer: t("faq.questions.virtualTours.answer"),
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
              {t("faq.title")}
            </Typography>
            <Typography
              variant="h6"
              component="p"
              sx={{ textAlign: "center", mb: 6, color: "text.secondary" }}
            >
              {t("faq.subtitle")}
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
                  data-content-type="faq-item"
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
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{ fontWeight: 600 }}
                    >
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
