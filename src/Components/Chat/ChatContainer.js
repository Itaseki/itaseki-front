import React, { useEffect, useState } from "react";
import preURL from "../../preURL/preURL";
// Components
import ChatPresenter from "./ChatPresenter";
import Token from "../Token";
// Style
import {
  ChatBottom,
  ChatInput,
  ImgBtn,
  ProfileImg,
  ProfileImgDefault,
} from "../../Style/Running";
import styled from "styled-components";
// Assets
import SendingBtn from "../../Assets/Chat_Seding_btn.png";
// Chat
import SockJs from "sockjs-client";
import { Client as StompJs } from "@stomp/stompjs";

const ChatContainer = ({ userProfileUrl }) => {
  const token = Token();

  const sock = new SockJs(preURL.preURL + "/stomp/chat");
  const client = StompJs.over(sock);
  // client.debug = () => {};

  const [contents, setContents] = useState([]);
  const [writer, setWriter] = useState(""); // TODO 로그인된 사용자 닉네임으로
  const [message, setMessage] = useState("");

  // 채팅방 개설
  /*useEffect(() => {
    axios
        .post(preURL.preURL + '/chat/room/?name=1',[])
        .then((res) => {
          console.log("👍채팅방 개설 완료", res);
        })
        .catch((err) => {
          console.log("🧨채팅방 개설 실패", err);
        })
  },[]);*/

  // 채팅방 조회
  /*useEffect(() => {
    axios
        .get(preURL.preURL + '/chat/rooms')
        .then((res) => {
          console.log("👍채팅방 조회 성공", res);
        })
        .catch((err) => {
          console.log("🧨채팅방 조회 실패", err);
        })
  },[])*/

  const roomId = "a223e2c3-e843-4d9b-af62-8421df63a3ea"; // TODO id값 고정
  useEffect(() => {
    /* connection 맺어짐 */
    client.connect({}, () => {
      console.log("STOMP Connection");

      /* subscribe(path, callback)으로 메세지를 받을 수 있음 */
      client.subscribe("/sub/chat/room/" + roomId, (chat) => {
        console.log("Get message", chat.body);
        const newMessage = JSON.parse(chat.body);
        // addMessage(newMessage);
      });

      client.send(
        "/pub/chat/enter",
        {},
        JSON.stringify({ roomId: roomId, writer: writer })
      );
    });
  }, [contents]);

  const handleEnter = (writer, message) => {
    /* send(path, header, message)로 메세지 보낼 수 있음 */
    client.send(
      "/pub/chat/message",
      {},
      JSON.stringify({ roomId: roomId, message: message, writer: writer })
    );
    setMessage("");
  };

  const addMessage = (content) => {
    console.log("addMessage");
    setContents((prev) => [...prev, content]);
  };

  // 메세지 전송
  const onSendMsg = () => {
    if (!token) {
      alert("로그인 후 이용해 주세요.");
      return;
    }
    if (!message) return;
    handleEnter(writer, message);
  };
  /*// 엔터로 메세지 전송 - 실패
  const handleKeyPress = (e) => {
    e.preventDefault();
    if(e.key === 'Enter'){
      onSendMsg();
    }
  }*/

  return (
    <Container>
      <ChatBody>
        <ChatPresenter
          contents={contents}
          writer={writer}
          writerImg={userProfileUrl}
        />
      </ChatBody>
      <ChatBottom>
        {userProfileUrl ? ( // TODO 조건 변경
          <ProfileImg src={userProfileUrl} alt="" />
        ) : (
          <ProfileImgDefault />
        )}
        <ChatInput
          placeholder="메세지를 입력하세요."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <ImgBtn
          src={SendingBtn}
          alt="전송 버튼"
          onClick={onSendMsg}
          // onKeyPress={handleKeyPress}
          style={{ cursor: "pointer" }}
        />
      </ChatBottom>
    </Container>
  );
};

export default ChatContainer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const ChatBody = styled.div`
  overflow-y: scroll;
  //height: 100%;
  height: 482px;
  display: flex;
  flex-direction: column-reverse;
`;
