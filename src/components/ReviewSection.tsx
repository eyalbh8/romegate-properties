import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Rating,
  Grid,
  Paper,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
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

  // Sample reviews - replace with actual data
  const reviews: Review[] = [
    {
      id: 1,
      author: "Maria S.",
      rating: 5,
      date: "2026-01-15",
      reviewBody:
        "Excellent service! They helped me find the perfect apartment for my Erasmus stay in Rome. Very professional and responsive.",
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

      <Box sx={{ py: 6 }}>
        <Typography variant="h4" align="center" gutterBottom>
          {t("reviews.title", { defaultValue: "What Our Clients Say" })}
        </Typography>

        <Paper
          sx={{
            p: 3,
            mb: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
            <Typography variant="h3" fontWeight="bold">
              {averageRating.toFixed(1)}
            </Typography>
            <StarIcon sx={{ fontSize: 48, color: "warning.main" }} />
          </Box>
          <Rating value={averageRating} precision={0.1} readOnly size="large" />
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            {t("reviews.basedOn", { count: reviews.length, defaultValue: `Based on ${reviews.length} reviews` })}
          </Typography>
        </Paper>

        <Grid container spacing={3}>
          {reviews.map((review) => (
            <Grid item xs={12} md={4} key={review.id}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                    <Avatar sx={{ bgcolor: "primary.main" }}>
                      {review.avatar || review.author[0]}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        {review.author}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {new Date(review.date).toLocaleDateString()}
                      </Typography>
                    </Box>
                  </Box>
                  <Rating value={review.rating} readOnly size="small" sx={{ mb: 1 }} />
                  <Typography variant="body2" color="text.secondary">
                    {review.reviewBody}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default ReviewSection;
