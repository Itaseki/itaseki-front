import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import preURL from "../../preURL/preURL";
// Components
import Header from "../../Components/Header";
import Token from "../../Components/Token";
import YoutubeIframe from "../../Components/Video/YoutubeIframe";
// Style
import {
  Body,
  ChatBody,
  ChatBottom,
  ChatInput,
  Chatting,
  ExitBtn, HeadBtns, ImgBtn,
  Inform, Information, InformHeader, ProfileImg, ProfileImgDefault, Switch,
  TopBar,
  Video,
  Wrapper
} from "../../Style/Running";
// Assetes
import Exit_Light from "../../Assets/Exit_Light.png";
import Exit_Dark from "../../Assets/Exit_Dark.png";
import Switch_Light from "../../Assets/Switch_Light.png";
import Switch_Dark from "../../Assets/Switch_Dark.png";
import ChatInformIcon from "../../Assets/Chat_Inform_icon.png";
import ChatInform from "../../Assets/Chat_Inform.png";
import ChatInformArrow from "../../Assets/Chat_Inform_Arrow.png";
import SendingBtn from "../../Assets/Chat_Seding_btn.png";
import Profile_Img from "../../Assets/Basic_profile.png";

/*
import SockJs from "sockjs-client";
import StompJs from "stompjs";


const sock = new SockJs(preURL.preURL + '/ws/chat');
const client = StompJs.over(sock);
*/

const Running = () => {
  const navigate = useNavigate();
  const token = Token();

  const [darkMode, setDarkMode] = useState(false);
  const [showInformModal, setShowInformModal] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [userProfileUrl, setUserProfileUrl] = useState(Profile_Img);

  // 달리기방 영상정보 및 사용자 정보 가져오기
  useEffect(() => {
    axios
        .get(preURL.preURL + '/running', {
          headers: {
            'itasekki': token,
          }
        })
        .then((res) => {
          console.log("👍달리기방 데이터 로드 성공", res);
          const data = res.data;
          setVideoUrl(data['videoUrl']);
          setUserProfileUrl(data['userProfileUrl']);
        })
        .catch((err) => {
          console.log("🧨달리기방 데이터 로드 실패", err);
        })
  },[]);


/*
  useEffect(() => {
    console.log(client);
    client.connect((res) => {
      try{
        console.log('connect', res);
      } catch(err) {
        console.log(err);
      }
    })
  },[]);
*/


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

  return (
      <div style={{marginBottom: "40px"}}>
        <Header darkMode={darkMode}/>
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
            <Video>
              {videoUrl &&
                  <YoutubeIframe url={videoUrl} width="100%" height="100%" style={{position: "absolute"}}/>}
            </Video>
            <Chatting darkMode={darkMode}>
              <TopBar />
                <Inform>
                  <InformHeader>
                  <img src={ChatInformIcon} alt="공지사항 아이콘"/>
                  <img src={ChatInform} alt="공지사항 확인하기"/>
                  <img src={ChatInformArrow} alt="공지사항 화살표"
                       style={{cursor: "pointer"}}
                       onClick={() => setShowInformModal(prev => !prev)}/>
                  </InformHeader>
                  <Information show={showInformModal}>
                    <p>'텔레이나' 회원은 신고 기능을 통해 스팸 또는 악성 채팅을 신고할 수 있습니다. 충분한 수의 사용자가 채팅을 신고하면, 해당 사용자는 회원 정지 이후 탈퇴 처리가 됩니다.</p>
                    <p>단, 이를 악용할 시 신고자 또한 텔레이나의 이용이 제한될 수 있습니다.</p>
                  </Information>
                </Inform>
              <ChatBody>{"채팅 내용, 임시 border"}</ChatBody>
              <ChatBottom>
                {userProfileUrl
                    ? <ProfileImg src={userProfileUrl} alt=""/>
                    : <ProfileImgDefault />
                }
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