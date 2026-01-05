import { createTheme } from "@mui/material/styles";

// iGEO-inspired color palette - gentle, muted blue-gray tones
const theme = createTheme({
  palette: {
    primary: {
      main: "#2C3E50", // Muted dark blue-gray
      light: "#34495E",
      dark: "#1A252F",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#5A8BA8", // Soft blue-teal
      light: "#7BA4C2",
      dark: "#457B9D",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#FAFBFC", // Softer white
      paper: "#FFFFFF",
    },
    text: {
      primary: "#2D3436", // Soft dark gray (WCAG AA compliant)
      secondary: "#636E72", // Gentle medium gray
    },
    error: {
      main: "#C62828", // Slightly softened error color
    },
    warning: {
      main: "#E65100", // Slightly softened warning color
    },
    info: {
      main: "#0277BD", // Slightly softened info color
    },
    success: {
      main: "#2E7D32", // Keep success color as is
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
      fontSize: "3.5rem",
      "@media (max-width:600px)": {
        fontSize: "2.5rem",
      },
    },
    h2: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
      fontSize: "2.5rem",
    },
    h3: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
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
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.08)",
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
