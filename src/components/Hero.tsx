import React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Stack,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

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

const SearchBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const Hero: React.FC = () => {
  const handleSearch = (): void => {
    // Handle search functionality
    console.log("Search clicked");
  };

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
          alt="Beautiful view of Rome, Italy - Historic architecture and cityscape"
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
              fontWeight: 700,
              mb: 2,
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            Your Gateway to Roman Properties
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
            }}
          >
            Buying • Selling • Managing • Student Accommodation
          </Typography>
        </motion.p>
        <motion.nav
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          aria-label="Property search"
        >
          <SearchBox component="form" role="search">
            <TextField
              fullWidth
              placeholder="Search properties, neighborhoods, or areas..."
              variant="outlined"
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "transparent",
                  },
                  "&:hover fieldset": {
                    borderColor: "primary.main",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "primary.main",
                  },
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="contained"
              size="large"
              onClick={handleSearch}
              sx={{
                minWidth: 150,
                height: "56px",
              }}
            >
              Search
            </Button>
          </SearchBox>
        </motion.nav>
        <motion.nav
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          aria-label="Main navigation"
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
          >
            <Button
              variant="contained"
              size="large"
              onClick={handleBrowseClick}
              sx={{
                px: 4,
                py: 1.5,
              }}
            >
              Browse Properties
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={handleGetStartedClick}
              sx={{
                px: 4,
                py: 1.5,
                borderColor: "white",
                color: "white",
                "&:hover": {
                  borderColor: "white",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              Get Started
            </Button>
          </Stack>
        </motion.nav>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
