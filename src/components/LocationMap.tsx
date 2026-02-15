import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useTranslation } from "react-i18next";

interface LocationMapProps {
  lat?: number;
  lng?: number;
  title?: string;
  address?: string;
}

const LocationMap: React.FC<LocationMapProps> = ({
  lat = 41.9028,
  lng = 12.4964,
  title = "Vero Properties",
  address = "Via del Corso 123, 00186 Rome, Italy",
}) => {
  const { t } = useTranslation();

  // Google Maps embed URL
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${lat},${lng}&zoom=15`;

  // Fallback: Static map image from Google or OpenStreetMap
  const staticMapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.01},${lat - 0.01},${lng + 0.01},${lat + 0.01}&layer=mapnik&marker=${lat},${lng}`;

  return (
    <Paper sx={{ p: 3 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
        <LocationOnIcon color="primary" />
        <Typography variant="h6">{t("contact.ourLocation")}</Typography>
      </Box>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        {address}
      </Typography>

      <Box
        sx={{
          width: "100%",
          height: 300,
          borderRadius: 2,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <iframe
          src={staticMapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={t("contact.mapTitle", { defaultValue: "Office Location Map" })}
        />
      </Box>

      <Box sx={{ mt: 2 }}>
        <Typography variant="caption" color="text.secondary">
          {t("contact.directionsNote", {
            defaultValue:
              "Click on the map to open in Google Maps for directions",
          })}
        </Typography>
      </Box>
    </Paper>
  );
};

export default LocationMap;
