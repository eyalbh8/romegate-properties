import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  Paper,
} from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useTranslation } from "react-i18next";
import { generateReviewSchema, generateAggregateRatingSchema } from "../utils/schemaGenerator";

interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  reviewBody: string;
  avatar?: string;
}

const ReviewSection: React.FC = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample reviews - replace with actual data
  const reviews: Review[] = [
    {
      id: 1,
      author: "Maria S.",
      rating: 5,
      date: "2026-01-15",
      reviewBody:
        "Excellent service! They helped me find the perfect apartment for my Erasmus stay in Italy. Very professional and responsive.",
      avatar: "M",
    },
    {
      id: 2,
      author: "Thomas K.",
      rating: 5,
      date: "2025-12-10",
      reviewBody:
        "Great experience working with Vero. They made the property search process easy and helped with all the paperwork.",
      avatar: "T",
    },
    {
      id: 3,
      author: "Sofia L.",
      rating: 4,
      date: "2025-11-22",
      reviewBody:
        "Very helpful team. Found a great place in Trastevere. Would recommend to other students.",
      avatar: "S",
    },
  ];

  const averageRating = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((i) => (i === reviews.length - 1 ? 0 : i + 1));
    }, 5000);
    return () => clearInterval(id);
  }, [reviews.length]);

  const aggregateRating = generateAggregateRatingSchema({
    ratingValue: averageRating,
    reviewCount: reviews.length,
  });

  return (
    <>
      {/* Aggregate Rating Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            name: "Vero Properties",
            aggregateRating: aggregateRating,
          }),
        }}
      />

      {/* Individual Review Schemas */}
      {reviews.map((review) => {
        const reviewSchema = generateReviewSchema({
          author: review.author,
          rating: review.rating,
          reviewBody: review.reviewBody,
          datePublished: review.date,
        });
        return (
          <script
            key={`review-schema-${review.id}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(reviewSchema),
            }}
          />
        );
      })}

      <Box
        id="testimonials"
        component="section"
        aria-label="Testimonials"
        sx={{ py: 8, backgroundColor: "background.default" }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h2"
            align="center"
            gutterBottom
            sx={{ mb: 6, textTransform: "uppercase", letterSpacing: "0.02em", fontSize: "1.75rem" }}
          >
            {t("reviews.title", { defaultValue: "What Our Clients Say" })}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton
              aria-label="Previous testimonial"
              onClick={() => setCurrentIndex((i) => (i === 0 ? reviews.length - 1 : i - 1))}
              sx={{ color: "primary.main" }}
            >
              <NavigateBeforeIcon fontSize="large" />
            </IconButton>
            <Paper
              elevation={0}
              sx={{
                flex: 1,
                p: 4,
                textAlign: "center",
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 2,
              }}
            >
              <Typography variant="body1" sx={{ mb: 2, fontStyle: "italic", fontSize: "1.125rem" }}>
                "{reviews[currentIndex].reviewBody}"
              </Typography>
              <Typography variant="subtitle1" fontWeight={600}>
                {reviews[currentIndex].author}
              </Typography>
            </Paper>
            <IconButton
              aria-label="Next testimonial"
              onClick={() => setCurrentIndex((i) => (i === reviews.length - 1 ? 0 : i + 1))}
              sx={{ color: "primary.main" }}
            >
              <NavigateNextIcon fontSize="large" />
            </IconButton>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", gap: 0.5, mt: 3 }}>
            {reviews.map((_, i) => (
              <Box
                key={i}
                onClick={() => setCurrentIndex(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setCurrentIndex(i);
                }}
                aria-label={`Go to testimonial ${i + 1}`}
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  bgcolor: currentIndex === i ? "primary.main" : "grey.400",
                  cursor: "pointer",
                }}
              />
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ReviewSection;
