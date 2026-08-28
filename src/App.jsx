import React from "react";
import ThemeToggle from "./components/common/ThemeToggle/ThemeToggle";
import "./assets/styles/theme.css";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Mi App</h1>
        <ThemeToggle /> 
      </header>
      <main>{/* Contenido */}</main>
    </div>
  );
}

export default App;
