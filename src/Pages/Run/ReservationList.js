import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import preURL from "../../preURL/preURL";
import axios from "axios";
import { faCarrot, faCheck } from "@fortawesome/free-solid-svg-icons";
import {
  GuideBtn,
  NextVideo,
  NextVidTimeBox,
  NextVidTitleBox,
  ReservBtn,
  RunBtn,
  WhiteText,
  Wrapper,
} from "../../Style/ReservationList";

// assets
import Temp from "../../Assets/Temp_gif.png";
import Run from "../../Assets/Run_Btn_Round.png";

import { Link } from "react-router-dom";
import { NextVidTest, PopVidsTest } from "../../TestData/ReservTest";
import { StyledDivColumn, StyledDivRow } from "../../Style/StyledDiv";

const ReservationListWrapper = (props) => {
  const [next, setNext] = useState(true);
  const [nextData, setNextData] = useState(NextVidTest);
  const [popVids, setPopVids] = useState(PopVidsTest);

  const [hourLeft, setHourLeft] = useState(false);
  const [doInterval, setDoInterval] = useState(false);

  // if (doInterval === true) {
  //   setInterval(() => NextVideo(), 1000);
  // }

  useEffect(() => {
    getNextVideo();
    // NextVideo();
    console.log("================[ReservationList]================");
  }, []);

  // 다음 달리기 영상 조회
  const getNextVideo = () => {
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
  function Time() {
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
      <NextVideo>
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
      </NextVideo>
    );
  }

  return (
    <Wrapper>
      {/* <StyledBtn onClick={() => props.setGuidePop(true)} /> */}
      <StyledDivRow
        style={{ padding: "10% 10% 0 5%", justifyContent: "space-between" }}
      >
        <StyledDivColumn
          style={{
            heigh: "100%",
            width: 479,
            alignItems: "center",
            paddingBottom: "12%",
          }}
        >
          <GuideBtn />
          <NextVidTimeBox>00분 00초 후 달릴 영상</NextVidTimeBox>
          <ReservBtn>
            예약
            <FontAwesomeIcon
              icon={faCarrot}
              style={{ fontSize: "150%", marginLeft: 10, marginRight: 5 }}
            />
            5
          </ReservBtn>
        </StyledDivColumn>
        <StyledDivColumn>
          <NextVideo src={Temp} />
          <StyledDivRow style={{ height: "100%", alignItems: "center" }}>
            <NextVidTitleBox>
              <span>제목</span>
              <span>시간</span>
            </NextVidTitleBox>
            <Link to="/running">
              <RunBtn>
                <img src={Run} style={{ width: "80%" }} />
              </RunBtn>
            </Link>
          </StyledDivRow>
        </StyledDivColumn>
      </StyledDivRow>
    </Wrapper>
  );
};

export default ReservationListWrapper;
