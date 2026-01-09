import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  ImageList,
  ImageListItem,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface UniqueFeature {
  icon: string;
  title: string;
  description: string;
}

const UniqueSection: React.FC = () => {
  const { t } = useTranslation();
  const features: UniqueFeature[] = [
    {
      icon: "🏛️",
      title: t("uniqueSection.deepRomanHeritage.title"),
      description: t("uniqueSection.deepRomanHeritage.description"),
    },
    {
      icon: "🎓",
      title: t("uniqueSection.erasmusStudentSpecialists.title"),
      description: t("uniqueSection.erasmusStudentSpecialists.description"),
    },
    {
      icon: "🌍",
      title: t("uniqueSection.multilingualSupport.title"),
      description: t("uniqueSection.multilingualSupport.description"),
    },
    {
      icon: "📍",
      title: t("uniqueSection.primeLocations.title"),
      description: t("uniqueSection.primeLocations.description"),
    },
    {
      icon: "🤝",
      title: t("uniqueSection.personalizedService.title"),
      description: t("uniqueSection.personalizedService.description"),
    },
    {
      icon: "⚡",
      title: t("uniqueSection.fastAndEfficient.title"),
      description: t("uniqueSection.fastAndEfficient.description"),
    },
  ];

  const images = [
    {
      img: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800",
      title: "Historic Rome",
    },
    {
      img: "https://images.unsplash.com/photo-1529260830199-42c24126f198?w=800",
      title: "Modern Living",
    },
    {
      img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      title: "Student Community",
    },
    {
      img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
      title: "Beautiful Properties",
    },
  ];

  return (
    <Box
      id="about"
      component="section"
      aria-label="What makes us unique"
      sx={{
        py: 8,
        backgroundColor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          sx={{ textAlign: "center", mb: 6 }}
        >
          {t("uniqueSection.title")}
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Grid container spacing={3} sx={{ alignItems: "stretch" }}>
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} key={index} sx={{ display: "flex" }}>
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    style={{ width: "100%", display: "flex" }}
                  >
                    <Paper
                      elevation={2}
                      sx={{
                        p: 3,
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        transition: "transform 0.3s, box-shadow 0.3s",
                        "&:hover": {
                          transform: "translateY(-4px) scale(1.02)",
                          boxShadow: 4,
                        },
                      }}
                    >
                      <Typography
                        variant="h5"
                        component="h3"
                        gutterBottom
                        sx={{ mb: 2 }}
                      >
                        {feature.icon} {feature.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {feature.description}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <ImageList variant="masonry" cols={1} gap={8}>
                {images.map((item, index) => (
                  <motion.div
                    key={item.img}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <ImageListItem>
                      <img
                        src={`${item.img}?w=400&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=400&fit=crop&auto=format&dpr=2 2x`}
                        alt={`${item.title} - ${
                          item.title === "Historic Rome"
                            ? "Historic architecture and landmarks in Rome, Italy"
                            : item.title === "Modern Living"
                            ? "Modern apartments and residential properties in Rome"
                            : item.title === "Student Community"
                            ? "Student accommodation and housing near universities in Rome"
                            : "Beautiful real estate properties and apartments in Rome, Italy"
                        } - Romegate Properties showcase`}
                        loading="lazy"
                        style={{
                          borderRadius: "8px",
                          width: "100%",
                          height: "auto",
                        }}
                      />
                    </ImageListItem>
                  </motion.div>
                ))}
              </ImageList>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default UniqueSection;
