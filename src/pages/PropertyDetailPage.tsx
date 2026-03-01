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
  Paper,
  CircularProgress,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import LandscapeIcon from "@mui/icons-material/Landscape";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import EuroIcon from "@mui/icons-material/Euro";
import {
  RiDropFill,
  RiPlantFill,
  RiParkingBoxFill,
  RiCelsiusFill,
  RiFireFill,
  RiSunFill,
  RiWifiFill,
  RiHomeSmileFill,
  RiBuilding2Fill,
  RiArrowUpDownFill,
  RiBookReadFill,
  RiRestaurant2Fill,
  RiRefreshFill,
  RiCupFill,
} from "@remixicon/react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import Contact from "../components/Contact";
import { useProperties, resolvePropertyTitle, resolvePropertyDescription } from "../context/PropertiesContext";
import ImageCarousel, { type ImageCarouselProps } from "../components/ImageCarousel";

/** Map amenity key to Remix Icon component; fallback to CheckCircleIcon if unknown */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AMENITY_ICON_MAP: Record<string, React.ComponentType<any>> = {
  swimming_pool: RiDropFill,
  garden: RiPlantFill,
  parking: RiParkingBoxFill,
  air_conditioning: RiCelsiusFill,
  heating: RiFireFill,
  patio: RiSunFill,
  bbq_grill: RiFireFill,
  wifi: RiWifiFill,
  balcony: RiHomeSmileFill,
  terrace: RiBuilding2Fill,
  elevator: RiArrowUpDownFill,
  desk: RiBookReadFill,
  shared_kitchen: RiRestaurant2Fill,
  washing_machine: RiRefreshFill,
  dishwasher: RiCupFill,
};

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
  const transportLinksToShow = property.transportLinksLocalized?.[currentLang] ?? property.transportLinks ?? [];
  /** Plain description for meta/SEO (strip ## section headers) */
  const descriptionPlain = description.replace(/\n## [^\n]+/g, "\n").replace(/\n{2,}/g, "\n\n").trim();

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
    description: descriptionPlain,
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
        <meta name="description" content={descriptionPlain} />
        <link
          rel="canonical"
          href={`${baseUrl}/${currentLang}/properties/${property.id}/${property.slug}`}
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={descriptionPlain} />
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
                <ImageCarousel
                  images={property.images ?? [property.image]}
                  alt={title}
                  height={{ xs: 300, md: 500 } as ImageCarouselProps["height"]}
                  showDots
                  showCaption
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
                          {t("properties.builtUpArea")}
                        </Typography>
                        <Typography variant="h6">{property.area} m²</Typography>
                      </Box>
                    </Grid>
                    {property.landArea != null && (
                      <Grid item xs={6} sm={3}>
                        <Box sx={{ textAlign: "center" }}>
                          <LandscapeIcon sx={{ fontSize: 40, color: "primary.main", mb: 1 }} />
                          <Typography variant="body2" color="text.secondary">
                            {t("properties.land")}
                          </Typography>
                          <Typography variant="h6">
                            {property.landArea.toLocaleString()} m²
                          </Typography>
                        </Box>
                      </Grid>
                    )}
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
                  {(() => {
                    const parts = description.split(/\n## /);
                    const intro = parts[0]?.trim();
                    return (
                      <>
                        {intro ? (
                          <Typography variant="body1" color="text.secondary" paragraph>
                            {intro.split(/\n\n/).map((p, i) => (
                              <React.Fragment key={i}>
                                {i > 0 && <><br /><br /></>}
                                {p}
                              </React.Fragment>
                            ))}
                          </Typography>
                        ) : null}
                        {parts.slice(1).map((block, i) => {
                          const newline = block.indexOf("\n");
                          const sectionTitle = newline >= 0 ? block.slice(0, newline).trim() : block.trim();
                          const body = newline >= 0 ? block.slice(newline + 1).trim() : "";
                          return (
                            <Box key={i} sx={{ mb: 2 }}>
                              <Typography variant="subtitle1" component="h3" fontWeight={600} sx={{ mt: 2, mb: 1 }} color="text.primary">
                                {sectionTitle}
                              </Typography>
                              <Typography variant="body1" color="text.secondary" paragraph>
                                {body.split(/\n\n/).map((p, j) => (
                                  <React.Fragment key={j}>
                                    {j > 0 && <><br /><br /></>}
                                    {p}
                                  </React.Fragment>
                                ))}
                              </Typography>
                            </Box>
                          );
                        })}
                      </>
                    );
                  })()}
                </Box>

                {/* Amenities */}
                {property.amenities && property.amenities.length > 0 && (
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                      {t("properties.amenities")}
                    </Typography>
                    <List disablePadding>
                      {property.amenities.map((amenity, index) => {
                        const AmenityIcon = AMENITY_ICON_MAP[amenity] ?? CheckCircleIcon;
                        const isRemix = AmenityIcon !== CheckCircleIcon;
                        return (
                          <ListItem
                            key={index}
                            disableGutters
                            sx={{
                              alignItems: "center",
                              gap: 0.75,
                              py: 0.25,
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: 28,
                                flexShrink: 0,
                                color: isRemix ? "success.main" : undefined,
                              }}
                            >
                              {isRemix ? (
                                <AmenityIcon size={22} color="currentColor" />
                              ) : (
                                <CheckCircleIcon color="success" fontSize="small" />
                              )}
                            </Box>
                            <Typography variant="body2" component="span">
                              {t(`properties.amenityTypes.${amenity}`, {
                                defaultValue: amenity.replace(/_/g, " "),
                              })}
                            </Typography>
                          </ListItem>
                        );
                      })}
                    </List>
                  </Box>
                )}

                {/* Transport Links */}
                {transportLinksToShow.length > 0 && (
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                      {t("properties.transport")}
                    </Typography>
                    <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                      {transportLinksToShow.map((link, index) => (
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
                        <ImageCarousel
                          images={relProp.images ?? [relProp.image]}
                          alt={resolvePropertyTitle(relProp, currentLang, t)}
                          height={200}
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
