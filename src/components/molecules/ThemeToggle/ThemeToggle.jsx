import React from "react";
import { useTheme } from "../../../context/theme/index";
import { useTranslation } from "react-i18next";
import "./ThemeToggle.css";
import { IoMoon } from "react-icons/io5";
import { PiSunFill } from "react-icons/pi";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const { t } = useTranslation("common");

  const label = t("theme.toggle", { defaultValue: "Cambiar tema" });

  return (
    <button
      className={`theme-toggle ${isDark ? "dark" : "light"}`}
      onClick={toggleTheme}
      aria-label={label}
      title={label}
    >
      <span className="theme-toggle-icon" title={label}>
        {isDark ? <IoMoon /> : <PiSunFill />}
      </span>
    </button>
  );
};

export default ThemeToggle;
