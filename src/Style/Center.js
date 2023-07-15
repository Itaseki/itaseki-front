import styled from "styled-components";
import { StyledDiv, StyledDivColumn, StyledDivRow } from "./StyledDiv";

export const Wrapper = styled(StyledDivColumn)`
  padding: 9%;
  align-items: center;
  height: 100%;
`;

export const Btn = styled(StyledDivRow)`
  width: 80%;
  height: 14.44rem;
  background: #000000;
  border: 0.05rem solid #000000;
  box-shadow: 0.95rem 0.95rem 0px #ffffff, 0.95rem 0.95rem 0px 0.15rem #000000;
  border-radius: 7.2rem;
  justify-content: space-around;
  margin-bottom: 10%;
`;

export const Btns = styled(StyledDiv)`
  width: 17.5rem;
  height: 6.5rem;
`;

export const AboutBtnClicked = styled(Btns)`
  background: #f4f3ee;
  box-shadow: -0.6rem -0.65rem 0px #e0c0c0;
  border-radius: 3.25rem;
`;

export const ContactBtnCliked = styled(Btns)`
  background: #f4f3ee;
  box-shadow: -0.6rem -0.6rem 0px #b2c3cb;
  border-radius: 3.25rem;
`;

export const BtnImg = styled.img`
  height: 3.75rem;
`;

export const Span = styled.span`
  font-family: EF_Diary;
  font-size: 1.15rem;
  white-space: pre-wrap;
  margin: 0.6rem;
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
