import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useTranslation } from "react-i18next";

interface BusinessDay {
  day: string;
  hours: string;
  isOpen: boolean;
}

const BusinessHours: React.FC = () => {
  const { t } = useTranslation();

  const businessHours: BusinessDay[] = [
    { day: t("common.monday"), hours: "09:00 - 18:00", isOpen: true },
    { day: t("common.tuesday"), hours: "09:00 - 18:00", isOpen: true },
    { day: t("common.wednesday"), hours: "09:00 - 18:00", isOpen: true },
    { day: t("common.thursday"), hours: "09:00 - 18:00", isOpen: true },
    { day: t("common.friday"), hours: "09:00 - 18:00", isOpen: true },
    { day: t("common.saturday"), hours: t("common.closed"), isOpen: false },
    { day: t("common.sunday"), hours: t("common.closed"), isOpen: false },
  ];

  const currentDay = new Date().getDay();
  const dayIndex = currentDay === 0 ? 6 : currentDay - 1;

  return (
    <Paper sx={{ p: 3 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
        <AccessTimeIcon color="primary" />
        <Typography variant="h6">{t("contact.businessHours")}</Typography>
      </Box>
      <Grid container spacing={1}>
        {businessHours.map((item, index) => (
          <React.Fragment key={index}>
            <Grid item xs={6}>
              <Typography
                variant="body2"
                fontWeight={index === dayIndex ? "bold" : "normal"}
                color={index === dayIndex ? "primary" : "text.primary"}
              >
                {item.day}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant="body2"
                align="right"
                fontWeight={index === dayIndex ? "bold" : "normal"}
                color={
                  index === dayIndex
                    ? item.isOpen
                      ? "success.main"
                      : "error.main"
                    : "text.secondary"
                }
              >
                {item.hours}
              </Typography>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
      <Box sx={{ mt: 2, p: 1.5, backgroundColor: "info.light", borderRadius: 1 }}>
        <Typography variant="caption" color="info.dark">
          {t("contact.timezoneNote", {
            defaultValue: "All times are in Central European Time (CET/CEST)",
          })}
        </Typography>
      </Box>
    </Paper>
  );
};

export default BusinessHours;
