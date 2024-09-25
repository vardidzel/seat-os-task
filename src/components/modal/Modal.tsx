import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { trapFocus } from "../../utils/utils";
import {
  ModalBodyStyled,
  ModalButtonStyled,
  ModalCloseButtonStyled,
  ModalContentStyled,
  ModalFooterStyled,
  ModalHeaderStyled,
  ModalOverlayStyled,
  ModalTitleStyled,
} from "./Modal.styled";
import { ModalSize } from "../../interfaces/modal.interface";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  size?: ModalSize;
  footerActions?: { label: string; onClick: () => void }[];
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  size = "medium",
  footerActions = [],
  children,
}) => {
  useEffect(() => {
    if (isOpen) {
      const handleKeyDown = (e: KeyboardEvent) => {
        e.key === "Escape" && onClose();
      };
      window.addEventListener("keydown", handleKeyDown);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <ModalOverlayStyled onClick={onClose}>
      <ModalContentStyled
        size={size}
        onClick={(e) => e.stopPropagation()}
        onFocus={(e) => trapFocus(e, isOpen)}
        tabIndex={-1}
      >
        <ModalHeaderStyled>
          <ModalTitleStyled>{title}</ModalTitleStyled>
          <ModalCloseButtonStyled onClick={onClose}>
            &times;
          </ModalCloseButtonStyled>
        </ModalHeaderStyled>
        <ModalBodyStyled>{children}</ModalBodyStyled>
        {footerActions.length > 0 && (
          <ModalFooterStyled>
            {footerActions.map((action, index) => (
              <ModalButtonStyled key={index} onClick={action.onClick}>
                {action.label}
              </ModalButtonStyled>
            ))}
          </ModalFooterStyled>
        )}
      </ModalContentStyled>
    </ModalOverlayStyled>,
    document.getElementById("modal-portal") as HTMLElement
  );
};

export default Modal;
