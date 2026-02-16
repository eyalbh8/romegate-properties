import React from "react";
import { Container, Typography, Button, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const HeroSection = styled("section")({
  position: "relative",
  minHeight: "90vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1,
  },
});

const VideoBackground = styled("video")({
  position: "absolute",
  top: "50%",
  left: "50%",
  minWidth: "100%",
  minHeight: "100%",
  width: "auto",
  height: "auto",
  transform: "translate(-50%, -50%)",
  zIndex: 0,
  objectFit: "cover",
});

const HeroContent = styled(Container)(({ theme }) => ({
  position: "relative",
  zIndex: 2,
  textAlign: "center",
  color: "white",
  padding: theme.spacing(4),
}));

const Hero: React.FC = () => {
  const { t } = useTranslation();
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

  return (
    <HeroSection id="home" aria-label="Hero section">
      <VideoBackground
        autoPlay
        loop
        muted
        playsInline
        poster="https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=1920"
      >
        <source
          src="https://videos.pexels.com/video-files/2491284/2491284-hd_1920_1080_25fps.mp4"
          type="video/mp4"
        />
        {/* Fallback image if video doesn't load */}
        <img
          src="https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=1920"
          alt="Beautiful view of Italy - Historic architecture and cityscape"
          loading="lazy"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            minWidth: "100%",
            minHeight: "100%",
            width: "auto",
            height: "auto",
            transform: "translate(-50%, -50%)",
            objectFit: "cover",
          }}
        />
      </VideoBackground>
      <HeroContent maxWidth="lg">
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
