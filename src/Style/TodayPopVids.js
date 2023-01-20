import styled from "styled-components";
import { StyledDivRow } from "./StyledDiv";

export const MainContainer = styled.div`
  width: 395px;
  height: 350px;
  z-index: 2;
  position: relative;
  left: 515px;
  margin-top: 105px;
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
