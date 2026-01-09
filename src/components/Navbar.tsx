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
import { useNavigate, useLocation } from "react-router-dom";

interface NavItem {
  label: string;
  href: string;
}

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
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

  const handleLanguageChange = (lang: string): void => {
    i18n.changeLanguage(lang);
    // Navigate to the new language route while preserving hash
    const currentHash = location.hash || "";
    navigate(`/${lang}${currentHash}`, { replace: true });
    handleLangMenuClose();
  };

  const navItems: NavItem[] = [
    { label: t("navbar.home"), href: "#home" },
    { label: t("navbar.properties"), href: "#properties" },
    { label: t("navbar.services"), href: "#services" },
    { label: t("navbar.about"), href: "#about" },
    { label: t("navbar.erasmus"), href: "#erasmus" },
    { label: t("navbar.blog"), href: "#blog" },
    { label: t("navbar.contact"), href: "#contact" },
  ];

  const handleNavClick = (href: string): void => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      role="navigation"
      aria-label="Mobile navigation menu"
      sx={{ textAlign: "center" }}
    >
      <Typography variant="h6" sx={{ my: 2, color: "primary.main" }}>
        ROME<span style={{ color: "secondary.main" }}>GATE</span>
      </Typography>
      <List role="list">
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding role="listitem">
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => handleNavClick(item.href)}
              aria-label={`Navigate to ${item.label} section`}
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
          backgroundColor: "primary.main",
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
          backgroundColor: "rgba(44, 62, 80, 0.92)",
          backdropFilter: "blur(10px)",
          boxShadow: 3,
        }}
      >
        <Toolbar role="toolbar">
          <Typography
            variant="h5"
            component="div"
            role="banner"
            aria-label="Romegate logo - Home"
            sx={{
              flexGrow: { xs: 1, md: 0 },
              fontWeight: 700,
              color: "white",
              cursor: "pointer",
            }}
            onClick={() => handleNavClick("#home")}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleNavClick("#home");
              }
            }}
            tabIndex={0}
          >
            ROME
            <span style={{ color: theme.palette.secondary.main }}>GATE</span>
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
                  onClick={() => handleNavClick(item.href)}
                  aria-label={`Navigate to ${item.label} section`}
                  sx={{ color: "white", fontWeight: 500 }}
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
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
