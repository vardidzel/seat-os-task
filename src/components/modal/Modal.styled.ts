import { keyframes, styled } from "styled-components";
import { ModalSize } from "../../interfaces/modal.interface";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(-20px);
  }
  to {
    transform: translateY(0);
  }
`;

export const ModalOverlayStyled = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  animation: ${fadeIn} 0.3s ease-out;
`;

export const ModalContentStyled = styled.div<{ size: ModalSize }>`
  background: white;
  border-radius: 8px;
  padding: 20px;
  position: relative;
  width: ${({ size }) =>
    size === "small" ? "300px" : size === "medium" ? "500px" : "800px"};
  max-width: 90%;
  animation: ${slideDown} 0.3s ease-out;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const ModalHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalTitleStyled = styled.h2`
  margin: 0;
  font-size: 24px;
`;

export const ModalCloseButtonStyled = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

export const ModalBodyStyled = styled.div`
  margin-top: 20px;
`;

export const ModalFooterStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`;

export const ModalButtonStyled = styled.button`
  padding: 10px 15px;
  background-color: #90caf9;
  border: none;
  border-radius: 5px;
  color: rgba(0, 0, 0, 0.87);
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #42a5f5;
  }
`;
