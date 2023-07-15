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
  width: 21.865rem;
  height: 14.93rem;
  background-image: url(${Guide_Btn});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const GuideBtnOpen = styled(StyledBtn)`
  width: 22.816rem;
  height: 20.672rem;
  background-image: url(${Guide_Btns});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const NextVidTimeBox = styled(StyledDiv)`
  width: 13.115rem;
  height: 4.375rem;
  box-shadow: 0.333rem -0.333rem 0px #d7e0e4,
    0.333rem -0.333rem 0px 0.067rem #000000;
  border: 0.067rem solid #000000;
  background-color: #d7e0e4;
  margin-top: 2.75rem;
  margin-right: 31.25%;

  font-family: EF_Diary;
  font-size: 1.125rem;
`;

export const ReservBtn = styled(StyledDiv)`
  width: 7.556rem;
  height: 4.375rem;
  box-shadow: 0.333rem -0.333rem 0px #e2d7ca,
    0.333rem -0.333rem 0px 0.067rem #000000;
  border: 0.067rem solid #000000;
  background-color: #e2d7ca;
  margin-top: 0.5rem;
  margin-left: 31.25%;

  font-family: EF_Diary;
  font-size: 1.25rem;
`;

export const NextVideo = styled.img`
  width: 44.437rem;
  height: 24.937rem;
  box-sizing: border-box;
  border: 0.625rem solid #000000;
  filter: drop-shadow(1.25rem -1.25rem 0px #000000);
  border-radius: 1.25rem;
`;

export const NextVidTitleBox = styled(StyledDiv)`
  width: 36.437rem;
  height: 2.8125rem;
  background: #e8cdcd;
  border: 0.375rem solid #000000;
  box-shadow: 0.3125rem -0.3125rem 0px #000000;
  border-radius: 0.625rem;
  margin-top: 4.21875rem;
  margin-right: 3%;
  padding: 1.25rem;
  justify-content: space-between;

  font-family: Pretendard800;
  font-size: 1.9375rem;
`;

export const NothingContainer = styled(StyledDiv)`
  background-image: url(${Nothing});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 27.1875rem;
  height: 18.875rem;
  position: absolute;
  left: 19.8125rem;
  top: 19.75rem;
  border-radius: 0.625rem;
`;

export const WhiteText = styled.p`
  color: white;
  font-size: 0.875rem;
  font-weight: bold;
`;

export const RunBtn = styled(StyledDiv)`
  width: 4.125rem;
  height: 4.125rem;
  background: #e8cdcd;
  border: 0.3125rem solid #000000;
  box-shadow: 0.25rem -0.25rem 0px #000000;
  border-radius: 3.5rem;
  margin-top: 4.21875rem;
`;
