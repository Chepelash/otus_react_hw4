import { createContext } from "react";

export interface ThemeProviderType {
  theme: Theme;
  toggleTheme: () => void;
}
export type Theme = "light" | "dark";
export const ThemeProviderContext = createContext<ThemeProviderType>({
  theme: "light",
  toggleTheme: () => {},
});
