import React, { useEffect } from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('reactDiv');

const ModalRootStyled = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: black;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
`;

const Modal = ({ children }) => {
  return createPortal(<ModalRootStyled>{children}</ModalRootStyled>, modalRoot);
};

export default Modal;
