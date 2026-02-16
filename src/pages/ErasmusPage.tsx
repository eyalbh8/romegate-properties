import React from "react";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import ErasmusSection from "../components/ErasmusSection";

const ErasmusPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "en";
  const baseUrl = "https://vero.it";

  return (
    <>
      <Helmet>
        <title>{t("erasmusSection.title")} | Vero Properties</title>
        <meta
          name="description"
          content={t("erasmusSection.subtitle", {
            defaultValue:
              "Your home away from home in Italy. Specialized services for Erasmus and international students - find safe, affordable housing near universities.",
          })}
        />
        <link rel="canonical" href={`${baseUrl}/${currentLang}/erasmus`} />
      </Helmet>

      <Navbar />
      <Breadcrumb
        items={[{ label: t("navbar.erasmus") }]}
      />

      <Box sx={{ minHeight: "60vh" }}>
        <ErasmusSection />
      </Box>

      <Footer />
    </>
  );
};

export default ErasmusPage;
