import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  Stack,
  Divider,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer: React.FC = () => {
  const handleNavClick = (href: string): void => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "primary.dark",
        color: "white",
        pt: 6,
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 700,
                mb: 2,
              }}
            >
              ROME<span style={{ color: "#9D4EDD" }}>GATE</span>
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "rgba(255, 255, 255, 0.8)", mb: 2 }}
            >
              Your trusted partner for real estate in Rome. Specializing in
              buying, selling, and managing properties with a focus on student
              accommodation.
            </Typography>
            <Stack direction="row" spacing={2}>
              <Link
                href="https://facebook.com"
                target="_blank"
                sx={{ color: "white", "&:hover": { color: "secondary.light" } }}
              >
                <FacebookIcon />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                sx={{ color: "white", "&:hover": { color: "secondary.light" } }}
              >
                <InstagramIcon />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                sx={{ color: "white", "&:hover": { color: "secondary.light" } }}
              >
                <LinkedInIcon />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                sx={{ color: "white", "&:hover": { color: "secondary.light" } }}
              >
                <TwitterIcon />
              </Link>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              <Link
                component="button"
                variant="body2"
                onClick={() => handleNavClick("#home")}
                sx={{
                  color: "rgba(255, 255, 255, 0.8)",
                  textAlign: "left",
                  "&:hover": { color: "white" },
                  cursor: "pointer",
                }}
              >
                Home
              </Link>
              <Link
                component="button"
                variant="body2"
                onClick={() => handleNavClick("#properties")}
                sx={{
                  color: "rgba(255, 255, 255, 0.8)",
                  textAlign: "left",
                  "&:hover": { color: "white" },
                  cursor: "pointer",
                }}
              >
                Properties
              </Link>
              <Link
                component="button"
                variant="body2"
                onClick={() => handleNavClick("#services")}
                sx={{
                  color: "rgba(255, 255, 255, 0.8)",
                  textAlign: "left",
                  "&:hover": { color: "white" },
                  cursor: "pointer",
                }}
              >
                Services
              </Link>
              <Link
                component="button"
                variant="body2"
                onClick={() => handleNavClick("#about")}
                sx={{
                  color: "rgba(255, 255, 255, 0.8)",
                  textAlign: "left",
                  "&:hover": { color: "white" },
                  cursor: "pointer",
                }}
              >
                About Us
              </Link>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Services
            </Typography>
            <Stack spacing={1}>
              <Link
                component="button"
                variant="body2"
                sx={{
                  color: "rgba(255, 255, 255, 0.8)",
                  textAlign: "left",
                  "&:hover": { color: "white" },
                  cursor: "pointer",
                }}
              >
                Buying Properties
              </Link>
              <Link
                component="button"
                variant="body2"
                sx={{
                  color: "rgba(255, 255, 255, 0.8)",
                  textAlign: "left",
                  "&:hover": { color: "white" },
                  cursor: "pointer",
                }}
              >
                Selling Properties
              </Link>
              <Link
                component="button"
                variant="body2"
                sx={{
                  color: "rgba(255, 255, 255, 0.8)",
                  textAlign: "left",
                  "&:hover": { color: "white" },
                  cursor: "pointer",
                }}
              >
                Property Management
              </Link>
              <Link
                component="button"
                variant="body2"
                onClick={() => handleNavClick("#erasmus")}
                sx={{
                  color: "rgba(255, 255, 255, 0.8)",
                  textAlign: "left",
                  "&:hover": { color: "white" },
                  cursor: "pointer",
                }}
              >
                Student Accommodation
              </Link>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Stack spacing={1}>
              <Typography
                variant="body2"
                sx={{ color: "rgba(255, 255, 255, 0.8)" }}
              >
                Via Manzoni 37
                <br />
                20121 Milano, Italy
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "rgba(255, 255, 255, 0.8)" }}
              >
                Phone: +39 02 1234 5678
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "rgba(255, 255, 255, 0.8)" }}
              >
                Email: info@romegate.it
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4, borderColor: "rgba(255, 255, 255, 0.2)" }} />
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="body2"
            sx={{ color: "rgba(255, 255, 255, 0.8)" }}
          >
            © {new Date().getFullYear()} Romegate Properties. All rights
            reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
