import React from "react";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutVideo from "../components/AboutVideo";
import LeadCaptureSection from "../components/LeadCaptureSection";
import Services from "../components/Services";
import AboutGallery from "../components/AboutGallery";
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
      <Breadcrumb items={[]} />
      <Box id="main-content" component="main">
        <Hero />
        <AboutVideo sectionKey="home" />
        <LeadCaptureSection />
        <Services />
        <AboutGallery sectionKey="home" />
        <UniqueSection />
        <ErasmusSection />
        <Properties />
        <ReviewSection />
        <StatsSection animated />
        <Blog />
        <FAQ />
        <Contact />
      </Box>
      <Footer />
    </>
  );
};

export default HomePage;
