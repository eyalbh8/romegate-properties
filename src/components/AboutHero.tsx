import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { aboutMedia } from "../data/aboutMedia";

const AboutHero: React.FC = () => {
  const { t } = useTranslation();
  const { backgroundImage, videoSrc, posterImage } = aboutMedia.hero;

  return (
    <Box
      component="section"
      aria-label="About hero"
      sx={{
        position: "relative",
        minHeight: "50vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background: video or image */}
      {videoSrc ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={posterImage}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <Box
          component="img"
          src={backgroundImage}
          alt={t("about.hero.alt")}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        />
      )}
      {/* Scrim for contrast and accessibility */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(135deg, rgba(102, 2, 60, 0.75) 0%, rgba(71, 1, 42, 0.85) 100%)",
          zIndex: 1,
        }}
      />
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          py: 8,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h1"
            component="h2"
            sx={{
              color: "white",
              fontWeight: 700,
              textShadow: "2px 2px 4px rgba(0,0,0,0.4)",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            }}
          >
            {t("about.hero.tagline")}
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography
            variant="h6"
            component="p"
            sx={{
              color: "rgba(255,255,255,0.95)",
              mt: 2,
              maxWidth: 600,
              mx: "auto",
              textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
            }}
          >
            {t("about.metaDescription")}
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AboutHero;
