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

const HeroBox = styled(Box)(({ theme }) => ({
  position: "relative",
  minHeight: "90vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundImage:
    "url('https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=1920')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
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
}));

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
    <HeroBox id="home">
      <HeroContent maxWidth="lg">
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
        <Typography
          variant="h5"
          component="p"
          sx={{
            mb: 4,
            textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
          }}
        >
          Buying • Selling • Managing • Student Accommodation
        </Typography>
        <SearchBox>
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
      </HeroContent>
    </HeroBox>
  );
};

export default Hero;
