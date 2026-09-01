// src/App.jsx
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import ThemeToggle from "./components/common/ThemeToggle/ThemeToggle";
import LanguageSelector from "./components/common/LanguageSelector/LanguageSelector";
import "./assets/styles/theme.css";
import "./App.css";

function App() {
  const { t, i18n } = useTranslation("common");

  return (
    <div className="app">
      <header className="app-header">
        <h1>{t("app.title", "Mi Portafolio")}</h1>

        <div className="header-controls">
          <div className="language-selector-wrapper">
            <LanguageSelector />
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="app-main">
        <section className="hero-section">
          <h2>{t("app.welcome", "Bienvenido")}</h2>
          <p>{t("app.description", "Descripción por defecto")}</p>
          <div className="cta-buttons">
            <button className="btn-primary">
              {t("app.buttons.start", "Comenzar")}
            </button>
            <button className="btn-secondary">
              {t("app.buttons.learnMore", "Conocer más")}
            </button>
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <p>{t("app.footer.copyright", "© 2024 Mi Portafolio")}</p>
      </footer>
    </div>
  );
}

export default App;
