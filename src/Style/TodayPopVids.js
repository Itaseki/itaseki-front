import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { StyledDiv, StyledDivColumn, StyledDivRow } from "./StyledDiv";

export const MainContainer = styled(StyledDiv)`
  width: 90%;
  height: 423px;
  background-color: #f6e8d6;
  background: #f6e8d6;
  border: 2px solid #000000;
  box-shadow: 10px -15px 0px #000000;
  margin-top: 100px;
  justify-content: space-around;
  align-items: center;
  padding: 0 2% 0 2%;
`;

export const Num = styled.span`
  font-family: EF_Diary_bold;
  font-size: 63px;
  padding-bottom: 10%;
`;

export const PopVidContainer = styled(StyledDivColumn)`
  width: 352px;
  height: 351px;
`;

export const PopVidImg = styled.img`
  width: 351px;
  height: 208px;
`;

export const PopVidInfoContainer = styled(StyledDiv)`
  width: 332px;
  height: 46px;
  padding: 5px;
  background: #f6e8d6;
  border: 2px solid #000000;
  box-shadow: 6px -6px 0px #e8cdcd, 6px -6px 0px 2px #000000;
  justify-content: space-between;
  margin-top: 7%;
`;

export const PopVidInfo = styled.span`
  font-family: EF-Diary;
  font-size: 21px;
`;

export const PopVidTime = styled.span`
  font-family: EF-Diary;
  font-size: 18px;
  color: #767676;
`;

export const ReservBtnContainer = styled(StyledDiv)`
  justify-content: flex-end;
`;

export const ReservBtn = styled.button`
  width: 115px;
  height: 56px;
  background-color: #f6e8d6;
  border: 2px solid #000000;
  box-shadow: -6px 6px 0px #e8cdcd, -6px 6px 0px 2px #000000;
  margin-top: 5%;

  font-family: EF_Diary;
  font-size: 21px;
`;

export const IconCarrot = styled(FontAwesomeIcon)`
  font-size: 150%;
  margin-left: 10px;
`;
