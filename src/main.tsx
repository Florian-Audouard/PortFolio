import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import "./index.css";
import App from "./App";
import ScrollToTop from "./helpers/ScrollToTop";
import { LanguageProvider } from "./i18n/LanguageContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LanguageProvider>
      <Router>
        <Analytics />
        <ScrollToTop />
        <App />
      </Router>
    </LanguageProvider>
  </React.StrictMode>
);
