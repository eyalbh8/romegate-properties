import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Stack,
  Chip,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SupportIcon from "@mui/icons-material/Support";
import { motion } from "framer-motion";

interface Testimonial {
  name: string;
  country: string;
  text: string;
  avatar: string;
}

const ErasmusSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Maria González",
      country: "Spain",
      text: "Romegate made finding accommodation in Rome so easy! They understood exactly what I needed as an Erasmus student and found me the perfect place near my university.",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "Thomas Müller",
      country: "Germany",
      text: "The team at Romegate speaks multiple languages and helped me with all the paperwork. I felt supported throughout my entire stay in Rome.",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      name: "Sophie Dubois",
      country: "France",
      text: "As an Erasmus student, I needed flexible lease terms. Romegate found me a great apartment with a semester-based lease. Highly recommend!",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
  ];

  const services = [
    {
      icon: <SchoolIcon sx={{ fontSize: 40 }} />,
      title: "Near Universities",
      description: "Properties within walking distance of major universities",
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 40 }} />,
      title: "Prime Locations",
      description: "Safe neighborhoods with excellent public transport links",
    },
    {
      icon: <AccessTimeIcon sx={{ fontSize: 40 }} />,
      title: "Flexible Leases",
      description: "Semester-based leases that match your study period",
    },
    {
      icon: <SupportIcon sx={{ fontSize: 40 }} />,
      title: "Full Support",
      description: "Help with paperwork, utilities, and settling into Rome",
    },
  ];

  return (
    <Box
      id="erasmus"
      sx={{
        py: 8,
        backgroundColor: "secondary.main",
        color: "white",
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
            sx={{ textAlign: "center", mb: 2, color: "white" }}
          >
            Specialized Services for Erasmus Students
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              textAlign: "center",
              mb: 6,
              color: "rgba(255, 255, 255, 0.9)",
            }}
          >
            Your home away from home in the Eternal City
          </Typography>
        </motion.div>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: "100%",
                    textAlign: "center",
                    p: 3,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    color: "white",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <Box sx={{ mb: 2, color: "white" }}>{service.icon}</Box>
                  <Typography variant="h6" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "rgba(255, 255, 255, 0.9)" }}
                  >
                    {service.description}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h4"
            component="h3"
            sx={{ textAlign: "center", mb: 4, color: "white" }}
          >
            What Our Students Say
          </Typography>
        </motion.div>
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Card
                  sx={{
                    height: "100%",
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                  }}
                >
                  <CardContent>
                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      sx={{ mb: 2 }}
                    >
                      <Avatar
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        sx={{ width: 56, height: 56 }}
                      />
                      <Box>
                        <Typography variant="h6">{testimonial.name}</Typography>
                        <Chip
                          label={testimonial.country}
                          size="small"
                          color="secondary"
                          sx={{ mt: 0.5 }}
                        />
                      </Box>
                    </Stack>
                    <Typography variant="body1" color="text.secondary">
                      "{testimonial.text}"
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ErasmusSection;
