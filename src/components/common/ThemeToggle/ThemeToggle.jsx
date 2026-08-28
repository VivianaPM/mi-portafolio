import React from "react";
import { useTheme } from "../../../context/theme/index";
import "./ThemeToggle.css";
import { IoMoon } from "react-icons/io5";
import { PiSunFill } from "react-icons/pi";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      className={`theme-toggle ${isDark ? "dark" : "light"}`}
      onClick={toggleTheme}
      aria-label="Cambiar tema"
      title="Cambiar tema"
    >
      <span className="theme-toggle-icon">
        {isDark ? <IoMoon /> : <PiSunFill />}
      </span>
    </button>
  );
};

export default ThemeToggle;
