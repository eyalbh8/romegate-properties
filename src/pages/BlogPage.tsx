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
  Stack,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonIcon from "@mui/icons-material/Person";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import { blogPosts } from "../data/blogPosts";

const BlogPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "en";
  const baseUrl = "https://vero.it";

  const categories = [
    t("blog.categories.all"),
    t("blog.categories.studentLife"),
    t("blog.categories.realEstate"),
    t("blog.categories.investment"),
    t("blog.categories.legal"),
  ];

  const categoryTranslationMap: { [key: string]: string } = {
    [t("blog.categories.all")]: "All",
    [t("blog.categories.studentLife")]: "Student Life",
    [t("blog.categories.realEstate")]: "Real Estate",
    [t("blog.categories.investment")]: "Investment",
    [t("blog.categories.legal")]: "Legal",
  };

  const [selectedCategory, setSelectedCategory] = useState<string>(
    t("blog.categories.all")
  );

  const filteredPosts =
    selectedCategory === t("blog.categories.all")
      ? blogPosts
      : blogPosts.filter(
          (post) => post.category === categoryTranslationMap[selectedCategory]
        );

  const getCategoryColor = (
    category: string
  ): "primary" | "secondary" | "default" => {
    switch (category) {
      case "Student Life":
        return "primary";
      case "Real Estate":
        return "secondary";
      default:
        return "default";
    }
  };

  return (
    <>
      <Helmet>
        <title>{t("blog.title")} | Vero Properties</title>
        <meta
          name="description"
          content={t("blog.metaDescription", {
            defaultValue:
              "Read our blog for insights on Italian real estate, student accommodation guides, market trends, and property investment advice.",
          })}
        />
        <link rel="canonical" href={`${baseUrl}/${currentLang}/blog`} />
      </Helmet>

      <Navbar />
      <Breadcrumb
        items={[{ label: t("blog.title") }]}
      />

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
              sx={{ textAlign: "center", mb: 2, fontSize: { xs: "2rem", md: "3rem" } }}
            >
              {t("blog.title")}
            </Typography>
            <Typography
              variant="h6"
              component="p"
              sx={{ textAlign: "center", mb: 6, color: "text.secondary" }}
            >
              {t("blog.subtitle")}
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
              {categories.map((category) => (
                <Chip
                  key={category}
                  label={category}
                  onClick={() => setSelectedCategory(category)}
                  color={selectedCategory === category ? "primary" : "default"}
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
            {filteredPosts.map((post, index) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
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
                    <CardMedia
                      component="img"
                      height="200"
                      image={post.image}
                      alt={t(post.titleKey)}
                      loading="lazy"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Box sx={{ mb: 2 }}>
                        <Chip
                          label={post.category}
                          color={getCategoryColor(post.category)}
                          size="small"
                          sx={{ mb: 1.5 }}
                        />
                      </Box>
                      <Typography variant="h5" component="h2" gutterBottom>
                        {t(post.titleKey)}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2, minHeight: "60px" }}
                      >
                        {t(post.excerptKey)}
                      </Typography>
                      <Stack
                        direction="row"
                        spacing={2}
                        alignItems="center"
                        sx={{ mb: 1, color: "text.secondary" }}
                      >
                        <Stack direction="row" spacing={0.5} alignItems="center">
                          <PersonIcon sx={{ fontSize: 16 }} />
                          <Typography variant="caption">{post.author}</Typography>
                        </Stack>
                        <Stack direction="row" spacing={0.5} alignItems="center">
                          <CalendarTodayIcon sx={{ fontSize: 16 }} />
                          <Typography variant="caption">{post.date}</Typography>
                        </Stack>
                      </Stack>
                      <Typography variant="caption" color="text.secondary">
                        {post.readTime} {t("common.minRead")}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ p: 2, pt: 0 }}>
                      <Button
                        size="small"
                        color="primary"
                        fullWidth
                        component={Link}
                        to={`/${currentLang}/blog/${post.slug}`}
                      >
                        {t("blog.readMore")}
                      </Button>
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {filteredPosts.length === 0 && (
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

export default BlogPage;
