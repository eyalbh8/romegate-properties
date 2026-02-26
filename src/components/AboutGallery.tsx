import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { aboutMedia } from "../data/aboutMedia";

export type GallerySectionKey = "about" | "home";

interface AboutGalleryProps {
  /** i18n key prefix and optional image set: "about" or "home". Default "about". */
  sectionKey?: GallerySectionKey;
}

const AboutGallery: React.FC<AboutGalleryProps> = ({ sectionKey = "about" }) => {
  const { t } = useTranslation();
  const images =
    sectionKey === "home" && aboutMedia.home?.gallery
      ? aboutMedia.home.gallery
      : aboutMedia.gallery;

  return (
    <Box
      component="section"
      aria-label={t(`${sectionKey}.gallery.title`)}
      sx={{
        py: 8,
        backgroundColor: "background.paper",
        borderTop: "1px solid",
        borderColor: "divider",
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
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ textAlign: "center", mb: 4 }}
          >
            {t(`${sectionKey}.gallery.title`)}
          </Typography>
        </motion.div>
        <Grid container spacing={3}>
          {images.map((src, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                style={{ height: "100%" }}
              >
                <Box
                  component="img"
                  src={src}
                  alt={`${t(`${sectionKey}.gallery.altPrefix`)} ${index + 1}`}
                  sx={{
                    width: "100%",
                    height: 280,
                    objectFit: "cover",
                    borderRadius: 2,
                    boxShadow: 2,
                  }}
                />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutGallery;
