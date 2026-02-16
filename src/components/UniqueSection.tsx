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
        <Grid container spacing={3} sx={{ alignItems: "stretch" }}>
          {features.map((feature, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{ display: "flex" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
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
                    minHeight: { xs: "auto", md: 260 },
                    transition:
                      "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: 4,
                      "& .icon-container": {
                        backgroundColor: "primary.main",
                        borderColor: "primary.main",
                        color: "white",
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
                      borderRadius: 2,
                      border: "2px solid",
                      borderColor: "text.primary",
                      backgroundColor: "transparent",
                      color: "primary.main",
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
                    sx={{ mb: 2, fontWeight: 600, fontSize: "1.25rem" }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ flexGrow: 1, fontSize: "0.9375rem" }}
                  >
                    {feature.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default UniqueSection;
