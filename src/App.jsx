import React from "react";
import { useTranslation } from "react-i18next";
import ThemeToggle from "./components/common/ThemeToggle/ThemeToggle";
import LanguageSelector from "./components/common/LanguageSelector/LanguageSelector";
import {
  portfolioData,
  getAllSkills,
  getFeaturedProjects,
  getSkillsByCategory,
} from "./data/index.js";

import "./assets/styles/theme.css";
import "./App.css";

function App() {
  const { t } = useTranslation("common");
  const featuredProjects = getFeaturedProjects();

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

          <div style={{ marginTop: "2rem" }}>
            <h3>Prueba de datos</h3>
            <p>Projects: {portfolioData.projects.length}</p>
            <p>Skills: {getAllSkills().length}</p>
            <p>Featured: {featuredProjects.length}</p>
            <p>Frontend skills: {getSkillsByCategory("frontend").length}</p>

            <ul>
              {featuredProjects.slice(0, 2).map((project) => (
                <li key={project.id}>
                  <strong>{project.title}</strong> - {project.description}
                </li>
              ))}
            </ul>
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
