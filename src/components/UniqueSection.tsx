import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SchoolIcon from "@mui/icons-material/School";
import LanguageIcon from "@mui/icons-material/Language";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HandshakeIcon from "@mui/icons-material/Handshake";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface UniqueFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const UniqueSection: React.FC = () => {
  const { t } = useTranslation();
  const features: UniqueFeature[] = [
    {
      icon: <AccountBalanceIcon sx={{ fontSize: 40 }} />,
      title: t("uniqueSection.deepRomanHeritage.title"),
      description: t("uniqueSection.deepRomanHeritage.description"),
    },
    {
      icon: <SchoolIcon sx={{ fontSize: 40 }} />,
      title: t("uniqueSection.erasmusStudentSpecialists.title"),
      description: t("uniqueSection.erasmusStudentSpecialists.description"),
    },
    {
      icon: <LanguageIcon sx={{ fontSize: 40 }} />,
      title: t("uniqueSection.multilingualSupport.title"),
      description: t("uniqueSection.multilingualSupport.description"),
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 40 }} />,
      title: t("uniqueSection.primeLocations.title"),
      description: t("uniqueSection.primeLocations.description"),
    },
    {
      icon: <HandshakeIcon sx={{ fontSize: 40 }} />,
      title: t("uniqueSection.personalizedService.title"),
      description: t("uniqueSection.personalizedService.description"),
    },
    {
      icon: <FlashOnIcon sx={{ fontSize: 40 }} />,
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
        <Grid container spacing={4} sx={{ alignItems: "stretch" }}>
          {Array.from({ length: Math.ceil(features.length / 2) }).map(
            (_, rowIndex) => {
              const card1 = features[rowIndex * 2];
              const card2 = features[rowIndex * 2 + 1];
              const image = images[rowIndex];

              return (
                <Grid
                  container
                  item
                  xs={12}
                  spacing={3}
                  key={rowIndex}
                  sx={{
                    alignItems: "stretch",
                    mb: rowIndex < Math.ceil(features.length / 2) - 1 ? 0 : 0,
                  }}
                >
                  <Grid item xs={12} md={8}>
                    <Grid
                      container
                      spacing={3}
                      sx={{ alignItems: "stretch", height: "100%" }}
                    >
                      {[card1, card2].map(
                        (feature, cardIndex) =>
                          feature && (
                            <Grid
                              item
                              xs={12}
                              sm={6}
                              key={rowIndex * 2 + cardIndex}
                              sx={{ display: "flex" }}
                            >
                              <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                  duration: 0.6,
                                  delay: (rowIndex * 2 + cardIndex) * 0.1,
                                }}
                                style={{
                                  width: "100%",
                                  display: "flex",
                                  height: "100%",
                                }}
                              >
                                <Paper
                                  elevation={2}
                                  sx={{
                                    p: 3,
                                    height: "100%",
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    minHeight: { xs: "auto", md: 300 },
                                    transition:
                                      "transform 0.3s, box-shadow 0.3s",
                                    "&:hover": {
                                      transform: "translateY(-4px) scale(1.02)",
                                      boxShadow: 4,
                                      "& .icon-container": {
                                        backgroundColor: "primary.main",
                                        transform: "scale(1.1) rotate(5deg)",
                                      },
                                    },
                                  }}
                                >
                                  <Box
                                    className="icon-container"
                                    sx={{
                                      display: "inline-flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      width: 64,
                                      height: 64,
                                      borderRadius: "50%",
                                      backgroundColor: "primary.light",
                                      color: "white",
                                      mb: 2,
                                      transition: "all 0.3s ease",
                                    }}
                                  >
                                    {feature.icon}
                                  </Box>
                                  <Typography
                                    variant="h5"
                                    component="h3"
                                    gutterBottom
                                    sx={{ mb: 2 }}
                                  >
                                    {feature.title}
                                  </Typography>
                                  <Typography
                                    variant="body1"
                                    color="text.secondary"
                                    sx={{ flexGrow: 1 }}
                                  >
                                    {feature.description}
                                  </Typography>
                                </Paper>
                              </motion.div>
                            </Grid>
                          )
                      )}
                    </Grid>
                  </Grid>
                  {image && (
                    <Grid item xs={12} md={4} sx={{ display: "flex" }}>
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: rowIndex * 0.1 }}
                        style={{
                          width: "100%",
                          display: "flex",
                          height: "100%",
                        }}
                      >
                        <Box
                          sx={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "8px",
                            overflow: "hidden",
                            display: "flex",
                            minHeight: { xs: 250, md: 300 },
                          }}
                        >
                          <img
                            src={`${image.img}?w=400&fit=crop&auto=format`}
                            srcSet={`${image.img}?w=400&fit=crop&auto=format&dpr=2 2x`}
                            alt={`${image.title} - ${
                              image.title === "Historic Rome"
                                ? "Historic architecture and landmarks in Rome, Italy"
                                : image.title === "Modern Living"
                                ? "Modern apartments and residential properties in Rome"
                                : image.title === "Student Community"
                                ? "Student accommodation and housing near universities in Rome"
                                : "Beautiful real estate properties and apartments in Rome, Italy"
                            } - Romegate Properties showcase`}
                            loading="lazy"
                            style={{
                              borderRadius: "8px",
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        </Box>
                      </motion.div>
                    </Grid>
                  )}
                </Grid>
              );
            }
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default UniqueSection;
