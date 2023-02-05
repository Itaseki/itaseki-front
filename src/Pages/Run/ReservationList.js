import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import preURL from "../../preURL/preURL";
import axios from "axios";
import { faCarrot } from "@fortawesome/free-solid-svg-icons";
import {
  GuideBtn,
  NextVideo,
  NextVidTimeBox,
  NextVidTitleBox,
  ReservBtn,
  RunBtn,
  Wrapper,
} from "../../Style/ReservationList";

// assets
import Temp from "../../Assets/Temp_gif.png";
import Run from "../../Assets/Run_Btn_Round.png";

import { Link } from "react-router-dom";
import { NextVidTest, PopVidsTest } from "../../TestData/ReservTest";
import { StyledDivColumn, StyledDivRow } from "../../Style/StyledDiv";
import Token from "../../Components/Token";

const ReservationListWrapper = (props) => {
  const [next, setNext] = useState(true);
  const [nextData, setNextData] = useState(NextVidTest);
  const [popVids, setPopVids] = useState(PopVidsTest);

  let hour = "";
  let min = "";

  let timeLeftMin = 0;
  let timeLeftSec = 0;

  const [clock, setClock] = useState("");

  const token = Token();

  useEffect(() => {
    getNextVideo();
    Time();
    console.log("================[ReservationList]================");
    console.log(hour, min, timeLeftMin, timeLeftSec);
  }, []);

  // 1초마다 시간 갱신
  useEffect(() => {
    let timer = setInterval(() => {
      Time();
    }, 1000);

    return () => clearInterval(timer);
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

    hour = parseInt(nextData.startTime.substring(0, 2));
    min = parseInt(nextData.startTime.substring(3, 5));

    let startTime = min * 60;
    let nowTime = now.getMinutes() * 60 + now.getSeconds();
    let timeLeftHour = hour - now.getHours();
    let timeLeft = startTime - nowTime;

    timeLeftMin = Math.floor(timeLeft / 60);
    timeLeftSec = Math.floor(timeLeft % 60);
    let isTimeLeft = timeLeftHour * 60 + timeLeftMin;
    console.log(isTimeLeft);
    // 예약 시간까지 한 시간도 안 남았을 경우
    if (isTimeLeft < 60) {
      setClock(`${timeLeftMin}분 ${timeLeftSec}초 후 달릴 영상`);
    } else {
      // 예약 시간까지 한 시간 이상 남았을 경우'
      setClock(`${hour}시 ${min}분에 달릴 영상`);
    }
  }

  const onLike = (p) => {
    axios
      .post(
        preURL.preURL + "/run/reservations",
        {
          id: p.id,
          reservationDate: p.reservationDate,
          startTime: p.startTime,
          endTime: p.endTime,
        },
        {
          headers: {
            ITTASEKKI: token,
          },
        }
      )
      .then((res) => {
        console.log("❕영상 달리기 예약 등록❕ ", res.data);
        alert("예약이 등록되었습니다!");
      })
      .catch((err) => {
        console.error("⚠️ 영상 달리기 예약 등록  ⚠️ ", err);
      });
    getNextVideo();
  };

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
          <NextVidTimeBox>{clock}</NextVidTimeBox>
          <ReservBtn onClick={() => onLike(nextData)}>
            예약
            <FontAwesomeIcon
              icon={faCarrot}
              style={{ fontSize: "150%", marginLeft: 10, marginRight: 5 }}
            />
            {nextData.Long}
          </ReservBtn>
        </StyledDivColumn>
        <StyledDivColumn>
          <NextVideo src={Temp} />
          <StyledDivRow style={{ height: "100%", alignItems: "center" }}>
            <NextVidTitleBox>
              <span>{nextData.title}</span>
              <span>{nextData.runTime}</span>
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
