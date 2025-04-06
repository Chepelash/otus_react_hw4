import { useContext } from "react";
import { useTranslation } from "react-i18next";
import logo_png from "../assets/shoe-running-icon.png";
import logo_dark from "../assets/shoe-dark.png";
import "./logo.css";
import {
  ThemeProviderContext,
  ThemeProviderType,
} from "../themeProvider/ThemeContext";

export const Logo = () => {
  const { theme } = useContext<ThemeProviderType>(ThemeProviderContext);
  const { t } = useTranslation("logo");
  return (
    <div className="logo">
      <img src={theme === "light" ? logo_png : logo_dark} alt="Logo" />
      <h1>{t("logoText")}</h1>
    </div>
  );
};
