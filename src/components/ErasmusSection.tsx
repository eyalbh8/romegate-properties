import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Stack,
  Chip,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SupportIcon from "@mui/icons-material/Support";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface Testimonial {
  name: string;
  country: string;
  text: string;
  avatar: string;
}

const ErasmusSection: React.FC = () => {
  const { t } = useTranslation();
  const testimonials: Testimonial[] = [
    {
      name: "Maria González",
      country: "Spain",
      text: t("erasmusSection.testimonials.maria.text"),
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "Thomas Müller",
      country: "Germany",
      text: t("erasmusSection.testimonials.thomas.text"),
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      name: "Sophie Dubois",
      country: "France",
      text: t("erasmusSection.testimonials.sophie.text"),
      avatar: "https://i.pravatar.cc/150?img=3",
    },
  ];

  const services = [
    {
      icon: <SchoolIcon sx={{ fontSize: 40 }} />,
      title: t("erasmusSection.nearUniversities.title"),
      description: t("erasmusSection.nearUniversities.description"),
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 40 }} />,
      title: t("erasmusSection.primeLocations.title"),
      description: t("erasmusSection.primeLocations.description"),
    },
    {
      icon: <AccessTimeIcon sx={{ fontSize: 40 }} />,
      title: t("erasmusSection.flexibleLeases.title"),
      description: t("erasmusSection.flexibleLeases.description"),
    },
    {
      icon: <SupportIcon sx={{ fontSize: 40 }} />,
      title: t("erasmusSection.fullSupport.title"),
      description: t("erasmusSection.fullSupport.description"),
    },
  ];

  return (
    <Box
      id="erasmus"
      component="section"
      aria-label="Erasmus student services"
      sx={{
        py: 8,
        backgroundColor: "secondary.main",
        color: "white",
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
            sx={{ textAlign: "center", mb: 2, color: "white" }}
          >
            {t("erasmusSection.title")}
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              textAlign: "center",
              mb: 6,
              color: "rgba(255, 255, 255, 0.9)",
            }}
          >
            {t("erasmusSection.subtitle")}
          </Typography>
        </motion.div>

        <Grid container spacing={4} sx={{ mb: 6, alignItems: "stretch" }}>
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
                    textAlign: "center",
                    p: 3,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    color: "white",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <Box sx={{ mb: 2, color: "white" }}>{service.icon}</Box>
                  <Typography variant="h6" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "rgba(255, 255, 255, 0.9)" }}
                  >
                    {service.description}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h3"
            component="h3"
            sx={{ textAlign: "center", mb: 4, color: "white" }}
          >
            {t("erasmusSection.whatOurStudentsSay")}
          </Typography>
        </motion.div>
        <Grid container spacing={4} sx={{ alignItems: "stretch" }}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index} sx={{ display: "flex" }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                style={{ width: "100%", display: "flex" }}
              >
                <Card
                  sx={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                  }}
                >
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      sx={{ mb: 2 }}
                    >
                      <Avatar
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        sx={{ width: 56, height: 56 }}
                      />
                      <Box>
                        <Typography variant="h6">{testimonial.name}</Typography>
                        <Chip
                          label={testimonial.country}
                          size="small"
                          color="secondary"
                          sx={{ mt: 0.5 }}
                        />
                      </Box>
                    </Stack>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ flexGrow: 1 }}
                    >
                      "{testimonial.text}"
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ErasmusSection;
