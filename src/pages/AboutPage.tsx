import React from "react";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import AboutHero from "../components/AboutHero";
import AboutVideo from "../components/AboutVideo";
import UniqueSection from "../components/UniqueSection";
import AboutGallery from "../components/AboutGallery";
import ErasmusSection from "../components/ErasmusSection";
import StatsSection from "../components/StatsSection";

const AboutPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "en";
  const baseUrl = "https://vero.it";

  return (
    <>
      <Helmet>
        <title>{t("navbar.about")} | Vero Properties</title>
        <meta
          name="description"
          content={t("about.metaDescription", {
            defaultValue:
              "Learn about Vero Properties - Your trusted real estate partner in Italy specializing in property sales, rentals, management, and student accommodation.",
          })}
        />
        <link rel="canonical" href={`${baseUrl}/${currentLang}/about`} />
      </Helmet>

      <Navbar />
      <Breadcrumb items={[{ label: t("navbar.about") }]} />

      <Box sx={{ minHeight: "60vh" }}>
        <AboutHero />
        <AboutVideo />
        <UniqueSection />
        <AboutGallery />
        <ErasmusSection />
        <StatsSection animated />
      </Box>

      <Footer />
    </>
  );
};

export default AboutPage;
