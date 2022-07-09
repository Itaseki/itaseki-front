import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import Header from "../../Components/Header";
import {
  Body,
  ChatBody,
  ChatBottom,
  ChatInput,
  Chatting,
  ExitBtn, HeadBtns, ImgBtn,
  Inform, Information, Switch,
  TopBar,
  Video,
  Wrapper
} from "../../Style/Running";
import Exit_Light from "../../Assets/Exit_Light.png";
import Exit_Dark from "../../Assets/Exit_Dark.png";
import Switch_Light from "../../Assets/Switch_Light.png";
import Switch_Dark from "../../Assets/Switch_Dark.png";
import ChatInformIcon from "../../Assets/Chat_Inform_icon.png";
import ChatInform from "../../Assets/Chat_Inform.png";
import ChatInformArrow from "../../Assets/Chat_Inform_Arrow.png";
import SendingBtn from "../../Assets/Chat_Seding_btn.png";
import ProfileImg from "../../Assets/Basic_profile.png";

const Running = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  // 달리기방 나가기
  const onExit = () => {
    const exit = window.confirm("달리기를 중단하시겠습니까?");
    if(exit) navigate("/");
  };

  // 라이트모드/다크모드 변경
  const onSwitch = () => {
    document.documentElement.classList.toggle('dark');
    setDarkMode(prev => !prev);
  };

  // 공지사항 내용 펼치기
  const onShowInform = () => {

  }

  return (
      <div style={{marginBottom: "40px"}}>
        <Header/>
        <Wrapper>
          <HeadBtns>
          {darkMode
              ?
              <>
                <Switch src={Switch_Dark} alt="다크모드" title="라이트모드 변경" onClick={onSwitch}/>
                <ExitBtn src={Exit_Dark} alt="달리기 나가기 다크모드" onClick={onExit}/>
              </>
              :
              <>
                <Switch src={Switch_Light} alt="라이트모드" title="다크모드 변경" onClick={onSwitch}/>
                <ExitBtn src={Exit_Light} alt="달리기 나가기 라이트모드" onClick={onExit}/>
              </>
          }
          </HeadBtns>
          <Body>
            <Video>{"영상"}</Video>
            <Chatting darkMode={darkMode}>
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
                <ImgBtn src={ProfileImg} alt="프로필 이미지"/>  {/*임시 프로필 이미지*/}
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