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

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      icon: <HomeIcon sx={{ fontSize: 60, color: "primary.main" }} />,
      title: "Buying Properties",
      description:
        "Expert guidance through Rome's real estate market. Find your perfect property with our comprehensive search and personalized service.",
    },
    {
      icon: <AttachMoneyIcon sx={{ fontSize: 60, color: "primary.main" }} />,
      title: "Selling Properties",
      description:
        "Maximize your property's value with our professional marketing, valuation, and negotiation services.",
    },
    {
      icon: <BuildIcon sx={{ fontSize: 60, color: "primary.main" }} />,
      title: "Property Management",
      description:
        "Complete property management services including maintenance, tenant relations, and financial reporting.",
    },
    {
      icon: <SchoolIcon sx={{ fontSize: 60, color: "primary.main" }} />,
      title: "Student Accommodation",
      description:
        "Specialized services for Erasmus and international students. Find safe, affordable housing near universities.",
    },
  ];

  return (
    <>
      {/* Service Schema for each service */}
      {services.map((service, index) => (
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
                name: "Romegate Properties",
                url: "https://romegate.it",
              },
              areaServed: {
                "@type": "City",
                name: "Rome",
              },
              description: service.description,
            }),
          }}
        />
      ))}
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
              sx={{ textAlign: "center", mb: 6 }}
            >
              Our Services
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
                    sx={{
                      height: "100%",
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: "translateY(-8px) scale(1.02)",
                        boxShadow: 6,
                      },
                    }}
                  >
                    <CardContent
                      sx={{ flexGrow: 1, textAlign: "center", pt: 4 }}
                    >
                      <Box sx={{ mb: 2 }}>{service.icon}</Box>
                      <Typography variant="h5" component="h3" gutterBottom>
                        {service.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {service.description}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: "center", pb: 2 }}>
                      <Button size="small" color="primary">
                        Learn More
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
