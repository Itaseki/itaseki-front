import React from 'react';
import styled from "styled-components";

const Modal = ({show, onCloseModal}) => {

  if(!show) {
    return null;
  }

  return (
      <CreateModal>
        <div>
          <CloseModalButton onClick={onCloseModal}>&times;</CloseModalButton>
        </div>
      </CreateModal>
  )
}

export default Modal;

// styled components

const CreateModal = styled.div`
  position: fixed;
  text-align: center;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  z-index: 1022;
  & > div {
    margin-top: 200px;
    display: inline-block;
    width: 850px;
    background-color: #ECECEC;
    padding: 30px 40px 0;
    z-index: 1012;
    position: relative;
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