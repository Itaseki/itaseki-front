import styled from "styled-components";
import { StyledDivRow } from "./StyledDiv";

export const MainContainer = styled.div`
  width: 395px;
  height: 460px;
  z-index: 2;
  position: relative;
  top: 130px;
  left: 515px;
`;

export const TopPop = styled(StyledDivRow)`
  width: 380px;
  margin-bottom: 83px;
  justify-content: space-around;
  align-items: center;
`;

export const Bold = styled.p`
  font-weight: bold;
  margin: 0px;
  color: ${(props) => props.fColor};
`;

export const RestPop = styled(StyledDivRow)`
  justify-content: space-between;
  padding-left: 37px;
`;
