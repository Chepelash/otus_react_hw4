import { useTranslation } from "react-i18next";
import {
  LangProviderContext,
  LangProviderType,
} from "../langProvider/LangContext";
import { useContext } from "react";

export const LangUser = () => {
  const { t } = useTranslation();
  const { toggleLang, lang } =
    useContext<LangProviderType>(LangProviderContext);
  return (
    <div>
      <p>{t("greetings")}</p>
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
    </div>
  );
};
