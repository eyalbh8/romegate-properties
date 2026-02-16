import React from "react";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LeadCaptureSection from "../components/LeadCaptureSection";
import Services from "../components/Services";
import UniqueSection from "../components/UniqueSection";
import ErasmusSection from "../components/ErasmusSection";
import Properties from "../components/Properties";
import ReviewSection from "../components/ReviewSection";
import StatsSection from "../components/StatsSection";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import FAQ from "../components/FAQ";
import SEOHead from "../components/SEOHead";

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead />
      <Navbar />
      <Breadcrumb items={[{ label: t("common.home") }]} />
      <Box id="main-content" component="main">
        <Hero />
        <LeadCaptureSection />
        <Services />
        <UniqueSection />
        <ErasmusSection />
        <Properties />
        <ReviewSection />
        <StatsSection />
        <Blog />
        <FAQ />
        <Contact />
      </Box>
      <Footer />
    </>
  );
};

export default HomePage;
