import "./Header.css";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../../molecules/LanguageSelector/LanguageSelector";
import ThemeToggle from "../../molecules/ThemeToggle/ThemeToggle";

function Header() {
  const { t, i18n } = useTranslation("common");

  return (
    <header className="header">
      <div className="header__logo"></div>
      <div className="header__controls">
        <ThemeToggle />
        <LanguageSelector />
      </div>
    </header>
  );
}

export default Header;
