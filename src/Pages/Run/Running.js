import React from 'react';
import {useNavigate} from "react-router-dom";
import Header from "../../Components/Header";
import {
  Body,
  ChatBody,
  ChatBottom,
  ChatInput,
  Chatting,
  ExitBtn, ImgBtn,
  Inform, Information,
  TopBar,
  Video,
  Wrapper
} from "../../Style/Running";
import Exit from "../../Assets/ExitRun.png";
import ChatInformIcon from "../../Assets/Chat_Inform_icon.png";
import ChatInform from "../../Assets/Chat_Inform.png";
import ChatInformArrow from "../../Assets/Chat_Inform_Arrow.png";
import SendingBtn from "../../Assets/Chat_Seding_btn.png";
import ProfileImg from "../../Assets/Basic_profile.png";

const Running = () => {
  const navigate = useNavigate();

  // 달리기방 나가기
  const onExit = () => {
    const exit = window.confirm("달리기를 중단하시겠습니까?");
    if(exit) navigate("/");
  };

  // 공지사항 내용 펼치기
  const onShowInform = () => {

  }

  return (
      <div style={{backgroundColor: "#F4F3EE"}}>
        <Header/>
        <Wrapper>
          <ExitBtn src={Exit} alt="달리기 나가기" onClick={onExit}/>
          <Body>
            <Video>{"영상"}</Video>
            <Chatting>
              <TopBar />
              <Inform>
                <img src={ChatInformIcon} alt="공지사항 아이콘"/>
                <img src={ChatInform} alt="공지사항 확인하기"/>
                <img src={ChatInformArrow} alt="공지사항 화살표"
                     style={{cursor: "pointer"}}
                     onClick={onShowInform}/>
                {/*<Information>공지사항 모달</Information>*/}
              </Inform>
              <ChatBody>{"채팅 내용, 임시 border"}</ChatBody>
              <ChatBottom>
                <ImgBtn src={ProfileImg} alt="프로필 이미지"/>
                <ChatInput type="text"/>
                <ImgBtn src={SendingBtn} alt="전송 버튼"/>
              </ChatBottom>
            </Chatting>
          </Body>
        </Wrapper>
      </div>
  )
}

export default Running;