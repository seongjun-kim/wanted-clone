import React, { useState } from "react";
import Styled from "styled-components";
import colors from "../lib/colors";

const Container = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80%;
    background-color: ${colors.background}
`;
const ModalButton = Styled.button`
    width: 120px;
    height: 50px;
    background-color: ${colors.primary};
    border-radius: 25px;
    color: ${colors.white};
    font-weight: bold;
`;
const ModalWrapper = Styled.div`
    display: ${(props) => (props.visible ? "block" : "none")};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
`;

const ModalOverlay = Styled.div`
    display: ${(props) => (props.visible ? "block" : "none")};
    background-color: ${colors.transparent};
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
`;

const ModalContent = Styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    position: relative;
    box-shadow: 0 5px 10px 0 ${colors.transparent};
    background-color: ${colors.white};
    border-radius: 10px;
    width: 300px;
    top: 50%;
    transform: translateY(-50%);
    margin: 0 auto;
    padding: 50px 15px;
`;
const CloseButton = Styled.button`
    position: absolute;
    top: 5px;
    font-weight: bold;
`;

const Modal = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleOpen = () => {
    setIsVisible(!isVisible);
  };

  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsVisible(false);
    }
  };

  const handleClose = (e) => {
    setIsVisible(false);
  };

  return (
    <Container>
      <ModalButton onClick={handleOpen}>Open Modal</ModalButton>
      <ModalOverlay visible={isVisible} />
      <ModalWrapper onClick={onMaskClick} visible={isVisible}>
        <ModalContent>
          {<CloseButton onClick={handleClose}>𝗫</CloseButton>}
          {children}
        </ModalContent>
      </ModalWrapper>
    </Container>
  );
};

export default Modal;
