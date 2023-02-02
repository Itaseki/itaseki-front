import styled from "styled-components";

// Assets
import StyledBtn from "./StyledBtn";
import { StyledDiv, StyledDivColumn, StyledDivRow } from "./StyledDiv";

export const TimeTableWrapper = styled(StyledDivRow)`
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  margin-top: 225px;
  justify-content: center;
`;

export const Wrapper = styled(StyledDivColumn)`
  width: 1028px;
  height: 678px;
  border-radius: 17px;
`;

export const Dot = styled.div`
  width: 24px;
  height: 24px;
  background-color: #f6e8d6;
  border-radius: 50px;
`;

export const FirstContainer = styled(StyledDivRow)`
  width: 998px;
  height: 108px;
  justify-content: flex-end;
  padding-right: 30px;
  background-color: #201e1b;
  border-bottom: 4px solid #f6e8d6;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
`;

export const ReservedBtn = styled(StyledBtn)`
  background-color: white;
  width: 136px;
  height: 31.04px;
  border-radius: 21px;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 6px;
`;

export const Day = styled.p`
  margin: 0px 5px 0px 5px;
  font-family: EF_Diary;
  font-size: 14px;
  color: white;
`;

export const SecondContainer = styled(StyledDivColumn)`
  width: 300px;
  height: 565px;
  align-items: center;
  background-color: #201e1b;
  border-right: 4px solid #f6e8d6;
  border-bottom-left-radius: 50px;
`;

export const BoldTitle = styled.p`
  font-family: EF_Diary_bold;
  font-size: 30px;
  color: white;
`;

export const Line = styled.div`
  border-bottom: 1px solid black;
`;

export const ReservedBox = styled(StyledBtn)`
  width: 236px;
  height: 55px;
  justify-content: center;
  align-items: center;
  background-color: #e37958;
  border-radius: 21px;
  margin: 5px;
  & p {
    font-family: Pretendard700;
    font-size: 17px;

    margin: 0;
  }
`;

export const ThirdContainer = styled(StyledDivColumn)`
  width: 728px;
  height: 565px;
  align-items: center;
  background-color: #201e1b;
  border-bottom-right-radius: 50px;
`;

export const TimeBlocks = styled(StyledDivRow)`
  justify-content: center;
  align-items: center;
  width: 506px;
  margin: 15px;
  flex-wrap: wrap;
`;

export const TimeBlock = styled(StyledBtn)`
  justify-content: center;
  align-items: center;
  width: 73.42px;
  height: 41.14px;
  background: #f5f5f5;
  margin: 3px;
`;

export const TitleBlock = styled.p`
  font-family: Pretendard400;
  font-size: 14px;
  background-color: ${(props) => props.bgColor};
  padding: 5px;
  padding-right: 30px;
  border-radius: 8px;
  width: ${(props) => props.blockWidth};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
