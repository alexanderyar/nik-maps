import React, { useEffect } from "react";
import { Overlay, ModalWindow } from "./Modal.styled";
import { createPortal } from "react-dom";
import { OutlinedCard } from "../components/card/Card";

//creating var for portal for modal to avoid z-index troubles
const modalRoot = document.querySelector("#modal-root");

export const Modal = ({ clickedCardIdInfo, onClose, handleBackdropClick }) => {
  // adding listener on escape using UseEffect AND removing listenter on escape using "return" of given UseEffect
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        console.log("escape triggered");
        onClose();
      }
    };
    console.log("mount _______");
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalWindow>
        <OutlinedCard clickedCardIdInfo={clickedCardIdInfo} />
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};
