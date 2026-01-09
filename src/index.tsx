import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./i18n";
import App from "./App";
import { updateHtmlLang } from "./utils/seo";
import i18n from "./i18n";

// Update HTML lang attribute when language changes
i18n.on("languageChanged", (lng) => {
  updateHtmlLang(lng);
});

// Set initial HTML lang
if (typeof document !== "undefined") {
  updateHtmlLang(i18n.language || "en");
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
