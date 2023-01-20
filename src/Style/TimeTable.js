import styled from "styled-components";

// Assets
import Ticket from "../Assets/Ticket.png";
import StyledBtn from "./StyledBtn";
import { StyledDiv, StyledDivColumn, StyledDivRow } from "./StyledDiv";

export const TimeTableWrapper = styled(StyledDiv)`
  width: 1102px;
  height: 628px;
  background-image: url(${Ticket});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  left: 169px;
  top: 721px;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const Wrapper = styled(StyledDivColumn)`
  width: 820px;
  height: 535px;
  border-radius: 17px;
`;

export const FirstContainer = styled(StyledDivRow)`
  width: 795px;
  height: 103px;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 15px;
  padding-top: 15px;
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
  font-size: 16px;
  font-weight: bold;
  margin: 0px 5px 0px 5px;
`;

export const SecondContainer = styled(StyledDivColumn)`
  width: 203px;
  height: 415px;
  align-items: center;
`;

export const BoldTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

export const Line = styled.div`
  border-bottom: 1px solid black;
`;

export const ReservedBox = styled(StyledBtn)`
  width: 136px;
  height: 50.04px;
  justify-content: center;
  align-items: center;
  background-color: #e37958;
  border-radius: 21px;
  margin: 5px;
`;

export const ThirdContainer = styled(StyledDivColumn)`
  width: 614px;
  height: 415px;
  align-items: center;
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
  font-weight: bold;
  background-color: ${(props) => props.bgColor};
  padding: 5px;
  padding-right: 30px;
  border-radius: 8px;
  width: ${(props) => props.blockWidth};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
