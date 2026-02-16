import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";

interface StatItem {
  value: string | number;
  labelKey: string;
}

const StatsSection: React.FC = () => {
  const { t } = useTranslation();

  const stats: StatItem[] = [
    { value: "500+", labelKey: "stats.happyClients" },
    { value: "7+", labelKey: "stats.yearsExperience" },
    { value: "1000+", labelKey: "stats.propertiesManaged" },
    { value: "15+", labelKey: "stats.cities" },
  ];

  return (
    <Box
      component="section"
      aria-label="Statistics"
      sx={{
        py: 6,
        backgroundColor: "background.paper",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="h3"
                  component="div"
                  sx={{
                    fontWeight: 700,
                    color: "primary.main",
                    mb: 0.5,
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t(stat.labelKey)}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default StatsSection;
