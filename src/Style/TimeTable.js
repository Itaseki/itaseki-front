import styled from "styled-components";

// Assets
import StyledBtn from "./StyledBtn";
import { StyledDiv, StyledDivColumn, StyledDivRow } from "./StyledDiv";

export const TimeTableWrapper = styled(StyledDivRow)`
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  margin-top: 14.0625rem;
  justify-content: center;
`;

export const Wrapper = styled(StyledDivColumn)`
  width: 64.25rem;
  height: 42.375rem;
  border-radius: 1.0625rem;
`;

export const Dot = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-color: #f6e8d6;
  border-radius: 3.125rem;
`;

export const FirstContainer = styled(StyledDivRow)`
  width: 62.375rem;
  height: 9rem;
  justify-content: flex-end;
  padding-right: 1.875rem;
  background-color: #201e1b;
  border-bottom: 0.25rem solid #f6e8d6;
  border-top-left-radius: 3.125rem;
  border-top-right-radius: 3.125rem;
`;

export const ReservedBtn = styled(StyledBtn)`
  background-color: white;
  width: 9.5rem;
  height: 1.940625rem;
  border-radius: 1.3125rem;
  font-size: 0.875rem;
  font-weight: bold;
  margin-bottom: 0.375rem;
`;

export const Day = styled.p`
  margin: 0px 0.3125rem 0px 0.3125rem;
  font-family: EF_Diary;
  font-size: 0.875rem;
  color: white;
`;

export const SecondContainer = styled(StyledDivColumn)`
  width: 18.75rem;
  height: 35.3125rem;
  align-items: center;
  background-color: #201e1b;
  border-right: 0.25rem solid #f6e8d6;
  border-bottom-left-radius: 3.125rem;
`;

export const BoldTitle = styled.p`
  font-family: EF_Diary_bold;
  font-size: 1.875rem;
  color: white;
`;

export const Line = styled.div`
  border-bottom: 0.0625rem solid black;
`;

export const ReservedBox = styled(StyledBtn)`
  width: 14.75rem;
  height: 3.4375rem;
  justify-content: center;
  align-items: center;
  background-color: #e37958;
  border-radius: 1.3125rem;
  margin: 0.3125rem;
  & p {
    font-family: Pretendard700;
    font-size: 1.0625rem;
    margin: 0;
  }
`;

export const ThirdContainer = styled(StyledDivColumn)`
  width: 45.5rem;
  height: 35.3125rem;
  align-items: center;
  background-color: #201e1b;
  border-bottom-right-radius: 3.125rem;
`;

export const TimeBlocks = styled(StyledDivRow)`
  justify-content: center;
  align-items: center;
  width: 31.625rem;
  margin: 0.9375rem;
  flex-wrap: wrap;
`;

export const TimeBlock = styled(StyledBtn)`
  justify-content: center;
  align-items: center;
  width: 4.3125rem;
  height: 2.5625rem;
  background: #f5f5f5;
  margin: 0.1875rem;
`;

export const TitleBlock = styled.p`
  font-family: Pretendard400;
  font-size: 0.875rem;
  background-color: ${(props) => props.bgColor};
  padding: 0.3125rem;
  padding-right: 1.875rem;
  border-radius: 0.5rem;
  width: ${(props) => props.blockWidth};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
