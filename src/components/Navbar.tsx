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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

interface NavItem {
  label: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = (): void => {
    setMobileOpen(!mobileOpen);
  };

  const navItems: NavItem[] = [
    { label: "Home", href: "#home" },
    { label: "Properties", href: "#properties" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Erasmus", href: "#erasmus" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
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
        aria-label="Skip to main content"
      >
        Skip to main content
      </Box>
      <AppBar
        position="sticky"
        component="nav"
        role="navigation"
        aria-label="Main navigation"
        sx={{
          backgroundColor: "rgba(139, 0, 0, 0.95)",
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
              fontFamily: '"Playfair Display", serif',
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
            ROME<span style={{ color: "#9D4EDD" }}>GATE</span>
          </Typography>
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ ml: "auto" }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box
              component="nav"
              role="navigation"
              aria-label="Main menu"
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "flex-end",
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
            </Box>
          )}
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
