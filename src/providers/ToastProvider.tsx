import { createContext, ReactNode, useState } from "react";
import ToastContainer from "../components/toast/ToastContainer";
import { Toast, ToastOptions } from "../interfaces/toast.interface";

interface ToastContextProps {
  toasts: Toast[];
  removeToast: (id: string) => void;
  showToast: (options: ToastOptions) => void;
}

export const ToastContext = createContext<ToastContextProps>({
  toasts: [],
  showToast: () => {},
  removeToast: () => {},
});

type ToastProviderProps = {
  children: ReactNode;
};

const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((item) => item.id !== id));
  };

  const showToast = (options: ToastOptions) => {
    const id = Date.now().toString();

    const newToast: Toast = {
      id,
      status: options.status,
      title: options.title,
      message: options.message,
      position: options.position || "top-right",
      duration: options.duration || 5000,
    };

    setToasts((currentToasts) => [...currentToasts, newToast]);

    setTimeout(() => {
      removeToast(id);
    }, newToast.duration);
  };

  return (
    <ToastContext.Provider value={{ toasts, removeToast, showToast }}>
      {children}
      <ToastContainer
        toasts={toasts}
        removeToast={removeToast}
      ></ToastContainer>
    </ToastContext.Provider>
  );
};

export default ToastProvider;
