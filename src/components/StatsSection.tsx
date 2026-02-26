import React, { useEffect, useRef } from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { animate, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";

interface StatItem {
  value: string | number;
  labelKey: string;
}

/** Parse "500+" or "7+" into { num: 500, suffix: "+" } or { num: 7, suffix: "+" }. */
function parseStatValue(value: string | number): { num: number; suffix: string } {
  if (typeof value === "number") return { num: value, suffix: "" };
  const match = String(value).match(/^(\d+)(.*)$/);
  if (match) return { num: parseInt(match[1], 10), suffix: match[2] || "" };
  return { num: 0, suffix: String(value) };
}

function AnimatedNumber({
  value,
  inView,
}: {
  value: string | number;
  inView: boolean;
}) {
  const { num, suffix } = parseStatValue(value);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || !ref.current || hasAnimated.current) return;
    hasAnimated.current = true;
    const el = ref.current;
    animate(0, num, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (v) => {
        el.textContent = `${Math.round(v)}${suffix}`;
      },
    });
  }, [inView, num, suffix]);

  return <span ref={ref}>{0}{suffix}</span>;
}

/** Renders the number with optional count-up when in view. */
function StatNumber({
  value,
  animated,
  inView,
}: {
  value: string | number;
  animated: boolean;
  inView: boolean;
}) {
  if (animated && typeof parseStatValue(value).num === "number") {
    return <AnimatedNumber value={value} inView={inView} />;
  }
  return <span>{value}</span>;
}

interface StatsSectionProps {
  /** When true, numbers count up from 0 when the section enters the viewport. */
  animated?: boolean;
}

const StatsSection: React.FC<StatsSectionProps> = ({ animated = false }) => {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const stats: StatItem[] = [
    { value: "500+", labelKey: "stats.happyClients" },
    { value: "7+", labelKey: "stats.yearsExperience" },
    { value: "1000+", labelKey: "stats.propertiesManaged" },
    { value: "15+", labelKey: "stats.cities" },
  ];

  return (
    <Box
      ref={ref}
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
                  <StatNumber
                    value={stat.value}
                    animated={animated}
                    inView={inView}
                  />
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
