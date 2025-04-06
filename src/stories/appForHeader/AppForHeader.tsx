import { HeaderWithContext } from "../headerWithContext/HeaderWithContext";
import { LangProvider } from "../langProvider/LangProvider";
import { ThemeProvider } from "../themeProvider/ThemeProvider";

export const AppForHeader = () => {
  return (
    <ThemeProvider>
      <LangProvider>
        <HeaderWithContext />
      </LangProvider>
    </ThemeProvider>
  );
};
