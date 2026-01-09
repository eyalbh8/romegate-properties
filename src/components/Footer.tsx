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
import { useTheme } from "@mui/material/styles";
import { SvgIcon } from "@mui/material";

// WhatsApp Icon Component
const WhatsAppIcon: React.FC<{ sx?: any }> = ({ sx }) => (
  <SvgIcon sx={sx} viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </SvgIcon>
);

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
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
                fontWeight: 700,
                mb: 2,
              }}
            >
              ROME
              <span style={{ color: theme.palette.secondary.main }}>GATE</span>
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
              <Link
                href="https://wa.me/35794202215?text=Hello!%20I%20am%20interested%20in%20your%20real%20estate%20services%20in%20Rome.%20I%20would%20like%20to%20learn%20more%20about%20available%20properties,%20student%20accommodation%20options,%20and%20your%20professional%20services.%20Could%20you%20please%20provide%20me%20with%20more%20information?%20Thank%20you!"
                target="_blank"
                sx={{ color: "white", "&:hover": { color: "secondary.light" } }}
              >
                <WhatsAppIcon />
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
