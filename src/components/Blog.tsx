import React from "react";
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
  Avatar,
  Stack,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonIcon from "@mui/icons-material/Person";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

const Blog: React.FC = () => {
  const { t } = useTranslation();

  const blogPostKeys: {
    [key: number]: { title: string; excerpt: string; category: string };
  } = {
    1: {
      title: "blog.posts.top5Neighborhoods.title",
      excerpt: "blog.posts.top5Neighborhoods.excerpt",
      category: "Student Life",
    },
    2: {
      title: "blog.posts.understandingRentalMarket.title",
      excerpt: "blog.posts.understandingRentalMarket.excerpt",
      category: "Real Estate",
    },
    3: {
      title: "blog.posts.propertyInvestmentTrends.title",
      excerpt: "blog.posts.propertyInvestmentTrends.excerpt",
      category: "Investment",
    },
    4: {
      title: "blog.posts.erasmusSuccessStories.title",
      excerpt: "blog.posts.erasmusSuccessStories.excerpt",
      category: "Student Life",
    },
    5: {
      title: "blog.posts.navigatingPropertyLaws.title",
      excerpt: "blog.posts.navigatingPropertyLaws.excerpt",
      category: "Legal",
    },
    6: {
      title: "blog.posts.bestTimeToBuyOrRent.title",
      excerpt: "blog.posts.bestTimeToBuyOrRent.excerpt",
      category: "Real Estate",
    },
  };

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: t(blogPostKeys[1].title),
      excerpt: t(blogPostKeys[1].excerpt),
      author: "Maria Rossi",
      date: "January 15, 2025",
      category: blogPostKeys[1].category,
      image:
        "https://images.unsplash.com/photo-1529260830199-42c24126f198?w=800",
      readTime: `5 ${t("common.minRead")}`,
    },
    {
      id: 2,
      title: t(blogPostKeys[2].title),
      excerpt: t(blogPostKeys[2].excerpt),
      author: "Giuseppe Bianchi",
      date: "January 10, 2025",
      category: blogPostKeys[2].category,
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
      readTime: `8 ${t("common.minRead")}`,
    },
    {
      id: 3,
      title: t(blogPostKeys[3].title),
      excerpt: t(blogPostKeys[3].excerpt),
      author: "Francesca Romano",
      date: "January 5, 2025",
      category: blogPostKeys[3].category,
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      readTime: `6 ${t("common.minRead")}`,
    },
    {
      id: 4,
      title: t(blogPostKeys[4].title),
      excerpt: t(blogPostKeys[4].excerpt),
      author: "Sofia Conti",
      date: "December 28, 2024",
      category: blogPostKeys[4].category,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      readTime: `4 ${t("common.minRead")}`,
    },
    {
      id: 5,
      title: t(blogPostKeys[5].title),
      excerpt: t(blogPostKeys[5].excerpt),
      author: "Marco De Luca",
      date: "December 20, 2024",
      category: blogPostKeys[5].category,
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
      readTime: `10 ${t("common.minRead")}`,
    },
    {
      id: 6,
      title: t(blogPostKeys[6].title),
      excerpt: t(blogPostKeys[6].excerpt),
      author: "Elena Ferrari",
      date: "December 15, 2024",
      category: blogPostKeys[6].category,
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
      readTime: `7 ${t("common.minRead")}`,
    },
  ];

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

  const [selectedCategory, setSelectedCategory] = React.useState<string>(
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
      {/* BlogPosting Schema for each post */}
      {blogPosts.map((post) => {
        // Determine related services and locations based on category
        let relatedServices = [];
        let mentionedLocations = ["Rome"];

        if (post.category === "Student Life") {
          relatedServices.push("Student Accommodation");
          mentionedLocations.push(
            "Trastevere",
            "San Lorenzo",
            "Testaccio",
            "Centro Storico"
          );
        } else if (post.category === "Real Estate") {
          relatedServices.push(
            "Buying Properties",
            "Selling Properties",
            "Property Management"
          );
        } else if (post.category === "Investment") {
          relatedServices.push("Buying Properties", "Property Management");
        } else if (post.category === "Legal") {
          relatedServices.push("Buying Properties", "Selling Properties");
        }

        // Extract neighborhoods from title/excerpt if mentioned
        const neighborhoods = [
          "Trastevere",
          "Monti",
          "Centro Storico",
          "Prati",
          "San Lorenzo",
          "Testaccio",
        ];
        const mentionedNeighborhoods = neighborhoods.filter(
          (n) => post.title.includes(n) || post.excerpt.includes(n)
        );
        mentionedLocations.push(...mentionedNeighborhoods);

        return (
          <script
            key={`schema-${post.id}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                headline: post.title,
                image: post.image,
                datePublished: new Date(post.date).toISOString(),
                dateModified: new Date(post.date).toISOString(),
                author: {
                  "@type": "Person",
                  name: post.author,
                },
                publisher: {
                  "@type": "Organization",
                  name: "Romegate Properties",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://romegate.it/logo.png",
                  },
                },
                description: post.excerpt,
                articleSection: post.category,
                keywords: [
                  post.category,
                  "Rome",
                  "real estate",
                  ...mentionedLocations,
                ].join(", "),
                about: [
                  {
                    "@type": "Thing",
                    name: post.category,
                  },
                  ...relatedServices.map((service) => ({
                    "@type": "Service",
                    name: service,
                  })),
                ],
                mentions: mentionedLocations.map((location) => ({
                  "@type": location === "Rome" ? "City" : "Place",
                  name: location,
                  addressLocality: "Rome",
                  addressRegion: "Lazio",
                  addressCountry: "IT",
                })),
              }),
            }}
          />
        );
      })}
      <Box
        id="blog"
        component="section"
        aria-label="Blog and news articles"
        sx={{
          py: 8,
          backgroundColor: "background.paper",
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{ textAlign: "center", mb: 2 }}
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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

          <Grid container spacing={4} sx={{ alignItems: "stretch" }}>
            {filteredPosts.map((post, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={post.id}
                sx={{ display: "flex" }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  style={{ width: "100%", display: "flex" }}
                >
                  <Card
                    component="article"
                    data-content-type="blog-post"
                    data-content-category={post.category
                      .toLowerCase()
                      .replace(/\s+/g, "-")}
                    sx={{
                      height: "100%",
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: "translateY(-8px) scale(1.02)",
                        boxShadow: 6,
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={post.image}
                      alt={`${post.title} - ${
                        post.category
                      } article about real estate in Rome by ${
                        post.author
                      }. ${post.excerpt.substring(0, 100)}...`}
                      loading="lazy"
                      sx={{
                        objectFit: "cover",
                      }}
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
                      <Typography variant="h5" component="h3" gutterBottom>
                        {post.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2, minHeight: "60px" }}
                      >
                        {post.excerpt}
                      </Typography>
                      <Stack
                        direction="row"
                        spacing={2}
                        alignItems="center"
                        sx={{ mb: 1, color: "text.secondary" }}
                      >
                        <Stack
                          direction="row"
                          spacing={0.5}
                          alignItems="center"
                        >
                          <PersonIcon sx={{ fontSize: 16 }} />
                          <Typography variant="caption">
                            {post.author}
                          </Typography>
                        </Stack>
                        <Stack
                          direction="row"
                          spacing={0.5}
                          alignItems="center"
                        >
                          <CalendarTodayIcon sx={{ fontSize: 16 }} />
                          <Typography variant="caption">{post.date}</Typography>
                        </Stack>
                      </Stack>
                      <Typography variant="caption" color="text.secondary">
                        {post.readTime}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ p: 2, pt: 0 }}>
                      <Button size="small" color="primary" fullWidth>
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ textAlign: "center", mt: 6 }}>
              <Button variant="outlined" size="large" color="primary">
                {t("blog.viewAllPosts")}
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </>
  );
};

export default Blog;
