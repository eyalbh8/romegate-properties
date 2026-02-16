import React from "react";
import { Link } from "react-router-dom";
import { Box, Container, Typography, Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFoundPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "en";

  return (
    <>
      <Helmet>
        <title>404 - {t("common.pageNotFound")} | Vero Properties</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <Navbar />

      <Box
        sx={{
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: 8,
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "4rem", md: "6rem" },
                fontWeight: "bold",
                color: "primary.main",
                mb: 2,
              }}
            >
              404
            </Typography>
            <Typography variant="h4" gutterBottom>
              {t("common.pageNotFound")}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              {t("common.pageNotFoundDescription", {
                defaultValue:
                  "The page you're looking for doesn't exist or has been moved.",
              })}
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Button
                variant="contained"
                size="large"
                component={Link}
                to={`/${currentLang}`}
                startIcon={<HomeIcon />}
              >
                {t("common.goHome")}
              </Button>
              <Button
                variant="outlined"
                size="large"
                component={Link}
                to={`/${currentLang}/properties`}
                startIcon={<SearchIcon />}
              >
                {t("common.browseProperties")}
              </Button>
            </Box>

            <Box sx={{ mt: 6 }}>
              <Typography variant="h6" gutterBottom>
                {t("common.popularPages")}
              </Typography>
              <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
                <Link to={`/${currentLang}/properties`}>
                  <Typography color="primary">{t("properties.title")}</Typography>
                </Link>
                <Link to={`/${currentLang}/services`}>
                  <Typography color="primary">{t("services.title")}</Typography>
                </Link>
                <Link to={`/${currentLang}/blog`}>
                  <Typography color="primary">{t("blog.title")}</Typography>
                </Link>
                <Link to={`/${currentLang}/contact`}>
                  <Typography color="primary">{t("navbar.contact")}</Typography>
                </Link>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default NotFoundPage;
