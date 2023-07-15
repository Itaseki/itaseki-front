import styled from "styled-components";

// Assets
import Add_Reserv from "../Assets/Add_Reserv.png";
import StyledBtn from "./StyledBtn";
import { StyledDiv, StyledDivColumn, StyledDivRow } from "./StyledDiv";

export const Modal = styled.div`
  background-image: url(${Add_Reserv});
  position: fixed;
  top: 15%;
  bottom: 0;
  height: auto;
  width: 66.25rem;
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
  width: 24.56rem;
  text-align: start;
  padding-left: 0.63rem;
  z-index: 2;
  background-color: white;
  margin: 0;
  position: absolute;
`;

export const WhiteBoxBtn = styled(StyledBtn)`
  width: 7.81rem;
  height: 2.06rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;

  &.select {
    background-color: #e37958;
    color: white;
  }
`;

export const AddCatWrapper = styled(StyledDivRow)`
  width: 100%;
  justify-content: flex-start;
  margin-left: 10%;
`;

export const AddCat = styled(StyledBtn)`
  font-size: 1.56rem;
  padding: 0.63rem 1.25rem;
  border-radius: 0.63rem;
  font-weight: bold;
  background-color: ${(props) => (props.default ? "#EFE8CC" : "#E37958")};
`;

export const TimeInput = styled.input`
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 2.06rem;
  width: 1.94rem;
  border-radius: 0.5rem;
  font-weight: bold;
  outline: none;
  border: 0 solid black;
`;

export const TimeWBox = styled(StyledDiv)`
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 2.06rem;
  width: 1.94rem;
  border-style: none;
  border-radius: 0.5rem;
  font-weight: bold;
`;

export const Sign = styled.span`
  font-size: 2.19rem;
  font-weight: bold;
`;

export const VideoDescription = styled.p`
  border-style: none;
  background-color: white;
  width: 42.13rem;
  height: 2.06rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  padding-left: 0.63rem;
`;
