import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Chip,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Divider,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import {
  getGuideBySlug,
  getRelatedGuides,
} from "../data/guides";const GuideDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "en";
  const baseUrl = "https://vero.it";

  const guide = getGuideBySlug(slug || "");

  if (!guide) {
    return <Navigate to={`/${currentLang}/guides`} replace />;
  }

  const title = t(guide.titleKey);
  const excerpt = t(guide.excerptKey);
  const content = t(guide.contentKey, {
    defaultValue: excerpt,
  });

  const relatedGuides = getRelatedGuides(guide.id);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: excerpt,
    image: guide.image,
    publisher: {
      "@type": "Organization",
      name: "Vero Properties",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/${currentLang}/guides/${guide.slug}`,
    },
  };

  return (
    <>
      <Helmet>
        <title>{title} | Vero Properties</title>
        <meta name="description" content={excerpt} />
        <link
          rel="canonical"
          href={`${baseUrl}/${currentLang}/guides/${guide.slug}`}
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={excerpt} />
        <meta property="og:image" content={guide.image} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>

      <Navbar />
      <Breadcrumb
        items={[
          { label: t("guides.title"), href: `/${currentLang}/guides` },
          { label: title },
        ]}
      />

      <Box
        component="article"
        sx={{ py: 6, backgroundColor: "background.paper" }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Chip
              label={t(guide.categoryKey)}
              color="primary"
              sx={{ mb: 3 }}
            />

            <Typography
              variant="h1"
              component="h1"
              sx={{ fontSize: { xs: "2rem", md: "3rem" }, mb: 3 }}
            >
              {title}
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                mb: 4,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <AccessTimeIcon fontSize="small" />
                <Typography variant="body2" color="text.secondary">
                  {guide.readTime} {t("common.minRead")}
                </Typography>
              </Box>
            </Box>

            {guide.image && (
              <Box
                component="img"
                src={guide.image}
                alt={title}
                sx={{
                  width: "100%",
                  height: { xs: 250, md: 400 },
                  objectFit: "cover",
                  borderRadius: 2,
                  mb: 4,
                }}
              />
            )}

            <Typography
              variant="body1"
              sx={{
                fontSize: "1.125rem",
                lineHeight: 1.8,
                color: "text.primary",
                "& p": { mb: 2 },
                "& h2": { mt: 4, mb: 2 },
                "& h3": { mt: 3, mb: 1.5 },
              }}
              component="div"
              dangerouslySetInnerHTML={{ __html: content }}
            />

            {relatedGuides.length > 0 && (
              <Box sx={{ mt: 6 }}>
                <Divider sx={{ mb: 4 }} />
                <Typography variant="h4" component="h2" gutterBottom>
                  {t("guides.relatedGuides")}
                </Typography>
                <Grid container spacing={3}>
                  {relatedGuides.map((rel) => (
                    <Grid item xs={12} sm={6} key={rel.id}>
                      <Card>
                        {rel.image && (
                          <CardMedia
                            component="img"
                            height="180"
                            image={rel.image}
                            alt={t(rel.titleKey)}
                          />
                        )}
                        <CardContent>
                          <Chip
                            label={t(rel.categoryKey)}
                            size="small"
                            sx={{ mb: 1 }}
                          />
                          <Typography variant="h6" gutterBottom>
                            {t(rel.titleKey)}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {t(rel.excerptKey)}
                          </Typography>
                          <Button
                            component={Link}
                            to={`/${currentLang}/guides/${rel.slug}`}
                            fullWidth
                            sx={{ mt: 2 }}
                          >
                            {t("blog.readMore")}
                          </Button>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}
          </motion.div>
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default GuideDetailPage;
