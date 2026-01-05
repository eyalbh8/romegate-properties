import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import theme from "./theme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import UniqueSection from "./components/UniqueSection";
import ErasmusSection from "./components/ErasmusSection";
import Properties from "./components/Properties";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Breadcrumb from "./components/Breadcrumb";
import FAQ from "./components/FAQ";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
        component="main"
      >
        <Navbar />
        <Breadcrumb items={[{ label: "Home" }]} />
        <Box id="main-content" component="main">
          <Hero />
          <Services />
          <UniqueSection />
          <ErasmusSection />
          <Properties />
          <Blog />
          <FAQ />
          <Contact />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;
