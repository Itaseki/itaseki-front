import styled from "styled-components";

// Assets
import Add_Reserv from "../Assets/Add_Reserv.png";
import StyledBtn from "./StyledBtn";
import { StyledDiv } from "./StyledDiv";

export const Modal = styled.div`
  background-image: url(${Add_Reserv});
  position: fixed;
  top: 15%;
  bottom: 0;
  height: auto;
  width: 75%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 2;
  display: flex;
  padding-top: 2%;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;

export const VideoList = styled.ul`
  width: 393px;
  text-align: start;
  padding-left: 10px;
  z-index: 2;
  background-color: white;
  margin: 0;
  position: absolute;
`;

export const WhiteBoxBtn = styled(StyledBtn)`
  width: 125px;
  height: 33px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;

  &.select {
    background-color: #e37958;
    color: white;
  }
`;

export const AddCatWrapper = styled.div`
  flex-direction: row;
  position: relative;
  top: 0px;
  left: -320px;
`;

export const AddCat = styled(StyledBtn)`
  font-size: 25px;
  padding: 10px 20px 10px 20px;
  border-radius: 10px;
  font-weight: bold;
  background-color: ${(props) => (props.default ? "#EFE8CC" : "#E37958")};
`;

export const TimeInput = styled.input`
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 33px;
  width: 31px;
  border-radius: 8px;
  font-weight: bold;
  outline: none;
  border: 0 solid black;
`;

export const TimeWBox = styled(StyledDiv)`
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 33px;
  width: 31px;
  border-style: none;
  border-radius: 8px;
  font-weight: bold;
`;

export const Sign = styled.span`
  font-size: 35px;
  font-weight: bold;
`;

export const VideoDescription = styled.p`
  border-style: none;
  background-color: white;
  width: 674px;
  height: 33px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;
