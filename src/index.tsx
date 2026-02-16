import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./i18n";
import App from "./App";
import { updateHtmlLang } from "./utils/seo";
import i18n from "./i18n";

// Suppress benign ResizeObserver loop error (happens on nav back with MUI + Framer Motion)
const resizeObserverErr = "ResizeObserver loop completed with undelivered notifications";
const prevOnError = window.onerror;
window.onerror = function (message, source, lineno, colno, error) {
  if (typeof message === "string" && message.includes("ResizeObserver")) {
    return true; // handled, do not show overlay
  }
  return prevOnError ? prevOnError(message, source, lineno, colno, error) : false;
};
window.addEventListener(
  "error",
  (e) => {
    const msg = e.message ?? (e.error && e.error?.message);
    if (typeof msg === "string" && msg.includes("ResizeObserver")) {
      e.stopImmediatePropagation();
      e.preventDefault();
    }
  },
  true
);

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
