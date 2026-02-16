import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BuildIcon from "@mui/icons-material/Build";
import SchoolIcon from "@mui/icons-material/School";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { services as servicesData } from "../data/services";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Services: React.FC = () => {
  const { t, i18n } = useTranslation();
  const services: Service[] = [
    {
      icon: <HomeIcon sx={{ fontSize: 48 }} />,
      title: t("services.buyingProperties.title"),
      description: t("services.buyingProperties.description"),
    },
    {
      icon: <AttachMoneyIcon sx={{ fontSize: 48 }} />,
      title: t("services.sellingProperties.title"),
      description: t("services.sellingProperties.description"),
    },
    {
      icon: <BuildIcon sx={{ fontSize: 48 }} />,
      title: t("services.propertyManagement.title"),
      description: t("services.propertyManagement.description"),
    },
    {
      icon: <SchoolIcon sx={{ fontSize: 48 }} />,
      title: t("services.studentAccommodation.title"),
      description: t("services.studentAccommodation.description"),
    },
  ];

  return (
    <>
      {/* Service Schema for each service */}
      {services.map((service, index) => {
        // Determine target audience and related property types
        let targetAudience: string[] = [];
        let relatedPropertyTypes: string[] = [];

        if (service.title.includes("Buying")) {
          targetAudience = ["Property Buyers", "Investors"];
          relatedPropertyTypes = ["sale", "luxury", "investment"];
        } else if (service.title.includes("Selling")) {
          targetAudience = ["Property Owners", "Landlords"];
          relatedPropertyTypes = ["sale", "luxury", "investment"];
        } else if (service.title.includes("Management")) {
          targetAudience = ["Landlords", "Property Owners"];
          relatedPropertyTypes = ["rent", "investment"];
        } else if (service.title.includes("Student")) {
          targetAudience = ["Erasmus Students", "International Students"];
          relatedPropertyTypes = ["rent", "student-housing"];
        }

        return (
          <script
            key={`schema-service-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                serviceType: service.title,
                provider: {
                  "@type": "RealEstateAgent",
                  name: "Vero Properties",
                  url: "https://vero.it",
                },
                areaServed: {
                  "@type": "Country",
                  name: "Italy",
                },
                description: service.description,
                keywords: [
                  service.title,
                  "Italy",
                  "real estate",
                  ...targetAudience,
                ].join(", "),
                audience: targetAudience.map((audience) => ({
                  "@type": "Audience",
                  audienceType: audience,
                })),
                about: relatedPropertyTypes.map((type) => ({
                  "@type": "Thing",
                  name:
                    type === "student-housing"
                      ? "Student Housing"
                      : type === "rent"
                      ? "Rental Properties"
                      : type === "sale"
                      ? "Properties for Sale"
                      : type,
                })),
                relatedTo: services
                  .filter((_, i) => i !== index)
                  .map((s) => ({
                    "@type": "Service",
                    name: s.title,
                  })),
                dateModified: new Date().toISOString(),
              }),
            }}
          />
        );
      })}
      <Box
        id="services"
        component="section"
        aria-label="Our services"
        sx={{
          py: 8,
          backgroundColor: "background.paper",
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
              {t("services.title")}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                textAlign: "center",
                maxWidth: 720,
                mx: "auto",
                mb: 6,
              }}
            >
              {t("services.intro")}
            </Typography>
          </motion.div>
          <Grid container spacing={4} sx={{ alignItems: "stretch" }}>
            {services.map((service, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={index}
                sx={{ display: "flex" }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  style={{ width: "100%", display: "flex" }}
                >
                  <Card
                    data-content-type="service-offering"
                    data-content-category={service.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}
                    sx={{
                      height: "100%",
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "transform 0.3s, box-shadow 0.3s",
                        "&:hover": {
                        transform: "translateY(-6px)",
                        boxShadow: 3,
                        "& .icon-container": {
                          backgroundColor: "primary.main",
                          borderColor: "primary.main",
                          color: "white",
                        },
                      },
                    }}
                  >
                    <CardContent
                      sx={{ flexGrow: 1, textAlign: "center", pt: 4 }}
                    >
                      <Box
                        className="icon-container"
                        sx={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 80,
                          height: 80,
                          borderRadius: 2,
                          border: "2px solid",
                          borderColor: "text.primary",
                          backgroundColor: "transparent",
                          color: "primary.main",
                          mb: 2,
                          transition: "all 0.3s ease",
                        }}
                      >
                        {service.icon}
                      </Box>
                      <Typography
                        variant="h5"
                        component="h3"
                        gutterBottom
                        sx={{ fontWeight: 600, fontSize: "1.25rem" }}
                      >
                        {service.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: "0.9375rem" }}>
                        {service.description}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: "center", pb: 2 }}>
                      <Button
                        size="small"
                        color="primary"
                        component="a"
                        href={`/${i18n.language || "en"}/services/${
                          servicesData[index]?.slug || service.title.toLowerCase().replace(/\s+/g, "-")
                        }`}
                      >
                        {t("services.learnMore")}
                      </Button>
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Services;
