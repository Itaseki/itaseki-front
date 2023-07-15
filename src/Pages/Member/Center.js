import React, { useState } from "react";
import Header from "../../Components/Header";
import { StyledDivColumn, StyledDivRow } from "../../Style/StyledDiv";
import {
  AboutBtnClicked,
  Blue,
  Btn,
  BtnImg,
  Btns,
  ContactBtnCliked,
  Orange,
  Red,
  Span,
  Wrapper,
} from "../../Style/Center";

import Rabbit_Center from "../../Assets/Rabbit_Center.png";
import About_White from "../../Assets/About_White.png";
import About_Black from "../../Assets/About_Black.png";
import Contact_White from "../../Assets/Contact_White.png";
import Contact_Black from "../../Assets/Contact_Black.png";
import About_Bear from "../../Assets/About_Bear.png";
import Guide_Rabbit from "../../Assets/Guide_Rabbit.png";
import Guide_Black from "../../Assets/Guide_Black.png";
import Mypage_eye2 from "../../Assets/Mypage_eye2.png";

const Center = () => {
  const [isAbout, setIsAbout] = useState(true);
  const [isContact, setIsContact] = useState(false);

  return (
    <Wrapper>
      <Header />
      <img src={Rabbit_Center} style={{ width: "15%" }} />
      <Btn>
        {isAbout ? (
          <AboutBtnClicked onClick={() => setIsAbout(false)}>
            <BtnImg src={About_Black} />
          </AboutBtnClicked>
        ) : (
          <Btns
            onClick={() => {
              setIsAbout(true);
              setIsContact(false);
            }}
          >
            <BtnImg src={About_White} />
          </Btns>
        )}
        {isContact ? (
          <ContactBtnCliked onClick={() => setIsContact(false)}>
            <BtnImg src={Contact_Black} />
          </ContactBtnCliked>
        ) : (
          <Btns
            onClick={() => {
              setIsContact(true);
              setIsAbout(false);
            }}
          >
            <BtnImg src={Contact_White} />
          </Btns>
        )}
      </Btn>
      {isAbout && (
        <>
          <StyledDivRow style={{ whiteSpace: "pre-wrap" }}>
            <img src={About_Bear} style={{ width: "18.75rem" }} />
            <StyledDivColumn>
              <StyledDivRow>
                <img src={About_Black} style={{ height: "3.75rem" }} />
                <Red>텔레이나</Red>
              </StyledDivRow>
              <Span>
                텔레이나는 자유롭게 예능 클립을 같이 공유하고 즐길 수 있는
                큐레이션 서비스입니다.
              </Span>
              <Span>
                텔레이나는 기존 영상 사이트에서는 할 수 없었던 이용자들의
                <Blue>자유</Blue>를 보장하고 있어요 :)
              </Span>
              <Span>01. 내 마음대로 예능 클립 제목 만들기</Span>
              <Span>
                02. 재미있어 보이는 예능 영상을 내가 원하는대로 선택해 다른
                사람들과 함께 실시간으로 채팅하며 감상하기
              </Span>
              <Span>03. 더 쉽고 더 편하게 예능 클립 플레이리스트 만들기</Span>
              <Span>
                심심한데 딱히 볼만한 재미있는 예능 클립이 안 보인다면?
                <Red>텔레이나</Red>를 이용해보세요
              </Span>
              <Span>
                01. 인기 플레이리스트를 클릭하면 그 주 인기 있었던 예능 영상
                클립들이 나타나요
              </Span>
              <Span>
                02. #해시태그를 이용해 원하는 장르와 유형의 영상만 볼 수 있어요
              </Span>
            </StyledDivColumn>
          </StyledDivRow>
          <StyledDivRow style={{ marginTop: "5%" }}>
            <StyledDivColumn>
              <StyledDivRow>
                <img src={Guide_Black} style={{ height: "3.75rem" }} />
                <Red>텔레이나를 더욱 재미있게 즐기는 방법</Red>
              </StyledDivRow>
              <Span>달리기에 참여하는 방법을 알려드릴게요!</Span>
              <Span>01 :) 원하는 예능 영상을 “예약"해서 달리기 참여하기!</Span>
              <Span>
                1. <Blue>달리기 대기 페이지</Blue>를 방문합니다.
              </Span>
              <Span>
                2. 스크롤을 내려, 달리기 예약 목록 우측에 있는
                <Orange>당근</Orange>을 눌러 예약을 진행합니다.
              </Span>
              <Span>3. 예약 진행하는 방법</Span>
              <Span>a. 영상 가져오기</Span>
              <Span>
                : 기존 영상 게시판에 업로드되어 있는 영상을 가져와 달리기 예약을
                진행합니다.
              </Span>
              <Span>b. 영상 등록하기</Span>
              <Span>
                : 내가 예약하고자 하는 예능 영상이, 미처 영상 게시판에
                업로드되어 있지 않다면 영상 게시판에 영상을 먼저 업로드한 이후,
                달리기 예약을 진행합니다.
              </Span>
              <Span>02 :) 예약 목록에 있는 영상으로 달리기에 참여하기</Span>
              <Span>
                1. <Blue>달리기</Blue> 페이지에 입장, 스크롤을 내려
                <Blue>달리기 예약 대기 목록</Blue>에 도착합니다!
              </Span>
              <Span>
                2. 예약 대기 목록에서 내가 달리고자 하는 <Blue>시간</Blue>을
                다중 <Blue>선택</Blue>하여 예약 목록을 확인합니다.
              </Span>
              <Span>
                3. 예약 목록에 함께 달리고 싶은 예능 영상이 있다면
                <Orange>미니 당근</Orange>을 눌러 예약을 추가합니다.
              </Span>
              <Span>
                4. 해당 시간대에 가장 인기 많은 예능 영상이 달릴 영상으로
                확정됩니다.
              </Span>
              <Span>
                5. 예약했던 시간에 <Blue>달리기</Blue> 페이지에 들어가, 상단의
                달릴 예능 영상을 확인 후 입장하여 달리기 시작!
              </Span>
              <Span>6. 함께 채팅을 나누며 예능 영상을 달려보세요 :)</Span>
            </StyledDivColumn>
            <img
              src={Guide_Rabbit}
              style={{ width: "20.625rem", marginBottom: "15%" }}
            />
          </StyledDivRow>
        </>
      )}
      {isContact && (
        <>
          <img src={Mypage_eye2} style={{ marginBottom: "5%" }} />
          <Span style={{ fontSize: 21 }}>이메일 문의</Span>
          <Red>ittasaekki@gmail.com</Red>
        </>
      )}
    </Wrapper>
  );
};

export default Center;
