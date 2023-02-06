import styled from "styled-components";
import { StyledDiv, StyledDivColumn, StyledDivRow } from "./StyledDiv";
import StyledBtn from "./StyledBtn";

// Assets
import Nothing from "../Assets/Nothing.png";
import Guide_Btn from "../Assets/Guide_Btn.png";
import Guide_Btns from "../Assets/Guide_Btns.png";

export const Wrapper = styled(StyledDivColumn)`
  width: 100vw;
`;

export const GuideBtn = styled(StyledBtn)`
  width: 349.88px;
  height: 223.85px;
  background-image: url(${Guide_Btn});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const GuideBtnOpen = styled(StyledBtn)`
  width: 363.52px;
  height: 324px;
  background-image: url(${Guide_Btns});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const NextVidTimeBox = styled(StyledDiv)`
  width: 234.84px;
  height: 70px;
  box-shadow: 6px -6px 0px #d7e0e4, 6px -6px 0px 2px #000000;
  border: 2px solid #000000;
  background-color: #d7e0e4;
  margin-top: 11%;
  margin-right: 50%;

  font-family: EF_Diary;
  font-size: 18px;
`;

export const ReservBtn = styled(StyledDiv)`
  width: 136px;
  height: 70px;
  box-shadow: 6px -6px 0px #e2d7ca, 6px -6px 0px 2px #000000;
  border: 2px solid #000000;
  background-color: #e2d7ca;
  margin-top: 2%;
  margin-left: 50%;

  font-family: EF_Diary;
  font-size: 20px;
`;

export const NextVideo = styled.img`
  width: 711px;
  height: 399px;
  box-sizing: border-box;
  border: 10px solid #000000;
  filter: drop-shadow(20px -20px 0px #000000);
  border-radius: 20px;
`;

export const NextVidTitleBox = styled(StyledDiv)`
  width: 583px;
  height: 27px;
  background: #e8cdcd;
  border: 6px solid #000000;
  box-shadow: 5px -5px 0px #000000;
  border-radius: 10px;
  margin-top: 27px;
  margin-right: 3%;
  padding: 20px;
  justify-content: space-between;

  font-family: Pretendard800;
  font-size: 31px;
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

export const WhiteText = styled.p`
  color: white;
  font-size: 14px;
  font-weight: bold;
`;

export const RunBtn = styled(StyledDiv)`
  width: 74px;
  height: 74px;
  background: #e8cdcd;
  border: 5px solid #000000;
  box-shadow: 4px -4px 0px #000000;
  border-radius: 56px;
  margin-top: 27px;
`;
