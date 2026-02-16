import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Grid,
  Chip,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  CircularProgress,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import EuroIcon from "@mui/icons-material/Euro";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import Contact from "../components/Contact";
import { useProperties, resolvePropertyTitle, resolvePropertyDescription } from "../context/PropertiesContext";

const PropertyDetailPage: React.FC = () => {
  const { slug, id } = useParams<{ slug: string; id: string }>();
  const { t, i18n } = useTranslation();
  const { properties, loading, getPropertyBySlug } = useProperties();
  const currentLang = i18n.language || "en";
  const baseUrl = "https://vero.it";

  const property = getPropertyBySlug(slug || "");

  if (loading) {
    return (
      <>
        <Navbar />
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "60vh" }}>
          <CircularProgress />
        </Box>
        <Footer />
      </>
    );
  }

  if (!property || property.id.toString() !== id) {
    return <Navigate to={`/${currentLang}/properties`} replace />;
  }

  const title = resolvePropertyTitle(property, currentLang, t);
  const defaultDesc = `${title} in ${property.location}. ${property.bedrooms} bedrooms, ${property.bathrooms} bathrooms, ${property.area}m². ${property.type === "rent" ? "For rent" : "For sale"}.`;
  const description = resolvePropertyDescription(property, currentLang, t, defaultDesc);

  const formatPrice = (price: number, type: string): string => {
    if (type === "sale") {
      return `€${price.toLocaleString()}`;
    }
    return `€${price}/${t("common.month")}`;
  };

  const relatedProperties = properties
    .filter(
      (p) =>
        p.id !== property.id &&
        (p.neighborhood === property.neighborhood || p.type === property.type)
    )
    .slice(0, 3);

  // Schema markup
  const propertySchema: any = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: title,
    description: description,
    image: property.images || [property.image],
    offers: {
      "@type": "Offer",
      price: property.price,
      priceCurrency: "EUR",
      availability: property.available
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      url: `${baseUrl}/${currentLang}/properties/${property.id}/${property.slug}`,
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: property.price,
        priceCurrency: "EUR",
        unitCode: property.type === "rent" ? "MON" : "C62",
      },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: property.neighborhood,
      addressRegion: "Lazio",
      addressCountry: "IT",
    },
  };

  if (property.coordinates) {
    propertySchema.geo = {
      "@type": "GeoCoordinates",
      latitude: property.coordinates.lat,
      longitude: property.coordinates.lng,
    };
  }

  return (
    <>
      <Helmet>
        <title>{title} | Vero Properties</title>
        <meta name="description" content={description} />
        <link
          rel="canonical"
          href={`${baseUrl}/${currentLang}/properties/${property.id}/${property.slug}`}
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={property.image} />
        <meta property="og:type" content="product" />
        <script type="application/ld+json">
          {JSON.stringify(propertySchema)}
        </script>
      </Helmet>

      <Navbar />
      <Breadcrumb
        items={[
          { label: t("properties.title"), href: `/${currentLang}/properties` },
          { label: title },
        ]}
      />

      <Box component="article" sx={{ py: 4, backgroundColor: "background.paper" }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Grid container spacing={4}>
              {/* Main Image */}
              <Grid item xs={12}>
                <Box
                  component="img"
                  src={property.image}
                  alt={title}
                  sx={{
                    width: "100%",
                    height: { xs: 300, md: 500 },
                    objectFit: "cover",
                    borderRadius: 2,
                  }}
                />
              </Grid>

              {/* Property Details */}
              <Grid item xs={12} md={8}>
                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                    <Chip
                      label={
                        property.type === "rent"
                          ? t("properties.forRent")
                          : t("properties.forSale")
                      }
                      color={property.type === "rent" ? "primary" : "secondary"}
                    />
                    {property.available && (
                      <Chip
                        label={t("properties.available")}
                        color="success"
                        size="small"
                      />
                    )}
                  </Box>

                  <Typography variant="h1" component="h1" sx={{ fontSize: { xs: "2rem", md: "3rem" }, mb: 2 }}>
                    {title}
                  </Typography>

                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <LocationOnIcon sx={{ mr: 1, color: "text.secondary" }} />
                    <Typography variant="h6" color="text.secondary">
                      {property.location}
                    </Typography>
                  </Box>

                  <Typography
                    variant="h4"
                    color="primary"
                    fontWeight="bold"
                    sx={{ mb: 3 }}
                  >
                    {formatPrice(property.price, property.type)}
                  </Typography>
                </Box>

                {/* Key Features */}
                <Paper sx={{ p: 3, mb: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={6} sm={3}>
                      <Box sx={{ textAlign: "center" }}>
                        <BedIcon sx={{ fontSize: 40, color: "primary.main", mb: 1 }} />
                        <Typography variant="body2" color="text.secondary">
                          {t("properties.bedrooms")}
                        </Typography>
                        <Typography variant="h6">{property.bedrooms}</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                      <Box sx={{ textAlign: "center" }}>
                        <BathtubIcon sx={{ fontSize: 40, color: "primary.main", mb: 1 }} />
                        <Typography variant="body2" color="text.secondary">
                          {t("properties.bathrooms")}
                        </Typography>
                        <Typography variant="h6">{property.bathrooms}</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                      <Box sx={{ textAlign: "center" }}>
                        <SquareFootIcon sx={{ fontSize: 40, color: "primary.main", mb: 1 }} />
                        <Typography variant="body2" color="text.secondary">
                          {t("properties.area")}
                        </Typography>
                        <Typography variant="h6">{property.area} m²</Typography>
                      </Box>
                    </Grid>
                    {property.floor && (
                      <Grid item xs={6} sm={3}>
                        <Box sx={{ textAlign: "center" }}>
                          <Typography variant="body2" color="text.secondary">
                            {t("properties.floor")}
                          </Typography>
                          <Typography variant="h6">{property.floor}</Typography>
                        </Box>
                      </Grid>
                    )}
                  </Grid>
                </Paper>

                {/* Description */}
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {t("properties.description")}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    {description}
                  </Typography>
                </Box>

                {/* Amenities */}
                {property.amenities && property.amenities.length > 0 && (
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                      {t("properties.amenities")}
                    </Typography>
                    <List>
                      {property.amenities.map((amenity, index) => (
                        <ListItem key={index}>
                          <ListItemIcon>
                            <CheckCircleIcon color="success" />
                          </ListItemIcon>
                          <ListItemText
                            primary={t(`properties.amenityTypes.${amenity}`, {
                              defaultValue: amenity.replace(/_/g, " "),
                            })}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                )}

                {/* Transport Links */}
                {property.transportLinks && property.transportLinks.length > 0 && (
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                      {t("properties.transport")}
                    </Typography>
                    <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                      {property.transportLinks.map((link, index) => (
                        <Chip key={index} label={link} variant="outlined" />
                      ))}
                    </Box>
                  </Box>
                )}
              </Grid>

              {/* Sidebar */}
              <Grid item xs={12} md={4}>
                <Card sx={{ position: "sticky", top: 20 }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {t("properties.propertyDetails")}
                    </Typography>

                    {property.availableFrom && (
                      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                        <CalendarTodayIcon sx={{ mr: 1, color: "text.secondary" }} />
                        <Box>
                          <Typography variant="body2" color="text.secondary">
                            {t("properties.availableFrom")}
                          </Typography>
                          <Typography variant="body1">
                            {property.availableFrom}
                          </Typography>
                        </Box>
                      </Box>
                    )}

                    {property.deposit && (
                      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                        <EuroIcon sx={{ mr: 1, color: "text.secondary" }} />
                        <Box>
                          <Typography variant="body2" color="text.secondary">
                            {t("properties.deposit")}
                          </Typography>
                          <Typography variant="body1">€{property.deposit}</Typography>
                        </Box>
                      </Box>
                    )}

                    {property.minimumStay && (
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="body2" color="text.secondary">
                          {t("properties.minimumStay")}
                        </Typography>
                        <Typography variant="body1">{property.minimumStay}</Typography>
                      </Box>
                    )}

                    <Button
                      variant="contained"
                      fullWidth
                      sx={{ mt: 2 }}
                      component={Link}
                      to={`/${currentLang}/contact`}
                    >
                      {t("properties.contactUs")}
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            {/* Related Properties */}
            {relatedProperties.length > 0 && (
              <Box sx={{ mt: 6 }}>
                <Typography variant="h4" component="h2" gutterBottom>
                  {t("properties.relatedProperties")}
                </Typography>
                <Grid container spacing={3}>
                  {relatedProperties.map((relProp) => (
                    <Grid item xs={12} sm={6} md={4} key={relProp.id}>
                      <Card>
                        <Box
                          component="img"
                          src={relProp.image}
                          alt={resolvePropertyTitle(relProp, currentLang, t)}
                          sx={{ width: "100%", height: 200, objectFit: "cover" }}
                        />
                        <CardContent>
                          <Typography variant="h6" gutterBottom>
                            {resolvePropertyTitle(relProp, currentLang, t)}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" gutterBottom>
                            {relProp.location}
                          </Typography>
                          <Typography variant="h6" color="primary">
                            {formatPrice(relProp.price, relProp.type)}
                          </Typography>
                          <Button
                            component={Link}
                            to={`/${currentLang}/properties/${relProp.id}/${relProp.slug}`}
                            fullWidth
                            sx={{ mt: 2 }}
                          >
                            {t("properties.viewDetails")}
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

        {/* Contact Section */}
        <Box sx={{ mt: 6 }}>
          <Contact />
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default PropertyDetailPage;
