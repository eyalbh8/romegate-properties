import React from "react";
import { Breadcrumbs, Link, Typography, Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
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
  const handleClick = (href: string): void => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href
        ? `https://romegate.it${item.href}`
        : "https://romegate.it",
    })),
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
            color="inherit"
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleClick("#home");
            }}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
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
                color="inherit"
                href={item.href || "#"}
                onClick={(e) => {
                  e.preventDefault();
                  if (item.href) {
                    handleClick(item.href);
                  }
                }}
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
