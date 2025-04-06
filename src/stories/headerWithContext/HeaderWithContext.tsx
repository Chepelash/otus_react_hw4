import { useContext } from "react";
import { Logo } from "../logoWithContext/Logo.tsx";
import "./header.css";
import {
  LangProviderContext,
  LangProviderType,
} from "../langProvider/LangContext.ts";
import {
  ThemeProviderContext,
  ThemeProviderType,
} from "../themeProvider/ThemeContext.ts";
import { useTranslation } from "react-i18next";

export const HeaderWithContext = () => {
  const { toggleLang, lang } =
    useContext<LangProviderType>(LangProviderContext);
  const { toggleTheme, theme } =
    useContext<ThemeProviderType>(ThemeProviderContext);
  const { t } = useTranslation("buttons");
  return (
    <header
      className={`header ${theme === "light" ? "header-light" : "header-dark"}`}
    >
      <Logo />
      <button id="togleTheme" onClick={() => toggleTheme()}>
        {t("changeTheme")}
      </button>
      <button
        disabled={lang === "ru" ? true : false}
        onClick={() => toggleLang()}
      >
        ru
      </button>
      <button
        disabled={lang === "en" ? true : false}
        onClick={() => toggleLang()}
      >
        en
      </button>
    </header>
  );
};
