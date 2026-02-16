import React from "react";
import { Breadcrumbs, Link, Typography, Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link as RouterLink, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  const { t } = useTranslation();
  const { lang } = useParams<{ lang: string }>();
  const currentLang = lang || "en";
  const homePath = `/${currentLang}`;

  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: t("common.home"),
        item: "https://vero.it",
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.label,
        item: item.href
          ? `https://vero.it${item.href}`
          : "https://vero.it",
      })),
    ],
    numberOfItems: items.length + 1,
  };

  const linkSx = {
    display: "flex",
    alignItems: "center",
    gap: 0.5,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbList),
        }}
      />
      <Box
        sx={{
          py: 2,
          px: 2,
          backgroundColor: "background.default",
        }}
        role="navigation"
        aria-label="Breadcrumb"
      >
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link
            component={RouterLink}
            to={homePath}
            color="inherit"
            sx={linkSx}
          >
            <HomeIcon fontSize="small" />
            {t("common.home")}
          </Link>
          {items.map((item, index) =>
            index === items.length - 1 ? (
              <Typography key={index} color="text.primary">
                {item.label}
              </Typography>
            ) : (
              <Link
                key={index}
                component={RouterLink}
                to={item.href || homePath}
                color="inherit"
                sx={{
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                {item.label}
              </Link>
            )
          )}
        </Breadcrumbs>
      </Box>
    </>
  );
};

export default Breadcrumb;
