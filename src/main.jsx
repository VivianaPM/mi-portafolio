import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import "./assets/styles/theme.css";
import { ThemeProvider } from "./context/theme/ThemeProvider.jsx";
import "./i18n/config/config.js"; // Asegúrate de importar la configuración de i18n

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
