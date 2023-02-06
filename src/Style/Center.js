import styled from "styled-components";
import { StyledDiv, StyledDivColumn, StyledDivRow } from "./StyledDiv";

export const Wrapper = styled(StyledDivColumn)`
  padding: 9%;
  align-items: center;
  height: 100%;
`;

export const Btn = styled(StyledDivRow)`
  width: 80%;
  height: 231px;
  background: #000000;
  border: 1px solid #000000;
  box-shadow: 15px 15px 0px #ffffff, 15px 15px 0px 3px #000000;
  border-radius: 115.5px;
  justify-content: space-around;
  margin-bottom: 10%;
`;

export const Btns = styled(StyledDiv)`
  width: 280px;
  height: 103px;
`;

export const AboutBtnClicked = styled(Btns)`
  background: #f4f3ee;
  box-shadow: -10px -10px 0px #e0c0c0;
  border-radius: 51.5px;
`;

export const ContactBtnCliked = styled(Btns)`
  background: #f4f3ee;
  box-shadow: -10px -10px 0px #b2c3cb;
  border-radius: 51.5px;
`;

export const BtnImg = styled.img`
  height: 60px;
`;

export const Span = styled.span`
  font-family: EF_Diary;
  font-size: 18px;
  white-space: pre-wrap;
  margin: 10px;
`;

export const Red = styled(Span)`
  color: #d9767c;
`;

export const Orange = styled(Span)`
  color: #ea8d6c;
`;

export const Blue = styled(Span)`
  color: #6986bf;
`;
