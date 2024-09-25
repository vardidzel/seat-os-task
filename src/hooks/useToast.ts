import { useContext } from "react";
import { ToastContext } from "../providers/ToastProvider";

export const useToast = () => {
  const { showToast, toasts, removeToast } = useContext(ToastContext);

  return {
    showToast,
    toasts,
    removeToast,
  };
};
