import styled from "styled-components";
import StyledBtn from "./StyledBtn";
import { StyledDivRow } from "./StyledDiv";

export const Modal = styled.div`
  position: fixed;
  width: 38.81rem;
  height: 26.88rem;
  left: 25rem;
  top: 9.38rem;
  z-index: 2;
  display: flex;
  padding: 0.5rem;
  flex-direction: column;
  align-items: center;
  background: #f4f3ee;
  border: 0.375rem dashed #000000;
  border-radius: 1.875rem;
`;

export const CloseBtn = styled(StyledBtn)`
  align-self: flex-end;
  margin-right: 1.875rem;
  margin-bottom: 1.56rem;
`;

export const IMG = styled.img`
  width: 26.44rem;
  height: 14rem;
  border-radius: 7%;
  margin-bottom: 1.25rem;
`;

export const P = styled.p`
  margin: 0;
  padding: 0;
  font-family: Pretendard;
`;

export const FirstRow = styled(StyledDivRow)`
  justify-content: space-between;
`;

export const ReservBtn = styled(StyledBtn)`
  width: 9.12rem;
  height: 2rem;
  border-radius: 3.55rem;
  font-weight: bold;
  font-size: 0.875rem;
  margin-top: 0.88rem;
  background-color: ${(props) => props.bgColor};
`;
