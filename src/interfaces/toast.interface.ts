export type ToastStatus = "success" | "error" | "info" | "warning";
export type ToastPosition = "top-right" | "top-left" | "bottom-right" | "bottom-left";

export interface ToastOptions {
  status: ToastStatus;
  title: string;
  message: string;
  position?: ToastPosition;
  duration?: number;
}

export interface Toast {
  id: string;
  status: ToastStatus;
  title: string;
  message: string;
  position?: ToastPosition;
  duration?: number;
}