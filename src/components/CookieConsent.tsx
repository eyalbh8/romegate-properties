import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Link } from "@mui/material";
import { useTranslation } from "react-i18next";

const STORAGE_KEY = "cookieConsentAccepted";

const CookieConsent: React.FC = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const accepted = localStorage.getItem(STORAGE_KEY);
      if (!accepted) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const handleAccept = (): void => {
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <Box
      component="aside"
      role="dialog"
      aria-label="Cookie consent"
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1200,
        backgroundColor: "grey.800",
        color: "white",
        px: 2,
        py: 2,
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        boxShadow: "0 -2px 10px rgba(0,0,0,0.2)",
      }}
    >
      <Typography variant="body2" sx={{ flex: { xs: "1 1 100%", sm: "1 1 auto" }, textAlign: { xs: "center", sm: "left" } }}>
        {t("cookieConsent.text", {
          defaultValue: "We use cookies to improve your experience. By continuing, you agree to our",
        })}{" "}
        <Link
          href="/en/#privacy"
          color="inherit"
          underline="always"
          sx={{ fontWeight: 600 }}
        >
          {t("cookieConsent.privacyPolicy", { defaultValue: "Privacy Policy" })}
        </Link>
        .
      </Typography>
      <Button
        variant="contained"
        size="small"
        onClick={handleAccept}
        sx={{
          backgroundColor: "white",
          color: "text.primary",
          "&:hover": { backgroundColor: "grey.200" },
        }}
      >
        {t("cookieConsent.accept", { defaultValue: "Accept" })}
      </Button>
    </Box>
  );
};

export default CookieConsent;
