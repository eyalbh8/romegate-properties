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

interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  type: string;
  image: string;
}

const Properties: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterType, setFilterType] = useState<string>("all");

  const properties: Property[] = [
    {
      id: 1,
      title: "Modern Apartment in Trastevere",
      location: "Trastevere, Rome",
      price: 1200,
      bedrooms: 2,
      bathrooms: 1,
      area: 75,
      type: "rent",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
    },
    {
      id: 2,
      title: "Luxury Villa near Colosseum",
      location: "Monti, Rome",
      price: 450000,
      bedrooms: 4,
      bathrooms: 3,
      area: 200,
      type: "sale",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    },
    {
      id: 3,
      title: "Student Studio near Sapienza",
      location: "San Lorenzo, Rome",
      price: 650,
      bedrooms: 1,
      bathrooms: 1,
      area: 35,
      type: "rent",
      image:
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800",
    },
    {
      id: 4,
      title: "Cozy Apartment in Centro Storico",
      location: "Centro Storico, Rome",
      price: 1800,
      bedrooms: 3,
      bathrooms: 2,
      area: 100,
      type: "rent",
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
    },
    {
      id: 5,
      title: "Elegant Penthouse with Terrace",
      location: "Prati, Rome",
      price: 680000,
      bedrooms: 3,
      bathrooms: 2,
      area: 150,
      type: "sale",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    },
    {
      id: 6,
      title: "Shared Student Room",
      location: "Testaccio, Rome",
      price: 450,
      bedrooms: 1,
      bathrooms: 1,
      area: 20,
      type: "rent",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
    },
  ];

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
      {properties.map((property) => (
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
              offers: {
                "@type": "Offer",
                price: property.price,
                priceCurrency: "EUR",
                availability: "https://schema.org/InStock",
                url: `https://romegate.it/#properties?id=${property.id}`,
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
            }),
          }}
        />
      ))}
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
              Featured Properties
            </Typography>
            <Typography
              variant="h6"
              component="p"
              sx={{ textAlign: "center", mb: 6, color: "text.secondary" }}
            >
              Discover your perfect home in Rome
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
              placeholder="Search by location or property name..."
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
              <InputLabel>Property Type</InputLabel>
              <Select
                value={filterType}
                label="Property Type"
                onChange={(e: SelectChangeEvent<string>) =>
                  setFilterType(e.target.value)
                }
              >
                <MenuItem value="all">All Properties</MenuItem>
                <MenuItem value="rent">For Rent</MenuItem>
                <MenuItem value="sale">For Sale</MenuItem>
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
                    sx={{
                      height: "100%",
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
                      image={property.image}
                      alt={`${property.title} - ${property.location}, Rome`}
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
                            property.type === "rent" ? "For Rent" : "For Sale"
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
                      <Button size="small" color="primary" fullWidth>
                        View Details
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
                No properties found matching your criteria.
              </Typography>
            </Box>
          )}

          <Box sx={{ textAlign: "center", mt: 6 }}>
            <Button variant="outlined" size="large" color="primary">
              View All Properties
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Properties;
