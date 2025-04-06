import { createContext } from "react";

export interface LangProviderType {
  lang: Lang;
  toggleLang: () => void;
}
export type Lang = "en" | "ru";
export const LangProviderContext = createContext<LangProviderType>({
  lang: "en",
  toggleLang: () => {},
});
