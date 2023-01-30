import styled from "styled-components";
import { StyledDiv, StyledDivColumn, StyledDivRow } from "./StyledDiv";

// Assets
import StyledBtn from "./StyledBtn";

export const Wrapper = styled(StyledDivColumn)`
  width: 100vw;
  min-width: 100%;
  min-height: 3700px;
  align-items: center;
  margin-top: 9%;
`;

export const First = styled(StyledDivColumn)`
  height: 100%;
  min-width: 100%;
  align-items: center;
`;

export const MainImg = styled.img`
  width: 100%;
`;

export const RunningBtn = styled(StyledBtn)`
  width: 394px;
  height: 65px;
  background: #f7e9ee;
  border: 2px solid #000000;
  box-shadow: 4px -8px 0px #000000;
  border-radius: 32.5px;

  font-family: EF_Diary;
  font-size: 23px;

  :hover {
    background-color: #8c5e61;
  }
`;

export const Second = styled(StyledDivRow)`
  height: 100%;
  min-width: 100%;
  padding: 15% 30% 15% 30%;
  justify-content: center;
`;

export const PopVidsContainer = styled.div`
  width: 808px;
  height: 528px;
  overflow: hidden;
  flex: none;
`;

export const PopVid = styled.img`
  width: 808px;
  height: 453px;
`;

export const ElevatorContainer = styled(StyledDivColumn)`
  width: 83.17px;
  height: 260px;
`;

export const Num = styled(StyledDiv)`
  width: 74.66px;
  height: 74.66px;
  font-family: EF_Diary_bold;
  font-size: 31px;
  filter: drop-shadow(4px -4px 0px #000000);
  background-color: #e3eded;
  border: 6px solid #000000;
  border-radius: 10px;
`;

export const UpBtn = styled(StyledBtn)`
  width: 83.17px;
  height: 83.17px;
  background: #e3eded;
  border: 8px solid #000000;
  box-shadow: 5px 3px 0px #000000;
  border-radius: 12px;
`;

export const DownBtn = styled(StyledBtn)`
  width: 83.17px;
  height: 83.17px;
  background: #e3eded;
  border: 8px solid #000000;
  box-shadow: 5px 3px 0px #000000;
  border-radius: 12px;
  transform: rotate(-180deg);
`;

export const Third = styled(StyledDivRow)`
  height: 100%;
  min-width: 100%;
  background-color: #d7e0e4;
  justify-content: space-around;
`;

export const PopPly = styled.img`
  width: 60%;
`;

export const PopThumbnail = styled.img`
  width: 57%;
  height: auto;
  border-radius: 45px;
`;

export const PopPlyTitle = styled(StyledDiv)`
  width: 437.24px;
  height: 76.27px;
  background: #000000;
  border: 4px solid #000000;
  box-shadow: 10px -10px 0px #faede2, 10px -10px 0px 4px #000000;
  border-radius: 5px;
  transform: rotate(-2.8deg);

  font-family: EF_Diary;
  font-size: 28px;
  color: white;
`;

export const PlyBox = styled.ul`
  width: 307.24px;
  height: 202.59px;
  background: #faede2;
  border: 4px solid #000000;
  filter: drop-shadow(10px -10px 0px #000000);
  padding: 65px;
  margin-top: 8%;
`;

export const PlyList = styled.li`
  list-style-type: circle;
  margin-bottom: 30px;
  font-family: EF_Diary;
  font-size: 14px;
`;

export const Fourth = styled(StyledDivRow)`
  height: 100%;
  width: 80%;
  background-color: #d7e0e4;
  justify-content: space-around;
  padding: 20% 10% 20% 10%;
`;

export const ImgBtn = styled.img`
  width: 90%;
`;

export const TagBox = styled.div`
  width: 161px;
  height: 31px;
  background-color: #f3e1ec;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 71px;
`;
