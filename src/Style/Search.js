import styled from "styled-components";
import { StyledDivColumn, StyledDivRow } from "./StyledDiv";

export const Wrapper = styled(StyledDivColumn)`
  width: 100vw;
  min-width: 100%;
  min-height: 3700px;
  align-items: center;
  margin-top: 9%;
`;

export const SearchBox = styled(StyledDivRow)`
  width: 60%;
  height: 60px;
  border-bottom: 13px solid black;
`;

export const WriteInput = styled.input`
  width: 90%;
  height: 40px;
  border: none;
  background-color: transparent;
  margin-top: 5%;
  margin-bottom: 20px;

  font-family: Pretendard700;
  font-size: 33px;
`;
