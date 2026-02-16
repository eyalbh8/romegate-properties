import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SchoolIcon from "@mui/icons-material/School";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import { getNeighborhoodBySlug } from "../data/neighborhoods";
import { useProperties } from "../context/PropertiesContext";

const NeighborhoodPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();
  const { getPropertiesByNeighborhood } = useProperties();
  const currentLang = i18n.language || "en";
  const baseUrl = "https://vero.it";

  const neighborhood = getNeighborhoodBySlug(slug || "");

  if (!neighborhood) {
    return <Navigate to={`/${currentLang}`} replace />;
  }

  const name = t(neighborhood.nameKey);
  const description = t(neighborhood.descriptionKey);
  const fullDescription = t(neighborhood.fullDescriptionKey, {
    defaultValue: description,
  });

  const properties = getPropertiesByNeighborhood(neighborhood.slug);

  const neighborhoodSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: name,
    description: fullDescription,
    address: {
      "@type": "PostalAddress",
      addressLocality: name,
      addressRegion: "Lazio",
      addressCountry: "IT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: neighborhood.coordinates.lat,
      longitude: neighborhood.coordinates.lng,
    },
  };

  return (
    <>
      <Helmet>
        <title>
          {name} - {t("neighborhoods.title")} | Vero Properties
        </title>
        <meta name="description" content={fullDescription} />
        <link
          rel="canonical"
          href={`${baseUrl}/${currentLang}/neighborhoods/${neighborhood.slug}`}
        />
        <script type="application/ld+json">
          {JSON.stringify(neighborhoodSchema)}
        </script>
      </Helmet>

      <Navbar />
      <Breadcrumb
        items={[
          { label: t("neighborhoods.title") },
          { label: name },
        ]}
      />

      <Box component="article" sx={{ py: 6, backgroundColor: "background.paper" }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box
              component="img"
              src={neighborhood.image}
              alt={name}
              sx={{
                width: "100%",
                height: { xs: 250, md: 400 },
                objectFit: "cover",
                borderRadius: 2,
                mb: 4,
              }}
            />

            <Typography
              variant="h1"
              component="h1"
              sx={{ fontSize: { xs: "2rem", md: "3rem" }, mb: 2 }}
            >
              {name}
            </Typography>

            <Box sx={{ display: "flex", gap: 1, mb: 4, flexWrap: "wrap" }}>
              {neighborhood.studentFriendly && (
                <Chip label={t("neighborhoods.studentFriendly")} color="primary" />
              )}
              <Chip label={`${t("neighborhoods.safety")}: ${neighborhood.safety}`} />
              <Chip label={`${t("neighborhoods.nightlife")}: ${neighborhood.nightlife}`} />
            </Box>

            <Typography variant="body1" sx={{ fontSize: "1.125rem", mb: 4 }}>
              {fullDescription}
            </Typography>

            <Grid container spacing={4}>
              <Grid item xs={12} md={8}>
                <Paper sx={{ p: 3, mb: 3 }}>
                  <Typography variant="h5" gutterBottom>
                    {t("neighborhoods.highlights")}
                  </Typography>
                  <List>
                    {neighborhood.highlights.map((highlight, index) => (
                      <ListItem key={index}>
                        <ListItemText primary={highlight} />
                      </ListItem>
                    ))}
                  </List>
                </Paper>

                {neighborhood.universities.length > 0 && (
                  <Paper sx={{ p: 3, mb: 3 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                      <SchoolIcon color="primary" />
                      <Typography variant="h5">
                        {t("neighborhoods.nearbyUniversities")}
                      </Typography>
                    </Box>
                    <List>
                      {neighborhood.universities.map((uni, index) => (
                        <ListItem key={index}>
                          <ListItemText primary={uni} />
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                )}

                <Paper sx={{ p: 3, mb: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                    <DirectionsBusIcon color="primary" />
                    <Typography variant="h5">
                      {t("neighborhoods.transport")}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                    {neighborhood.transportLinks.map((link, index) => (
                      <Chip key={index} label={link} variant="outlined" />
                    ))}
                  </Box>
                </Paper>

                {neighborhood.attractions.length > 0 && (
                  <Paper sx={{ p: 3 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                      <LocationOnIcon color="primary" />
                      <Typography variant="h5">
                        {t("neighborhoods.attractions")}
                      </Typography>
                    </Box>
                    <List>
                      {neighborhood.attractions.map((attraction, index) => (
                        <ListItem key={index}>
                          <ListItemText primary={attraction} />
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                )}
              </Grid>

              <Grid item xs={12} md={4}>
                <Card sx={{ position: "sticky", top: 20, mb: 3 }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {t("neighborhoods.averageRent")}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="body2" color="text.secondary">
                        {t("neighborhoods.studio")}
                      </Typography>
                      <Typography variant="h6">
                        €{neighborhood.averageRent.studio}/month
                      </Typography>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="body2" color="text.secondary">
                        {t("neighborhoods.oneBedroom")}
                      </Typography>
                      <Typography variant="h6">
                        €{neighborhood.averageRent.oneBedroom}/month
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        {t("neighborhoods.twoBedroom")}
                      </Typography>
                      <Typography variant="h6">
                        €{neighborhood.averageRent.twoBedroom}/month
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>

                {neighborhood.bestFor.length > 0 && (
                  <Card>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {t("neighborhoods.bestFor")}
                      </Typography>
                      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                        {neighborhood.bestFor.map((item, index) => (
                          <Chip key={index} label={item} size="small" />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                )}
              </Grid>
            </Grid>

            {properties.length > 0 && (
              <Box sx={{ mt: 6 }}>
                <Typography variant="h4" gutterBottom>
                  {t("neighborhoods.availableProperties")}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                  {properties.length} {t("neighborhoods.propertiesAvailable")}
                </Typography>
                <Link to={`/${currentLang}/properties`}>
                  <Typography color="primary">
                    {t("neighborhoods.viewAllProperties")} →
                  </Typography>
                </Link>
              </Box>
            )}
          </motion.div>
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default NeighborhoodPage;
