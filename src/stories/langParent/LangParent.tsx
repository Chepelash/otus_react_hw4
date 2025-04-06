import { LangProvider } from "../langProvider/LangProvider";
import { LangUser } from "../langUser/LangUser";

export const LangParent = () => {
  return (
    <LangProvider>
      <LangUser />
    </LangProvider>
  );
};
