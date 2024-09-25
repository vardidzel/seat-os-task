import styled, { css } from "styled-components";
import { ToastPosition, ToastStatus } from "../../interfaces/toast.interface";

export const positionStyles = {
  "top-right": css`
    top: 20px;
    right: 20px;
  `,
  "top-left": css`
    top: 20px;
    left: 20px;
  `,
  "bottom-right": css`
    bottom: 20px;
    right: 20px;
  `,
  "bottom-left": css`
    bottom: 20px;
    left: 20px;
  `,
};

export const ToastContainerStyled = styled.div<{
  position?: ToastPosition;
  status: ToastStatus;
}>`
  position: fixed;
  z-index: 999;
  max-width: 300px;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  ${({ position }: { position?: ToastPosition }) =>
    positionStyles[position || "top-right"]}

  ${({ status }: any) =>
    status === "success" &&
    css`
      background-color: #388e3c;
      color: #000;
    `}
  
    ${({ status }) =>
    status === "error" &&
    css`
      background-color: #d32f2f;
      color: #fff;
    `}
  
    ${({ status }) =>
    status === "info" &&
    css`
      background-color: #0288d1;
      color: #000;
    `}
  
    ${({ status }) =>
    status === "warning" &&
    css`
      background-color: #f57c00;
      color: #000;
    `}
`;

export const ToastHeaderStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 16px;
`;

export const ToastCloseStyled = styled.button`
  background-color: transparent;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;

export const ToastMessageStyled = styled.div`
  font-size: 14px;
`;
