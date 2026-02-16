import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation, useParams } from "react-router-dom";

interface NavItem {
  label: string;
  path: string;
}

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { lang } = useParams<{ lang: string }>();
  const currentLang = lang || "en";
  const pathname = location.pathname;
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [langAnchorEl, setLangAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = (): void => {
    setMobileOpen(!mobileOpen);
  };

  const handleLangMenuOpen = (event: React.MouseEvent<HTMLElement>): void => {
    setLangAnchorEl(event.currentTarget);
  };

  const handleLangMenuClose = (): void => {
    setLangAnchorEl(null);
  };

  const handleLanguageChange = (newLang: string): void => {
    i18n.changeLanguage(newLang);
    // Navigate to the same page in the new language
    const pathWithoutLang = pathname.replace(/^\/[^/]+/, "") || "/";
    navigate(`/${newLang}${pathWithoutLang === "/" ? "" : pathWithoutLang}`, {
      replace: true,
    });
    handleLangMenuClose();
  };

  const navItems: NavItem[] = [
    { label: t("navbar.home"), path: "" },
    { label: t("navbar.properties"), path: "/properties" },
    { label: t("navbar.services"), path: "/services" },
    { label: t("navbar.about"), path: "/about" },
    { label: t("navbar.erasmus"), path: "/erasmus" },
    { label: t("navbar.blog"), path: "/blog" },
    { label: t("navbar.contact"), path: "/contact" },
  ];

  const getNavTo = (path: string): string =>
    `/${currentLang}${path}`;

  const isActive = (path: string): boolean => {
    const to = getNavTo(path);
    if (path === "") {
      return pathname === `/${currentLang}` || pathname === `/${currentLang}/`;
    }
    return pathname === to || pathname.startsWith(`${to}/`);
  };

  const handleNavClick = (path: string): void => {
    navigate(getNavTo(path));
    setMobileOpen(false);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      role="navigation"
      aria-label="Mobile navigation menu"
      sx={{ textAlign: "center" }}
    >
      <Typography variant="h6" sx={{ my: 2, color: "white", fontWeight: 700 }}>
        Vero
      </Typography>
      <List role="list">
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding role="listitem">
            <ListItemButton
              sx={{
                textAlign: "center",
                color: "rgba(255,255,255,0.9)",
                ...(isActive(item.path) && {
                  fontWeight: 700,
                  textDecoration: "underline",
                }),
              }}
              onClick={() => handleNavClick(item.path)}
              aria-label={`Navigate to ${item.label}`}
              aria-current={isActive(item.path) ? "page" : undefined}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box
        component="a"
        href="#main-content"
        sx={{
          position: "absolute",
          top: -40,
          left: 0,
          backgroundColor: "grey.800",
          color: "white",
          padding: 1,
          textDecoration: "none",
          zIndex: 10000,
          "&:focus": {
            top: 0,
          },
        }}
        aria-label={t("navbar.skipToMainContent")}
      >
        {t("navbar.skipToMainContent")}
      </Box>
      <AppBar
        position="sticky"
        component="nav"
        role="navigation"
        aria-label="Main navigation"
        sx={{
          backgroundColor: "grey.800",
          boxShadow: 2,
        }}
      >
        <Toolbar role="toolbar">
          <Typography
            variant="h5"
            component="div"
            role="banner"
            aria-label="Vero logo - Home"
            sx={{
              flexGrow: { xs: 1, md: 0 },
              fontWeight: 700,
              color: "white",
              cursor: "pointer",
            }}
            onClick={() => handleNavClick("")}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleNavClick("");
              }
            }}
            tabIndex={0}
          >
            Vero
          </Typography>
          {isMobile ? (
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 1, ml: "auto" }}
            >
              <IconButton
                color="inherit"
                aria-label="language selector"
                onClick={handleLangMenuOpen}
              >
                <LanguageIcon />
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          ) : (
            <Box
              component="nav"
              role="navigation"
              aria-label="Main menu"
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: 2,
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  onClick={() => handleNavClick(item.path)}
                  aria-label={`Navigate to ${item.label}`}
                  aria-current={isActive(item.path) ? "page" : undefined}
                  sx={{
                    color: "white",
                    fontWeight: isActive(item.path) ? 700 : 500,
                    textDecoration: isActive(item.path) ? "underline" : "none",
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <IconButton
                color="inherit"
                aria-label="language selector"
                onClick={handleLangMenuOpen}
                sx={{ color: "white" }}
              >
                <LanguageIcon />
              </IconButton>
            </Box>
          )}
          <Menu
            anchorEl={langAnchorEl}
            open={Boolean(langAnchorEl)}
            onClose={handleLangMenuClose}
          >
            <MenuItem
              onClick={() => handleLanguageChange("en")}
              selected={i18n.language === "en"}
            >
              English
            </MenuItem>
            <MenuItem
              onClick={() => handleLanguageChange("it")}
              selected={i18n.language === "it"}
            >
              Italiano
            </MenuItem>
            <MenuItem
              onClick={() => handleLanguageChange("he")}
              selected={i18n.language === "he"}
            >
              עברית
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 240,
            backgroundColor: "grey.800",
            color: "white",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
