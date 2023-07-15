import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { StyledDiv, StyledDivColumn, StyledDivRow } from "./StyledDiv";

export const MainContainer = styled(StyledDiv)`
  width: 90%;
  height: 26.4375rem;
  background-color: #f6e8d6;
  background: #f6e8d6;
  border: 0.125rem solid #000000;
  box-shadow: 0.625rem -0.9375rem 0px #000000;
  margin-top: 6.25rem;
  justify-content: space-around;
  align-items: center;
  padding: 0 2% 0 2%;
`;

export const Num = styled.span`
  font-family: EF_Diary_bold;
  font-size: 3.9375rem;
  padding-bottom: 1.5625rem;
`;

export const PopVidContainer = styled(StyledDivColumn)`
  width: 22rem;
  height: 21.9375rem;
`;

export const PopVidImg = styled.img`
  width: 21.9375rem;
  height: 13rem;
`;

export const PopVidInfoContainer = styled(StyledDiv)`
  width: 20.75rem;
  height: 2.875rem;
  padding: 0.3125rem;
  background: #f6e8d6;
  border: 0.125rem solid #000000;
  box-shadow: 0.375rem -0.375rem 0px #e8cdcd,
    0.375rem -0.375rem 0px 0.0625rem #000000;
  justify-content: space-between;
  margin-top: 1.75rem;
`;

export const PopVidInfo = styled.span`
  font-family: EF-Diary;
  font-size: 1.3125rem;
`;

export const PopVidTime = styled.span`
  font-family: EF-Diary;
  font-size: 1.125rem;
  color: #767676;
`;

export const ReservBtnContainer = styled(StyledDiv)`
  justify-content: flex-end;
`;

export const ReservBtn = styled.button`
  width: 7.1875rem;
  height: 3.5rem;
  background-color: #f6e8d6;
  border: 0.125rem solid #000000;
  box-shadow: -0.375rem 0.375rem 0px #e8cdcd,
    -0.375rem 0.375rem 0px 0.0625rem #000000;
  margin-top: 1.5625rem;

  font-family: EF_Diary;
  font-size: 1.3125rem;
`;

export const IconCarrot = styled(FontAwesomeIcon)`
  font-size: 150%;
  margin-left: 0.625rem;
`;
