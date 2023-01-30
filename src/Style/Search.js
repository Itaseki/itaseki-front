import styled from "styled-components";
import { StyledDiv, StyledDivColumn, StyledDivRow } from "./StyledDiv";

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
  margin-top: 5%;
  justify-content: space-around;
`;

export const WriteInput = styled.input`
  width: 85%;
  height: 45px;
  border: none;
  background-color: transparent;
  margin-bottom: 7px;

  font-family: Pretendard700;
  font-size: 33px;
`;

export const RunningBtn = styled(StyledDiv)`
  width: 602px;
  height: 77px;
  background: #f4f3ee;
  box-shadow: 10px 10px 0px #000000;
  border-radius: 38.5px;
  margin-top: 2%;
  margin-left: 40%;

  & p {
    font-family: "EF_Diary";
    font-size: 22px;
  }

  :hover {
    background-color: #9ea6a9;
  }
`;

export const ResultBox = styled(StyledDivRow)`
  width: 100%;
  margin-top: 2%;

  & span {
    font-family: EF_Diary;
    font-size: 24px;
  }
`;
