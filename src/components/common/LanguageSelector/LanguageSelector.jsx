// src/components/LanguageSelector/LanguageSelector.jsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSelector.css";

function LanguageSelector() {
  const { t, i18n } = useTranslation("common");
  const [isOpen, setIsOpen] = useState(false);
  const currentLanguage = i18n.language;

  // ============================================================
  // 📌 CONFIGURACIÓN CON FALLBACKS
  // ============================================================

  const languages = [
    {
      code: "es",
      // ✅ Usamos defaultValue por si falla la traducción
      name: t("language.spanish", { defaultValue: "Español" }),
      flag: "🇪🇸",
    },
    {
      code: "en",
      name: t("language.english", { defaultValue: "English" }),
      flag: "🇬🇧",
    },
  ];

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);

    // 📌 Log para depuración
    console.log(`🔄 Idioma cambiado a: ${langCode}`);
  };

  const currentLang = languages.find((lang) => lang.code === currentLanguage);

  return (
    <div className="language-selector">
      <button
        className="language-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={t("language.select", { defaultValue: "Cambiar idioma" })}
        title={t("language.select", { defaultValue: "Cambiar idioma" })}
      >
        <span className="language-flag">{currentLang?.flag || "🌐"}</span>
        <span className="language-name">
          {currentLang?.name ||
            (currentLanguage === "es" ? "Español" : "English")}
        </span>
        <span className={`language-arrow ${isOpen ? "open" : ""}`}>▼</span>
      </button>

      {isOpen && (
        <div className="language-menu">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`language-option ${currentLanguage === lang.code ? "active" : ""}`}
              onClick={() => changeLanguage(lang.code)}
            >
              <span className="language-flag">{lang.flag}</span>
              <span className="language-name">{lang.name}</span>
              {currentLanguage === lang.code && (
                <span className="language-check">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSelector;
