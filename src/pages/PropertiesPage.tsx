import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
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
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import { properties } from "../data/properties";

const PropertiesPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get("search") || "";

  const [searchTerm, setSearchTerm] = useState<string>(initialSearch);
  const [filterType, setFilterType] = useState<string>("all");

  const filteredProperties = properties.filter((property) => {
    const title = t(property.titleKey);
    const matchesSearch =
      title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "all" || property.type === filterType;
    return matchesSearch && matchesType;
  });

  const formatPrice = (price: number, type: string): string => {
    if (type === "sale") {
      return `€${price.toLocaleString()}`;
    }
    return `€${price}/${t("common.month")}`;
  };

  const currentLang = i18n.language || "en";
  const baseUrl = "https://romegate.it";

  return (
    <>
      <Helmet>
        <title>{t("properties.title")} | Romegate Properties</title>
        <meta
          name="description"
          content={t("properties.metaDescription", {
            defaultValue:
              "Browse available properties for rent and sale in Rome. Find apartments, studios, and luxury properties in Trastevere, San Lorenzo, Centro Storico, and more.",
          })}
        />
        <link
          rel="canonical"
          href={`${baseUrl}/${currentLang}/properties`}
        />
      </Helmet>

      <Navbar />
      <Breadcrumb
        items={[
          { label: t("common.home"), href: `/${currentLang}` },
          { label: t("properties.title") },
        ]}
      />

      <Box
        component="section"
        sx={{
          py: 8,
          backgroundColor: "background.paper",
          minHeight: "60vh",
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              sx={{ textAlign: "center", mb: 2, fontSize: { xs: "2rem", md: "3rem" } }}
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
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card
                    component="article"
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: 6,
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={property.image}
                      alt={t(property.titleKey)}
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
                      <Typography variant="h6" component="h2" gutterBottom>
                        {t(property.titleKey)}
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
                        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                          <BedIcon sx={{ fontSize: 18, color: "text.secondary" }} />
                          <Typography variant="body2">{property.bedrooms}</Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                          <BathtubIcon sx={{ fontSize: 18, color: "text.secondary" }} />
                          <Typography variant="body2">{property.bathrooms}</Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                          <SquareFootIcon sx={{ fontSize: 18, color: "text.secondary" }} />
                          <Typography variant="body2">{property.area} m²</Typography>
                        </Box>
                      </Box>
                    </CardContent>
                    <CardActions sx={{ p: 2, pt: 0 }}>
                      <Button
                        size="small"
                        color="primary"
                        fullWidth
                        component={Link}
                        to={`/${currentLang}/properties/${property.id}/${property.slug}`}
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
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default PropertiesPage;
