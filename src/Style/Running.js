import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 20px;
`

export const HeadBtns = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 10px;
`

export const Switch = styled.img`
  cursor: pointer;
`

export const ExitBtn = styled.img`
  cursor: pointer;
`

export const Body = styled.div`
  display: flex;
`

export const Video = styled.div`
  width: 70%;
  height: 0;
  padding-bottom: 43.74%;
  margin: 10px;
  background-color: gray;
`

export const Chatting = styled.div`
  width: 30%;
  margin: 10px;
  background-color: ${props => props.darkMode? "black" : "white"};
  display: flex;
  flex-direction: column;
`

export const TopBar = styled.div`
  background-color: #F9DCA7;
  height: 22px;
`

export const Inform = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 5px;
  padding: 3px;
  background-color: #E8E8E8;
`

export const Information = styled.div`
`

export const ChatBody = styled.div`
  height: 100%;
  padding: 5px;
  border: 1px solid;
`

export const ChatBottom = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  margin: 3px 0;
`

export const ImgBtn = styled.img`
  width: 30px;
  height: 30px;
  margin: 0 5px;
`

export const ChatInput = styled.input`
  background-color: #F9DCA7;
  border: none;
  border-radius: 71px;
  width: 100%;
  height: 0;
  padding: 4%;
  margin: 0 5px;
`