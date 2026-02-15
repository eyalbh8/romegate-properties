import React from "react";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import Contact from "../components/Contact";

const ContactPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "en";
  const baseUrl = "https://vero.it";

  return (
    <>
      <Helmet>
        <title>{t("common.contact")} | Vero Properties</title>
        <meta
          name="description"
          content={t("contact.metaDescription", {
            defaultValue:
              "Get in touch with Vero Properties. Contact us for property inquiries, viewings, and expert advice on real estate in Italy.",
          })}
        />
        <link rel="canonical" href={`${baseUrl}/${currentLang}/contact`} />
      </Helmet>

      <Navbar />
      <Breadcrumb
        items={[
          { label: t("common.home"), href: `/${currentLang}` },
          { label: t("common.contact") },
        ]}
      />

      <Box sx={{ minHeight: "60vh", py: 4 }}>
        <Contact />
      </Box>

      <Footer />
    </>
  );
};

export default ContactPage;
