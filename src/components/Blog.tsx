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
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Top 5 Neighborhoods for Erasmus Students in Rome",
      excerpt:
        "Discover the best areas in Rome for international students, from affordable housing to vibrant nightlife and easy access to universities.",
      author: "Maria Rossi",
      date: "January 15, 2025",
      category: "Student Life",
      image:
        "https://images.unsplash.com/photo-1529260830199-42c24126f198?w=800",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Understanding Rome's Rental Market: A Complete Guide",
      excerpt:
        "Everything you need to know about renting in Rome, from average prices to legal requirements and what to look for in a rental contract.",
      author: "Giuseppe Bianchi",
      date: "January 10, 2025",
      category: "Real Estate",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
      readTime: "8 min read",
    },
    {
      id: 3,
      title: "Property Investment in Rome: Trends for 2025",
      excerpt:
        "Explore the latest trends in Rome's real estate market, including emerging neighborhoods and investment opportunities for the year ahead.",
      author: "Francesca Romano",
      date: "January 5, 2025",
      category: "Investment",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Erasmus Student Success Stories: Finding Home in Rome",
      excerpt:
        "Read inspiring stories from Erasmus students who found their perfect accommodation in Rome and made the most of their study abroad experience.",
      author: "Sofia Conti",
      date: "December 28, 2024",
      category: "Student Life",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      readTime: "4 min read",
    },
    {
      id: 5,
      title: "Navigating Italian Property Laws: What Foreigners Need to Know",
      excerpt:
        "A comprehensive guide to Italian property laws, regulations, and requirements for foreign buyers and renters in Rome.",
      author: "Marco De Luca",
      date: "December 20, 2024",
      category: "Legal",
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
      readTime: "10 min read",
    },
    {
      id: 6,
      title: "Best Time to Buy or Rent in Rome: Seasonal Market Insights",
      excerpt:
        "Learn about the best times of year to search for properties in Rome, including seasonal price fluctuations and market availability.",
      author: "Elena Ferrari",
      date: "December 15, 2024",
      category: "Real Estate",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
      readTime: "7 min read",
    },
  ];

  const categories = [
    "All",
    "Student Life",
    "Real Estate",
    "Investment",
    "Legal",
  ];

  const [selectedCategory, setSelectedCategory] = React.useState<string>("All");

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

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
      {blogPosts.map((post) => (
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
            }),
          }}
        />
      ))}
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
              News & Insights
            </Typography>
            <Typography
              variant="h6"
              component="p"
              sx={{ textAlign: "center", mb: 6, color: "text.secondary" }}
            >
              Stay updated with the latest real estate trends, student guides,
              and market insights
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
                      alt={`${post.title} - ${post.category} article image`}
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
                        Read More
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
                No posts found in this category.
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
                View All Posts
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </>
  );
};

export default Blog;
