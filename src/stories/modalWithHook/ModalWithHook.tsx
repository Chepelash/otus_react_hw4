import { Dispatch, useState } from "react";
import "./modalWithHook.css";

export interface ModalWithHookProps {
  setVisible: Dispatch<boolean>;
}
export const ModalWithHook = ({ setVisible }: ModalWithHookProps) => {
  const [inputText, setInputText] = useState<string>("input Text");
  return (
    <div className="content">
      <p>&nbsp;{inputText}</p>
      <input value={inputText} onChange={(e) => setInputText(e.target.value)} />
      <button className="closeButton" onClick={() => setVisible(false)}>
        Close window
      </button>
    </div>
  );
};
