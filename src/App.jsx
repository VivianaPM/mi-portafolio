import React from "react";
import { useTranslation } from "react-i18next";
import {
  portfolioData,
  getAllSkills,
  getFeaturedProjects,
  getSkillsByCategory,
} from "./data/index.js";
import MainLayout from "./layout/MainLayout.jsx";

import "./assets/styles/theme.css";
import "./App.css";

function App() {
  const { t } = useTranslation("common");
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="app">
      <MainLayout />
    </div>
  );
}

export default App;
