import React from "react";
import { Box, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useTranslation } from "react-i18next";

const CAL_COM_BOOKING_URL = "https://cal.com/your-username/consultation";

const ConsultationFloat: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box
      component="a"
      href={CAL_COM_BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("consultationFloat.ariaLabel")}
      sx={{
        position: "fixed",
        bottom: 84,
        right: 24,
        zIndex: 1300,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 0.5,
        px: 2,
        py: 1.5,
        backgroundColor: "primary.main",
        color: "primary.contrastText",
        borderRadius: 50,
        boxShadow: 3,
        textDecoration: "none",
        "&:hover": {
          backgroundColor: "primary.dark",
          boxShadow: 4,
        },
        "&:focus-visible": {
          outline: "3px solid",
          outlineColor: "primary.main",
          outlineOffset: "2px",
        },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <CalendarMonthIcon sx={{ fontSize: 28 }} />
        <Typography
          variant="body2"
          sx={{ fontWeight: 600, display: { xs: "none", sm: "block" } }}
        >
          {t("consultationFloat.cta")}
        </Typography>
      </Box>
      <Typography
        variant="caption"
        sx={{
          display: { xs: "none", sm: "block" },
          opacity: 0.95,
          fontSize: "0.7rem",
        }}
      >
        {t("consultationFloat.terms")}
      </Typography>
    </Box>
  );
};

export default ConsultationFloat;
