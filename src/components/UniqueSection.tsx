import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  ImageList,
  ImageListItem,
  Paper,
} from "@mui/material";

interface UniqueFeature {
  icon: string;
  title: string;
  description: string;
}

const UniqueSection: React.FC = () => {
  const features: UniqueFeature[] = [
    {
      icon: "🏛️",
      title: "Deep Roman Heritage",
      description:
        "We understand Rome's neighborhoods, history, and real estate market like no other. Our team has lived and worked in Rome for generations.",
    },
    {
      icon: "🎓",
      title: "Erasmus Student Specialists",
      description:
        "We're the #1 choice for Erasmus students. From finding affordable housing to helping with paperwork and settling in, we make your transition seamless.",
    },
    {
      icon: "🌍",
      title: "Multilingual Support",
      description:
        "Our team speaks English, Italian, Spanish, French, and more. We ensure clear communication for all our international clients.",
    },
    {
      icon: "📍",
      title: "Prime Locations",
      description:
        "Properties near universities, public transport, and Rome's most vibrant neighborhoods. We know where students want to live.",
    },
    {
      icon: "🤝",
      title: "Personalized Service",
      description:
        "Every client is unique. We provide tailored solutions, whether you're buying a luxury apartment or finding a student room.",
    },
    {
      icon: "⚡",
      title: "Fast & Efficient",
      description:
        "We understand students need housing quickly. Our streamlined process gets you settled fast, often within days.",
    },
  ];

  const images = [
    {
      img: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800",
      title: "Historic Rome",
    },
    {
      img: "https://images.unsplash.com/photo-1529260830199-42c24126f198?w=800",
      title: "Modern Living",
    },
    {
      img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      title: "Student Community",
    },
    {
      img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
      title: "Beautiful Properties",
    },
  ];

  return (
    <Box
      id="about"
      sx={{
        py: 8,
        backgroundColor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          sx={{ textAlign: "center", mb: 6 }}
        >
          What Makes Us Unique
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Grid container spacing={3}>
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Paper
                    elevation={2}
                    sx={{
                      p: 3,
                      height: "100%",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: 4,
                      },
                    }}
                  >
                    <Typography
                      variant="h4"
                      component="h3"
                      gutterBottom
                      sx={{ mb: 2 }}
                    >
                      {feature.icon} {feature.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <ImageList variant="masonry" cols={1} gap={8}>
              {images.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=400&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=400&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    style={{
                      borderRadius: "8px",
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default UniqueSection;
