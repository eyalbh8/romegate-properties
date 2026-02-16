import { createTheme } from "@mui/material/styles";

// Noah's Ark–inspired palette: green accent, dark header/footer
const theme = createTheme({
  palette: {
    primary: {
      main: "#398B4B", // Noah-style green (CTA, checkmarks)
      light: "#4A856A",
      dark: "#2d6b3a",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#70A68F", // Lighter green (borders, secondary)
      light: "#84C4AB",
      dark: "#5a8b75",
      contrastText: "#FFFFFF",
    },
    // Dark for header, footer, cookie bar
    grey: {
      900: "#1A1A1A",
      800: "#212121",
      700: "#282828",
    },
    background: {
      default: "#FAFBFC",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#212121",
      secondary: "#666666",
    },
    error: {
      main: "#C62828",
    },
    warning: {
      main: "#E65100",
    },
    info: {
      main: "#0277BD",
    },
    success: {
      main: "#2E7D32",
    },
  },
  typography: {
    fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
      fontSize: "4rem",
      "@media (max-width:600px)": {
        fontSize: "2.5rem",
      },
    },
    h2: {
      fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
      fontSize: "2.5rem",
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
    },
    h3: {
      fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
      fontSize: "2rem",
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.5rem",
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.25rem",
    },
    h6: {
      fontWeight: 600,
      fontSize: "1rem",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
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
          padding: "12px 28px",
          fontSize: "1rem",
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
          "&:hover": {
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.12)",
          },
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
