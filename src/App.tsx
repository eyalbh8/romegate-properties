import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import theme from "./theme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import QuickMessage from "./components/QuickMessage";
import Services from "./components/Services";
import UniqueSection from "./components/UniqueSection";
import ErasmusSection from "./components/ErasmusSection";
import Properties from "./components/Properties";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Navbar />
        <Hero />
        <QuickMessage />
        <Services />
        <UniqueSection />
        <ErasmusSection />
        <Properties />
        <Contact />
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;
