import React, { useState } from "react";
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
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { properties as propertiesData } from "../data/properties";

const Properties: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterType, setFilterType] = useState<string>("all");

  const properties = propertiesData.map((prop) => ({
    ...prop,
    title: t(prop.titleKey),
  }));

  const filteredProperties = properties.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "all" || property.type === filterType;
    return matchesSearch && matchesType;
  });

  const formatPrice = (price: number, type: string): string => {
    if (type === "sale") {
      return `€${price.toLocaleString()}`;
    }
    return `€${price}/month`;
  };

  return (
    <>
      {/* Product/Offer Schema for each property */}
      {properties.map((property) => {
        // Determine related services based on property type
        const relatedServices = [];
        if (property.type === "sale") {
          relatedServices.push("Property Buying", "Property Selling");
        } else if (property.type === "rent") {
          if (
            property.location.includes("Sapienza") ||
            property.location.includes("San Lorenzo") ||
            property.price < 700
          ) {
            relatedServices.push(
              "Student Accommodation",
              "Property Management"
            );
          } else {
            relatedServices.push("Property Management");
          }
        }

        // Extract neighborhood from location
        const neighborhood = property.location.split(",")[0];

        return (
          <script
            key={`schema-${property.id}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Product",
                name: property.title,
                image: property.image,
                description: `${property.title} located in ${property.location}, Rome. ${property.bedrooms} bedrooms, ${property.bathrooms} bathrooms, ${property.area} m²`,
                keywords: [
                  property.location,
                  property.type === "rent" ? "rental" : "sale",
                  `${property.bedrooms} bedroom`,
                  `${property.area} m²`,
                  "Rome",
                  neighborhood,
                ].join(", "),
                about: relatedServices.map((service) => ({
                  "@type": "Service",
                  name: service,
                })),
                mentions: [
                  {
                    "@type": "Place",
                    name: neighborhood,
                    addressLocality: "Rome",
                    addressRegion: "Lazio",
                    addressCountry: "IT",
                  },
                  {
                    "@type": "City",
                    name: "Rome",
                  },
                ],
                offers: {
                  "@type": "Offer",
                  price: property.price,
                  priceCurrency: "EUR",
                  availability: "https://schema.org/InStock",
                  url: `https://vero.it/#properties?id=${property.id}`,
                  priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    price: property.price,
                    priceCurrency: "EUR",
                    unitCode: property.type === "rent" ? "MON" : "C62",
                  },
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.5",
                  reviewCount: "12",
                },
                dateModified: new Date().toISOString(),
              }),
            }}
          />
        );
      })}
      <Box
        id="properties"
        component="section"
        aria-label="Properties listing"
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
              {t("properties.title")}
            </Typography>
            <Typography
              variant="h6"
              component="p"
              sx={{ textAlign: "center", mb: 6, color: "text.secondary" }}
            >
              {t("properties.subtitle")}
            </Typography>
          </motion.div>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              mb: 4,
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <TextField
              fullWidth
              placeholder={t("properties.searchPlaceholder")}
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchTerm(e.target.value)
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <FormControl sx={{ minWidth: 200 }}>
              <InputLabel>{t("properties.propertyType")}</InputLabel>
              <Select
                value={filterType}
                label={t("properties.propertyType")}
                onChange={(e: SelectChangeEvent<string>) =>
                  setFilterType(e.target.value)
                }
              >
                <MenuItem value="all">{t("properties.allProperties")}</MenuItem>
                <MenuItem value="rent">{t("properties.forRent")}</MenuItem>
                <MenuItem value="sale">{t("properties.forSale")}</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Grid container spacing={4}>
            {filteredProperties.map((property, index) => (
              <Grid item xs={12} sm={6} md={4} key={property.id}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card
                    component="article"
                    data-content-type="property-listing"
                    data-content-category={
                      property.type === "rent" && property.price < 700
                        ? "student-housing"
                        : property.type === "sale" && property.price > 500000
                        ? "luxury"
                        : property.type === "sale"
                        ? "investment"
                        : "residential"
                    }
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: "translateY(-8px) scale(1.02)",
                        boxShadow: 3,
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={property.image}
                      alt={`${property.title} - ${property.bedrooms} bedroom ${
                        property.type === "rent"
                          ? "rental"
                          : "property for sale"
                      } in ${property.location}, Rome. ${
                        property.area
                      } m² with ${property.bathrooms} bathroom${
                        property.bathrooms > 1 ? "s" : ""
                      }. Price: ${formatPrice(property.price, property.type)}`}
                      loading="lazy"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mb: 1,
                        }}
                      >
                        <Chip
                          label={
                            property.type === "rent"
                              ? t("properties.forRent")
                              : t("properties.forSale")
                          }
                          color={
                            property.type === "rent" ? "primary" : "secondary"
                          }
                          size="small"
                        />
                        <Typography
                          variant="h6"
                          color="primary.main"
                          fontWeight="bold"
                        >
                          {formatPrice(property.price, property.type)}
                        </Typography>
                      </Box>
                      <Typography variant="h6" component="h3" gutterBottom>
                        {property.title}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          mb: 2,
                          color: "text.secondary",
                        }}
                      >
                        <LocationOnIcon sx={{ fontSize: 18, mr: 0.5 }} />
                        <Typography variant="body2">
                          {property.location}
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                          }}
                        >
                          <BedIcon
                            sx={{ fontSize: 18, color: "text.secondary" }}
                          />
                          <Typography variant="body2">
                            {property.bedrooms}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                          }}
                        >
                          <BathtubIcon
                            sx={{ fontSize: 18, color: "text.secondary" }}
                          />
                          <Typography variant="body2">
                            {property.bathrooms}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                          }}
                        >
                          <SquareFootIcon
                            sx={{ fontSize: 18, color: "text.secondary" }}
                          />
                          <Typography variant="body2">
                            {property.area} m²
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                    <CardActions sx={{ p: 2, pt: 0 }}>
                      <Button
                        size="small"
                        color="primary"
                        fullWidth
                        component="a"
                        href={`/${i18n.language || "en"}/properties/${property.id}/${property.slug}`}
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href = `/${i18n.language || "en"}/properties/${property.id}/${property.slug}`;
                        }}
                      >
                        {t("properties.viewDetails")}
                      </Button>
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {filteredProperties.length === 0 && (
            <Box sx={{ textAlign: "center", py: 8 }}>
              <Typography variant="h6" color="text.secondary">
                {t("properties.noPropertiesFound")}
              </Typography>
            </Box>
          )}

          <Box sx={{ textAlign: "center", mt: 6 }}>
            <Button variant="outlined" size="large" color="primary">
              {t("properties.viewAllProperties")}
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Properties;
