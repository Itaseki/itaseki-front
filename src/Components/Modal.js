import React from 'react';
import styled from "styled-components";

const Modal = ({show, children, onCloseModal}) => {

  if(!show) {
    return null;
  }

  return (
      <CreateModal>
        <div>
          <CloseModalButton onClick={onCloseModal}>&times;</CloseModalButton>
          {children}
        </div>
      </CreateModal>
  )
}

export default Modal;

// styled components

const CreateModal = styled.div`
  position: absolute;
  text-align: center;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  z-index: 1022;
  & > div {
    position: relative;
    margin: 200px 0;
    display: inline-block;
    width: 850px;
    padding: 30px 40px 0;
    border: 6px dashed rgba(0, 0, 0, 0.27);
    border-radius: 50px;
    background-color: #F4F3EE;
    z-index: 1012;
  }
`

const CloseModalButton = styled.button`
  position: absolute;
  right: 10px;
  top: 6px;
  background: transparent;
  border: none;
  font-size: 30px;
  cursor: pointer;
`;