import React from "react";
import {
  ToastCloseStyled,
  ToastContainerStyled,
  ToastHeaderStyled,
  ToastMessageStyled,
} from "./Toast.styled";
import { Toast } from "../../interfaces/toast.interface";

interface ToastProps {
  toast: Toast;
  onDismiss: (id: string) => void;
}

const ToastItem: React.FC<ToastProps> = ({ toast, onDismiss }) => {
  return (
    <ToastContainerStyled status={toast.status} position={toast.position}>
      <ToastHeaderStyled>
        <span>{toast.title}</span>
        <ToastCloseStyled onClick={() => onDismiss(toast.id)}>
          &times;
        </ToastCloseStyled>
      </ToastHeaderStyled>
      <ToastMessageStyled>{toast.message}</ToastMessageStyled>
    </ToastContainerStyled>
  );
};

export default ToastItem;
