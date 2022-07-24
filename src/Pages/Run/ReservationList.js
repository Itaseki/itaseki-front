import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import preURL from "../../preURL/preURL";
import axios from "axios";
import StyledBtn from "../../Style/StyledBtn";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import {
  StyledDiv,
  StyledDivColumn,
  StyledDivRow,
} from "../../Style/StyledDiv";
import { light } from "../../Style/Color";

// assets
import Temp from "../../Assets/Temp_gif.png";
import Guide from "../../Assets/Guide.png";
import Line1 from "../../Assets/Line1.png";
import Enter from "../../Assets/Enter.png";
import Line2 from "../../Assets/Line2.png";
import Line3 from "../../Assets/Line3.png";
import Best_Video from "../../Assets/Best_Video.png";
import Line4 from "../../Assets/Line4.png";
import { Link } from "react-router-dom";
import Nothing from "../../Assets/Nothing.png";
import TodayPopVids from "./TodayPopVids";

const color = light.colors;

const ReservationListWrapper = () => {
  const [next, setNext] = useState(true);
  const [nextData, setNextData] = useState({
    reservationId: 3,
    videoId: 1,
    title: "정형돈 특집",
    runTime: "00:13:04",
    videoUrl: "",
    Long: 3,
    reservationDate: "2022-05-24",
    startTime: "20:45",
  });
  const [popVids, setPopVids] = useState([
    { image: Temp, title: "런닝맨 유재석", length: "13:22", reservation: 3 },
    { title: "런닝맨 송지효", length: "13:22", reservation: 2 },
    { title: "런닝맨 김종국", length: "13:22", reservation: 1 },
  ]);

  const [hourLeft, setHourLeft] = useState(false);
  const [doInterval, setDoInterval] = useState(false);

  // if (doInterval === true) {
  //   setInterval(() => NextVideo(), 1000);
  // }

  useEffect(() => {
    nextVideo();
    // NextVideo();
    console.log("================[ReservationList]================");
  }, []);

  // 다음 달리기 영상 조회
  const nextVideo = () => {
    axios
      .get(preURL.preURL + "/run/reservations/next")
      .then((res) => {
        console.log("❕다음 달리기 영상 조회❕ ", res.data);
        if (res.data === null || "null") {
          console.log("현재 시간 이후로 예약된 내역이 없음");
          setNext(false);
        } else {
          setNext(true);
          setNextData(res.data);
        }
      })
      .catch((err) => {
        console.error("⚠️ 다음 달리기 영상 조회 ⚠️ ", err);
      });
  };

  // 시간 계산
  function NextVideo() {
    let now = new Date();

    let hour = parseInt(nextData.startTime.substring(0, 2));
    let min = parseInt(nextData.startTime.substring(3, 5));

    let runTime = nextData.runTime.substring(3);

    let startTime = min * 60;
    let nowTime = now.getMinutes() * 60 + now.getSeconds();
    let timeLeftHour = hour - now.getHours;
    let timeLeft = startTime - nowTime;

    let timeLeftMin = Math.floor(timeLeft / 60);
    let timeLeftSec = Math.floor(timeLeft % 60);

    // 예약 시간까지 한 시간도 안 남았을 경우
    if (timeLeftHour < 1) {
      setHourLeft(true);
      console.log(`남은 시간 : ${timeLeftMin}분 ${timeLeftSec}초`);
      setDoInterval(true);
    } else {
      // 예약 시간까지 한 시간 이상 남았을 경우
      setHourLeft(false);
    }
    return (
      <NextVideoContainer>
        {!hourLeft ? (
          // 예약 시간까지 한 시간도 안 남았을 경우
          <WhiteText>
            {timeLeftMin}분 {timeLeftSec}초 후 달릴 영상
          </WhiteText>
        ) : (
          // 예약 시간까지 한 시간 이상 남았을 경우
          <WhiteText>
            {hour}시 {min}분에 달릴 영상
          </WhiteText>
        )}
        <WhiteText>{nextData.title}</WhiteText>
        <WhiteText>{runTime}</WhiteText>
        <FontAwesomeIcon
          icon={faCheck}
          style={{
            color: "red",
          }}
        />
        <WhiteText style={{ color: "red" }}>{nextData.Long}</WhiteText>
      </NextVideoContainer>
    );
  }

  return (
    <Wrapper>
      <img
        src={Guide}
        alt="guide"
        style={{
          height: 85,
          width: 98,
          position: "absolute",
          left: 297,
          top: 214,
        }}
      />
      <img
        src={Line1}
        alt="line1"
        style={{ width: 13, position: "absolute", left: 395, top: 259 }}
      />
      <Link to="/running">
        <img
          src={Enter}
          alt="enter"
          style={{
            height: 56,
            width: 190,
            position: "absolute",
            left: 408,
            top: 228,
          }}
        />
      </Link>
      <img
        src={Line2}
        alt="line2"
        style={{ width: 172, position: "absolute", left: 598, top: 259 }}
      />
      {next ? (
        // NextVideo()
        <></>
      ) : (
        <NothingContainer>
          <p style={{ fontSize: 14, fontWeight: "bold", color: "white" }}>
            영상을 예약해보세요
          </p>
        </NothingContainer>
      )}
      <img
        src={Line3}
        alt="line3"
        style={{ position: "absolute", left: 732, top: 369 }}
      />
      <img
        src={Line3}
        alt="line3"
        style={{ position: "absolute", left: 732, top: 563 }}
      />
      <img
        src={Best_Video}
        alt="line4"
        style={{
          height: 450,
          width: 445,
          position: "absolute",
          left: 767,
          top: 163,
        }}
      />
      <img
        src={Line4}
        alt="line4"
        style={{
          height: 120,
          width: 19,
          position: "absolute",
          left: 1010,
          top: 604,
        }}
      />
      {/* <FontAwesomeIcon
        icon={faCheck}
        style={{
          fontSize: 14,
          color: "#532A6B",
        }}
      /> */}
      <TodayPopVids />
    </Wrapper>
  );
};

export default ReservationListWrapper;

const Wrapper = styled(StyledDivRow)`
  margin-left: 20%;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const NothingContainer = styled(StyledDiv)`
  background-image: url(${Nothing});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 435px;
  height: 288px;
  position: absolute;
  left: 297px;
  top: 316px;
  border-radius: 10px;
`;

const NextVideoContainer = styled(StyledDivColumn)`
  background-color: black;
  width: 435px;
  height: 288px;
  position: absolute;
  left: 297px;
  top: 316px;
  border-radius: 10px;
`;

const WhiteText = styled.p`
  color: white;
  font-size: 14;
  font-weight: bold;
`;
