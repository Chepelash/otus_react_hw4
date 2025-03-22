import { ReactNode } from "react";
import "./modal.css";

export interface ModalProps {
  visible: boolean;
  children?: ReactNode;
}
export const TestNode = () => {
  return <p>"hello"</p>;
};
export const Modal = ({ visible, children }: ModalProps) => {
  if (!visible) {
    return <></>;
  }
  return (
    <div className="modal">
      <div className="overlay">
        <div className="content">{children}</div>
      </div>
    </div>
  );
};
