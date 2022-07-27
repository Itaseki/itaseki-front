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
  position: relative;
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
  margin: 5px;
  background-color: #E8E8E8;
`

export const InformHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 3px;
  
`

export const Information = styled.div`
  position: absolute;
  // 수정 필요(임시)
  width: 27.65%;
  visibility: ${props => props.show? "visible" : "hidden"};
  // display: ${props => props.show? "contents" : "none"};  // 원래 의도
  background-color: #E8E8E8;
  & > p{
    padding: 0 10px;
    font-weight: bold;
  }
`

export const Chat = styled.div`
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

export const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: gray;
`

export const ProfileImgDefault = styled.div`
  width: 40px;
  height: 30px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: gray;
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
  width: 70%;
  height: 0;
  padding: 4%;
  margin: 0 5px;
`