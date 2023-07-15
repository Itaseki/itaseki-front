import styled from "styled-components";
import { StyledDiv, StyledDivColumn, StyledDivRow } from "./StyledDiv";

export const Wrapper = styled(StyledDivColumn)`
  width: 100vw;
  min-width: 100%;
  min-height: 231.25rem;
  align-items: center;
  margin-top: 9%;
`;

export const SearchBox = styled(StyledDivRow)`
  width: 60%;
  height: 3.75rem;
  border-bottom: 0.8125rem solid black;
  margin-top: 5%;
  justify-content: space-around;
`;

export const WriteInput = styled.input`
  width: 85%;
  height: 2.8125rem;
  border: none;
  background-color: transparent;
  margin-bottom: 0.4375rem;

  font-family: Pretendard700;
  font-size: 2.0625rem;
`;

export const RunningBtn = styled(StyledDiv)`
  width: 37.625rem;
  height: 4.8125rem;
  background: #f4f3ee;
  box-shadow: 0.625rem 0.625rem 0px #000000;
  border-radius: 3.85rem;
  margin-top: 2%;
  margin-left: 40%;

  & p {
    font-family: "EF_Diary";
    font-size: 1.375rem;
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
    font-size: 1.5rem;
  }
`;

export const Category = styled.span`
  align-self: left;
  margin-top: 3%;

  font-family: EF_Diary;
  font-size: 1.5rem;
  font-weight: bold;
`;
