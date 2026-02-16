import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Step,
  Stepper,
  StepLabel,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import Contact from "../components/Contact";
import { getServiceBySlug } from "../data/services";

const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "en";
  const baseUrl = "https://vero.it";

  const service = getServiceBySlug(slug || "");

  if (!service) {
    return <Navigate to={`/${currentLang}/services`} replace />;
  }

  const title = t(service.titleKey);
  const description = t(service.descriptionKey);
  const fullDescription = t(service.fullDescriptionKey, {
    defaultValue: description,
  });

  return (
    <>
      <Helmet>
        <title>{title} | Vero Properties</title>
        <meta name="description" content={description} />
        <link
          rel="canonical"
          href={`${baseUrl}/${currentLang}/services/${service.slug}`}
        />
      </Helmet>

      <Navbar />
      <Breadcrumb
        items={[
          { label: t("services.title"), href: `/${currentLang}/services` },
          { label: title },
        ]}
      />

      <Box component="article" sx={{ py: 6, backgroundColor: "background.paper" }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{ fontSize: { xs: "2rem", md: "3rem" }, mb: 3, textAlign: "center" }}
            >
              {title}
            </Typography>

            <Typography
              variant="h5"
              sx={{ textAlign: "center", mb: 6, color: "text.secondary" }}
            >
              {description}
            </Typography>

            <Grid container spacing={4}>
              <Grid item xs={12} md={8}>
                <Paper sx={{ p: 4, mb: 4 }}>
                  <Typography variant="h4" gutterBottom>
                    {t("services.overview")}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {fullDescription}
                  </Typography>
                </Paper>

                {service.processSteps && service.processSteps.length > 0 && (
                  <Paper sx={{ p: 4, mb: 4 }}>
                    <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
                      {t("services.howItWorks")}
                    </Typography>
                    <Stepper orientation="vertical">
                      {service.processSteps.map((step, index) => (
                        <Step key={index} active>
                          <StepLabel>
                            <Typography variant="h6">
                              {t(step.titleKey)}
                            </Typography>
                          </StepLabel>
                          <Box sx={{ ml: 4, mt: 1, mb: 3 }}>
                            <Typography variant="body1" color="text.secondary">
                              {t(step.descriptionKey)}
                            </Typography>
                          </Box>
                        </Step>
                      ))}
                    </Stepper>
                  </Paper>
                )}

                {service.benefitKeys && service.benefitKeys.length > 0 && (
                  <Paper sx={{ p: 4 }}>
                    <Typography variant="h4" gutterBottom>
                      {t("services.benefits")}
                    </Typography>
                    <List>
                      {service.benefitKeys.map((key, index) => (
                        <ListItem key={index}>
                          <ListItemIcon>
                            <CheckCircleIcon color="success" />
                          </ListItemIcon>
                          <ListItemText primary={t(key)} />
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                )}
              </Grid>

              <Grid item xs={12} md={4}>
                <Card sx={{ position: "sticky", top: 20 }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {t("services.getStarted")}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                      {t("services.contactForMore")}
                    </Typography>
                    {service.pricingKey && (
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                        {t(service.pricingKey)}
                      </Typography>
                    )}
                    <Button
                      variant="contained"
                      fullWidth
                      component={Link}
                      to={`/${currentLang}/contact`}
                      sx={{ mb: 2 }}
                    >
                      {t("services.contactUs")}
                    </Button>
                    <Button
                      variant="outlined"
                      fullWidth
                      component={Link}
                      to={`/${currentLang}/properties`}
                    >
                      {t("services.browseProperties")}
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </motion.div>
        </Container>

        <Box sx={{ mt: 6 }}>
          <Contact />
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default ServiceDetailPage;
