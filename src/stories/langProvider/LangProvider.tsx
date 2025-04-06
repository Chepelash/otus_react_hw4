import { ReactNode, Suspense, useState } from "react";
import { Lang, LangProviderContext } from "./LangContext";
import { useTranslation } from "react-i18next";

interface LangProviderProps {
  children: ReactNode;
}
export const LangProvider = ({ children }: LangProviderProps) => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState<Lang>("en");
  const toggleLang = () => {
    setLang((prevLang) => {
      if (prevLang === "en") {
        i18n.changeLanguage("ru");
        return "ru";
      } else {
        i18n.changeLanguage("en");
        return "en";
      }
    });
  };
  return (
    <Suspense fallback="loading...">
      <LangProviderContext.Provider value={{ lang, toggleLang }}>
        {children}
      </LangProviderContext.Provider>
    </Suspense>
  );
};
