import { useContext } from "react";
import "./themeUser.css";
import {
  ThemeProviderContext,
  ThemeProviderType,
} from "../themeProvider/ThemeContext";

export const ThemeUser = () => {
  const { toggleTheme, theme } =
    useContext<ThemeProviderType>(ThemeProviderContext);
  return (
    <div className={theme}>
      <p>Changing theme</p>
      <button onClick={() => toggleTheme()}>Change</button>
    </div>
  );
};
