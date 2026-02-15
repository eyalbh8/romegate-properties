import React from "react";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import Services from "../components/Services";

const ServicesPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "en";
  const baseUrl = "https://romegate.it";

  return (
    <>
      <Helmet>
        <title>{t("services.title")} | Romegate Properties</title>
        <meta
          name="description"
          content={t("services.metaDescription", {
            defaultValue:
              "Comprehensive real estate services in Rome: property buying, selling, management, and student accommodation. Expert guidance for all your property needs.",
          })}
        />
        <link rel="canonical" href={`${baseUrl}/${currentLang}/services`} />
      </Helmet>

      <Navbar />
      <Breadcrumb
        items={[
          { label: t("common.home"), href: `/${currentLang}` },
          { label: t("services.title") },
        ]}
      />

      <Box sx={{ minHeight: "60vh" }}>
        <Services />
      </Box>

      <Footer />
    </>
  );
};

export default ServicesPage;
