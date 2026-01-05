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
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const handleNavClick = (href: string): void => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      component="footer"
      role="contentinfo"
      aria-label="Site footer"
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
              {t("footer.description")}
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
              {t("footer.quickLinks")}
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
                {t("navbar.home")}
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
                {t("navbar.properties")}
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
                {t("navbar.services")}
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
                {t("footer.aboutUs")}
              </Link>
              <Link
                component="button"
                variant="body2"
                onClick={() => handleNavClick("#blog")}
                sx={{
                  color: "rgba(255, 255, 255, 0.8)",
                  textAlign: "left",
                  "&:hover": { color: "white" },
                  cursor: "pointer",
                }}
              >
                {t("navbar.blog")}
              </Link>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              {t("footer.services")}
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
                {t("footer.buyingProperties")}
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
                {t("footer.sellingProperties")}
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
                {t("footer.propertyManagement")}
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
                {t("footer.studentAccommodation")}
              </Link>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              {t("footer.contact")}
            </Typography>
            <Stack spacing={1}>
              <Typography
                variant="body2"
                sx={{ color: "rgba(255, 255, 255, 0.8)" }}
              >
                {t("contact.addressLine1")}
                <br />
                {t("contact.addressLine2")}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "rgba(255, 255, 255, 0.8)" }}
              >
                {t("contact.phone")}: {t("contact.phoneNumber")}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "rgba(255, 255, 255, 0.8)" }}
              >
                {t("contact.email")}: {t("contact.emailAddress")}
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
            © {new Date().getFullYear()} {t("footer.copyright")}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
