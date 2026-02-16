import React, { useEffect, Suspense, lazy } from "react";
import { Routes, Route, Navigate, useParams, Outlet } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, CircularProgress } from "@mui/material";
import theme from "./theme";
import i18n from "./i18n";
import WhatsAppFloat from "./components/WhatsAppFloat";
import CookieConsent from "./components/CookieConsent";

// Lazy load pages for better performance
const HomePage = lazy(() => import("./pages/HomePage"));
const PropertiesPage = lazy(() => import("./pages/PropertiesPage"));
const PropertyDetailPage = lazy(() => import("./pages/PropertyDetailPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const ServiceDetailPage = lazy(() => import("./pages/ServiceDetailPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));
const NeighborhoodPage = lazy(() => import("./pages/NeighborhoodPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

// Loading fallback component
const LoadingFallback: React.FC = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "60vh",
    }}
  >
    <CircularProgress />
  </Box>
);

// Language Route Wrapper - handles language changes and provides nested routes
const LanguageRoute: React.FC = () => {
  const { lang } = useParams<{ lang: string }>();

  useEffect(() => {
    if (lang && ["en", "it", "he"].includes(lang)) {
      i18n.changeLanguage(lang);
    }
  }, [lang]);

  // Validate language - redirect if invalid
  if (!lang || !["en", "it", "he"].includes(lang)) {
    return <Navigate to="/en" replace />;
  }

  // Render nested routes
  return <Outlet />;
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <WhatsAppFloat />
        <CookieConsent />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            {/* Root redirect to default language */}
            <Route
              path="/"
              element={<Navigate to={`/${i18n.language || "en"}`} replace />}
            />

            {/* Language-based routes */}
            <Route path="/:lang" element={<LanguageRoute />}>
              <Route index element={<HomePage />} />
              <Route path="properties" element={<PropertiesPage />} />
              <Route path="properties/:id/:slug" element={<PropertyDetailPage />} />
              <Route path="services" element={<ServicesPage />} />
              <Route path="services/:slug" element={<ServiceDetailPage />} />
              <Route path="blog" element={<BlogPage />} />
              <Route path="blog/:slug" element={<BlogPostPage />} />
              <Route path="neighborhoods/:slug" element={<NeighborhoodPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>

            {/* Catch-all redirect */}
            <Route path="*" element={<Navigate to="/en" replace />} />
          </Routes>
        </Suspense>
      </Box>
    </ThemeProvider>
  );
};

export default App;
