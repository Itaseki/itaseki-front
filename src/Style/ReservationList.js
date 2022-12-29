import styled from "styled-components";
import { StyledDiv, StyledDivColumn, StyledDivRow } from "./StyledDiv";

// Assets
import Nothing from "../Assets/Nothing.png";

export const Wrapper = styled(StyledDivRow)`
  margin-left: 20%;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const NothingContainer = styled(StyledDiv)`
  background-image: url(${Nothing});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 435px;
  height: 288px;
  position: absolute;
  left: 297px;
  top: 316px;
  border-radius: 10px;
`;

export const NextVideoContainer = styled(StyledDivColumn)`
  background-color: black;
  width: 435px;
  height: 288px;
  position: absolute;
  left: 297px;
  top: 316px;
  border-radius: 10px;
`;

export const WhiteText = styled.p`
  color: white;
  font-size: 14px;
  font-weight: bold;
`;
