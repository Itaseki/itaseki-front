import styled from "styled-components";
import { StyledDiv, StyledDivColumn, StyledDivRow } from "./StyledDiv";

// Assets
import StyledBtn from "./StyledBtn";
import Main_bg from "../Assets/Main_bg.png";

export const Wrapper = styled(StyledDivColumn)`
  width: 100vw;
  min-width: 100%;
  min-height: 4325px;
  align-items: center;
  margin-top: 9%;
`;

export const First = styled(StyledDiv)`
  min-height: 850px;
  min-width: 100%;
`;

export const RunningBtn = styled(StyledBtn)`
  width: 394px;
  height: 65px;
  background: #f7e9ee;
  border: 2px solid #000000;
  box-shadow: 4px -8px 0px #000000;
  border-radius: 32.5px;
  margin-top: 10%;
`;

export const Second = styled(StyledDivRow)`
  min-height: 850px;
  min-width: 100%;
`;

export const PopVidsContainer = styled.div`
  width: 808px;
  height: 528px;
`;

export const ElevatorContainer = styled(StyledDivColumn)`
  width: 83.17px;
  height: 260px;
`;

export const Num = styled(StyledDiv)`
  width: 74.66px;
  height: 74.66px;
  font-family: EF_Diary;
  font-size: 31px;
  filter: drop-shadow(4px -4px 0px #000000);
  background-color: #e3eded;
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
  min-height: 900px;
  min-width: 100%;
`;

export const Fourth = styled(StyledDivRow)`
  min-height: 900px;
  min-width: 100%;
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
