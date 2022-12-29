import styled from "styled-components";
import StyledBtn from "./StyledBtn";

export const Wrapper = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #000000;
  padding: 3%;
  width: 55%;
  height: 80%;

  box-sizing: border-box;
  border: 6px dashed #ffffff;
  border-radius: 50px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoDetail = styled.div`
  display: flex;
  flex-direction: row;

  &div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  &p {
    font-size: 40px;
    font-weight: bold;
    color: white;
    margin: 0px;
    margin-right: 15px;
  }
`;

export const Detail = styled.p`
  color: #9c9c9c;
  font-size: 14;
  margin-right: 10px;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TagWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const Tag = styled.p`
  color: white;
  font-size: 24;
  font-weight: bold;
  margin: 0px 5px 0px 5px;
`;

export const Btns = styled(StyledBtn)`
  width: 146px;
  height: 58px;
  background-color: ${(props) => props.bgColor};
  border-radius: 29px;
  margin: 10px;
  margin-right: 50px;
  padding-left: 25px;
  padding-right: 25px;
  background: #ffffff;
  border: 5px dashed #000000;
  border-radius: 29px;
`;

export const DeleteBtn = styled(StyledBtn)`
  background-color: none;
  color: white;
  font-size: 16px;
  position: relative;
  right: -320px;
`;
