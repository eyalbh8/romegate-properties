import React, { useEffect } from "react";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import theme from "./theme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import UniqueSection from "./components/UniqueSection";
import ErasmusSection from "./components/ErasmusSection";
import Properties from "./components/Properties";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Breadcrumb from "./components/Breadcrumb";
import FAQ from "./components/FAQ";
import SEOHead from "./components/SEOHead";
import i18n from "./i18n";

const MainContent: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <SEOHead />
      <Navbar />
      <Breadcrumb items={[{ label: t("common.home") }]} />
      <Box id="main-content" component="main">
        <Hero />
        <Services />
        <UniqueSection />
        <ErasmusSection />
        <Properties />
        <Blog />
        <FAQ />
        <Contact />
      </Box>
      <Footer />
    </>
  );
};

const LanguageRoute: React.FC = () => {
  const { lang } = useParams<{ lang: string }>();

  useEffect(() => {
    if (lang && ["en", "it", "he"].includes(lang)) {
      i18n.changeLanguage(lang);
    }
  }, [lang]);

  // Sync language from URL if valid
  if (lang && ["en", "it", "he"].includes(lang)) {
    return <MainContent />;
  }

  return <Navigate to="/en" replace />;
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
        component="main"
      >
        <Routes>
          <Route
            path="/"
            element={<Navigate to={`/${i18n.language || "en"}`} replace />}
          />
          <Route path="/:lang" element={<LanguageRoute />} />
          <Route path="*" element={<Navigate to="/en" replace />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
};

export default App;
