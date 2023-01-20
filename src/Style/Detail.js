import styled from "styled-components";
import StyledBtn from "./StyledBtn";
import { StyledDivRow } from "./StyledDiv";

export const Modal = styled.div`
  position: fixed;
  width: 621px;
  height: 458px;
  left: 410px;
  top: 147px;
  z-index: 2;
  display: flex;
  padding-top: 2%;
  flex-direction: column;
  align-items: center;
  background: #f4f3ee;
  border: 6px dashed #000000;
  border-radius: 30px;
`;

export const CloseBtn = styled(StyledBtn)`
  align-self: flex-end;
  margin-right: 30;
  margin-bottom: 25;
`;

export const IMG = styled.img`
  width: 423px;
  height: 224px;
`;

export const P = styled.p`
  margin: 3;
`;

export const FirstRow = styled(StyledDivRow)`
  justify-content: space-between;
`;

export const ReservBtn = styled(StyledBtn)`
  width: 182.39px;
  height: 33px;
  border-radius: 71px;
  font-weight: bold;
  font-size: 16px;
  margin-top: 14px;
  background-color: ${(props) => props.bgColor};
`;
