import styled from "styled-components";
import { light } from "./Color";

export const Wrapper = styled.div`
  margin: 1.25rem;
`;

export const HeadBtns = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0.625rem;
`;

export const Switch = styled.img`
  cursor: pointer;
  width: 3.3125rem;
  height: 3.3125rem;
`;

export const ExitBtn = styled.img`
  cursor: pointer;
  width: 1.875rem;
  height: 1.875rem;
`;

export const Body = styled.div`
  display: flex;
`;

export const Video = styled.div`
  width: 70%;
  height: 0;
  position: relative;
  padding-bottom: 27.44%;
  margin: 0.625rem;
  background-color: gray;
`;

export const Chatting = styled.div`
  width: 30%;
  margin: 0.625rem;
  background-color: ${(props) => (props.darkMode ? "black" : "white")};
  display: flex;
  flex-direction: column;
`;

export const TopBar = styled.div`
  background-color: #f0cbcd;
  height: 1.375rem;
`;

export const Inform = styled.div`
  margin: 0.3125rem;
  background-color: ${light.colors.lightGray};
`;

export const InformHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #f6e8d6;
  height: 1.875rem;
  padding: 0.375rem;
  font-family: EF_Diary;
  font-size: 0.9375rem;
`;

export const Information = styled.div`
  position: absolute;
  background-color: ${light.colors.lightGray};

  // TODO
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  // display: ${(props) => (props.show ? "contents" : "none")};  // 원래 의도
  & > p {
    padding: 0 0.625rem;
    font-weight: bold;
  }
`;

export const Chat = styled.div`
  height: 100%;
  padding: 0.3125rem;
`;

export const ChatBottom = styled.div`
  display: flex;
  align-items: center;
  padding: 0.3125rem;
  margin: 0.1875rem 0;
`;

export const ProfileImg = styled.img`
  width: 1.875rem;
  height: 1.875rem;
  margin: 0 0.3125rem;
  border-radius: 50%;
  background-color: gray;
`;

export const ProfileImgDefault = styled.div`
  width: 2.5rem;
  height: 1.875rem;
  margin: 0 0.3125rem;
  border-radius: 50%;
  background-color: gray;
`;

export const ImgBtn = styled.img`
  width: 1.875rem;
  height: 1.875rem;
  margin: 0 0.3125rem;
`;

export const ChatInput = styled.input`
  background-color: #f0cbcd;
  border: none;
  border-radius: 4.4375rem;
  width: 70%;
  height: 0;
  padding: 0.625rem;
  margin: 0 0.3125rem;
`;
