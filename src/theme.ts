import { createTheme } from "@mui/material/styles";

// Roman Empire inspired color palette - darker red and purple
const theme = createTheme({
  palette: {
    primary: {
      main: "#8B0000", // Dark red (Roman crimson)
      light: "#A52A2A",
      dark: "#5C0000",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#4B0082", // Indigo purple (Roman purple)
      light: "#6A0DAD",
      dark: "#2D0042",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#F5F5F5",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1A1A1A", // High contrast on white background (WCAG AA compliant)
      secondary: "#666666", // Meets WCAG AA for normal text
    },
    error: {
      main: "#D32F2F", // High contrast error color
    },
    warning: {
      main: "#ED6C02", // High contrast warning color
    },
    info: {
      main: "#0288D1", // High contrast info color
    },
    success: {
      main: "#2E7D32", // High contrast success color
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
      fontSize: "3.5rem",
      "@media (max-width:600px)": {
        fontSize: "2.5rem",
      },
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      fontSize: "2.5rem",
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      fontSize: "2rem",
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.5rem",
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "10px 24px",
          "&:focus-visible": {
            outline: "3px solid",
            outlineColor: "primary.main",
            outlineOffset: "2px",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          "&:focus-visible": {
            outline: "2px solid",
            outlineColor: "primary.main",
            outlineOffset: "2px",
            borderRadius: "2px",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "&:focus-within": {
              "& fieldset": {
                borderWidth: "2px",
              },
            },
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:focus-visible": {
            outline: "3px solid",
            outlineColor: "primary.main",
            outlineOffset: "2px",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          "&:focus-visible": {
            outline: "2px solid",
            outlineColor: "primary.main",
            outlineOffset: "2px",
          },
        },
      },
    },
  },
});

export default theme;
