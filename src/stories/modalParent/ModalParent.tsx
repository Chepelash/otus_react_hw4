import { useState } from "react";
import "./modalParent.css";
import { ModalWithHook } from "../modalWithHook/ModalWithHook";

export const ModalParent = () => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className="modal">
      <button className="toggleModalButton" onClick={() => setVisible(true)}>
        toggle Modal
      </button>
      {visible && (
        <div className="overlay">
          <ModalWithHook setVisible={setVisible} />
        </div>
      )}
    </div>
  );
};
