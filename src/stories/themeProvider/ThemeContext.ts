import { createContext } from "react";
import { ThemeProviderType } from "./ThemeProvider";

export type Theme = "light" | "dark";
export const ThemeProviderContext = createContext<ThemeProviderType>({
  theme: "light",
  toggleTheme: () => {},
});
