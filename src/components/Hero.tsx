import React, { useState } from "react";
import { Box, Container, Typography, Button, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { aboutMedia } from "../data/aboutMedia";

const HeroSection = styled("section")(({ theme }) => ({
  position: "relative",
  minHeight: "60vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
}));

const HeroContent = styled(Container)(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  textAlign: "center",
  color: "white",
  padding: theme.spacing(4),
}));

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [videoFailed, setVideoFailed] = useState(false);
  const handleBrowseClick = (): void => {
    const element = document.querySelector("#properties");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleGetStartedClick = (): void => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const homeHero = aboutMedia.home?.hero;
  const hasBackground =
    homeHero && (homeHero.videoSrc || homeHero.backgroundImage);
  const useVideo =
    hasBackground &&
    homeHero.videoSrc &&
    !videoFailed;

  return (
    <HeroSection id="home" aria-label="Hero section">
      {useVideo ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={homeHero.posterImage}
            onError={(e) => {
              const v = e.currentTarget;
              console.warn("[Hero] Video failed to load, falling back to image.", {
                src: homeHero.videoSrc,
                error: v.error?.message ?? v.error?.code,
              });
              setVideoFailed(true);
            }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          >
            <source src={homeHero.videoSrc} type="video/mp4" />
          </video>
        </motion.div>
      ) : hasBackground && homeHero.backgroundImage ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        >
          <Box
            component="img"
            src={homeHero.backgroundImage}
            alt=""
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </motion.div>
      ) : null}
      <HeroContent maxWidth="lg" sx={hasBackground ? { position: "relative", zIndex: 2 } : undefined}>
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h1"
            component="h1"
            gutterBottom
            sx={{
              fontFamily: '"Great Vibes", cursive',
              fontWeight: 400,
              mb: 0,
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              fontSize: { xs: "3rem", sm: "4rem", md: "5rem" },
            }}
          >
            Vero
          </Typography>
          <Typography
            variant="h1"
            component="span"
            sx={{
              fontWeight: 700,
              mb: 2,
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
              display: "block",
            }}
          >
            {t("hero.title")}
          </Typography>
        </motion.header>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography
            variant="h5"
            component="span"
            sx={{
              mb: 4,
              textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
              display: "block",
              maxWidth: "800px",
              mx: "auto",
              lineHeight: 1.6,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              fontSize: { xs: "0.9rem", sm: "1.1rem", md: "1.25rem" },
            }}
          >
            {t("hero.subtitle")}
          </Typography>
        </motion.p>
        <motion.nav
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          aria-label="Main navigation"
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
            sx={{ mt: 4 }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={handleBrowseClick}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: "1.1rem",
                fontWeight: 600,
              }}
            >
              {t("hero.browseProperties")}
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={handleGetStartedClick}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: "1.1rem",
                fontWeight: 600,
                borderColor: "white",
                color: "white",
                borderWidth: 2,
                "&:hover": {
                  borderColor: "white",
                  borderWidth: 2,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              {t("hero.getStarted")}
            </Button>
          </Stack>
        </motion.nav>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
