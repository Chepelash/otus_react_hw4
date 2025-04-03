import { ThemeProvider } from "../themeProvider/ThemeProvider";
import { ThemeUser } from "../themeUser/ThemeUser";

export const ThemeParent = () => {
  return (
    <ThemeProvider>
      <ThemeUser />
    </ThemeProvider>
  );
};
