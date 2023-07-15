import styled from "styled-components";
import StyledBtn from "./StyledBtn";

export const Wrapper = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #000000;
  padding: 1.875rem;
  width: 34.375rem;
  height: 48%;

  box-sizing: border-box;
  border: 0.375rem dashed #ffffff;
  border-radius: 3.125rem;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoDetail = styled.div`
  display: flex;
  flex-direction: row;

  & div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  & p {
    font-size: 2.5rem;
    font-weight: bold;
    color: white;
    margin: 0;
    margin-right: 0.9375rem;
  }
`;

export const Detail = styled.p`
  color: #9c9c9c;
  font-size: 0.875rem;
  margin-right: 0.625rem;
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
  margin-top: 1.875rem;
  margin-bottom: 1.875rem;
`;

export const Tag = styled.p`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 0.3125rem;
`;

export const Btns = styled(StyledBtn)`
  width: 9.125rem;
  height: 3.625rem;
  background-color: ${(props) => props.bgColor};
  border-radius: 1.4375rem;
  margin: 0.625rem;
  margin-right: 3.125rem;
  padding-left: 1.5625rem;
  padding-right: 1.5625rem;
  background: #ffffff;
  border: 0.9375rem dashed #000000;
  border-radius: 1.4375rem;
`;

export const DeleteBtn = styled(StyledBtn)`
  background-color: none;
  color: white;
  font-size: 1rem;
  position: relative;
  right: -20rem;
`;
