import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Chip,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import { guides } from "../data/guides";

const GuidesPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "en";
  const baseUrl = "https://vero.it";

  const categoryKeys = [
    "all",
    "buying",
    "bureaucracy",
    "taxCosts",
    "financing",
    "legal",
    "market",
  ] as const;

  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredGuides =
    selectedCategory === "all"
      ? guides
      : guides.filter(
          (g) => g.categoryKey === `guides.categories.${selectedCategory}`
        );

  const guidesListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: t("guides.title"),
    url: `${baseUrl}/${currentLang}/guides`,
    inLanguage:
      currentLang === "he" ? "he-IL" : currentLang === "it" ? "it-IT" : "en-GB",
    itemListElement: guides.map((g, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${baseUrl}/${currentLang}/guides/${g.slug}`,
      name: t(g.titleKey),
    })),
  };

  return (
    <>
      <Helmet>
        <title>{t("guides.title")} | Vero Properties</title>
        <meta
          name="description"
          content={t("guides.metaDescription", {
            defaultValue:
              "Expert guides on buying property in Italy: process, bureaucracy, taxes, financing, and legal checks.",
          })}
        />
        <link rel="canonical" href={`${baseUrl}/${currentLang}/guides`} />
        <script type="application/ld+json">
          {JSON.stringify(guidesListSchema)}
        </script>
      </Helmet>

      <Navbar />
      <Breadcrumb items={[{ label: t("guides.title") }]} />

      <Box
        component="section"
        sx={{
          py: 8,
          backgroundColor: "background.paper",
          minHeight: "60vh",
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              sx={{
                textAlign: "center",
                mb: 2,
                fontSize: { xs: "2rem", md: "3rem" },
              }}
            >
              {t("guides.title")}
            </Typography>
            <Typography
              variant="h6"
              component="p"
              sx={{ textAlign: "center", mb: 6, color: "text.secondary" }}
            >
              {t("guides.subtitle")}
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: "center",
                flexWrap: "wrap",
                mb: 6,
              }}
            >
              {categoryKeys.map((key) => (
                <Chip
                  key={key}
                  label={t(`guides.categories.${key}`)}
                  onClick={() => setSelectedCategory(key)}
                  color={selectedCategory === key ? "primary" : "default"}
                  sx={{
                    cursor: "pointer",
                    transition: "all 0.3s",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                />
              ))}
            </Box>
          </motion.div>

          <Grid container spacing={4}>
            {filteredGuides.map((guide, index) => (
              <Grid item xs={12} sm={6} md={4} key={guide.id}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card
                    component="article"
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: 6,
                      },
                    }}
                  >
                    {guide.image && (
                      <CardMedia
                        component="img"
                        height="200"
                        image={guide.image}
                        alt={t(guide.titleKey)}
                        loading="lazy"
                      />
                    )}
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Box sx={{ mb: 2 }}>
                        <Chip
                          label={t(guide.categoryKey)}
                          color="primary"
                          size="small"
                          sx={{ mb: 1.5 }}
                        />
                      </Box>
                      <Typography variant="h5" component="h2" gutterBottom>
                        {t(guide.titleKey)}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2, minHeight: "60px" }}
                      >
                        {t(guide.excerptKey)}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 0.5,
                          color: "text.secondary",
                        }}
                      >
                        <AccessTimeIcon sx={{ fontSize: 16 }} />
                        <Typography variant="caption">
                          {guide.readTime} {t("common.minRead")}
                        </Typography>
                      </Box>
                    </CardContent>
                    <CardActions sx={{ p: 2, pt: 0 }}>
                      <Button
                        size="small"
                        color="primary"
                        fullWidth
                        component={Link}
                        to={`/${currentLang}/guides/${guide.slug}`}
                      >
                        {t("blog.readMore")}
                      </Button>
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {filteredGuides.length === 0 && (
            <Box sx={{ textAlign: "center", py: 8 }}>
              <Typography variant="h6" color="text.secondary">
                {t("blog.noPostsFound")}
              </Typography>
            </Box>
          )}
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default GuidesPage;
