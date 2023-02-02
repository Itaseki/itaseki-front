import axios from "axios";
import React, { useEffect, useState } from "react";
import preURL from "../../preURL/preURL";
import {
  IconCarrot,
  MainContainer,
  Num,
  PopVidContainer,
  PopVidImg,
  PopVidInfo,
  PopVidInfoContainer,
  PopVidTime,
  ReservBtn,
  ReservBtnContainer,
} from "../../Style/TodayPopVids";
import { TodayPopVidsTest } from "../../TestData/ReservTest";
import { faCarrot } from "@fortawesome/free-solid-svg-icons";
import Token from "../../Components/Token";

const TodayPopVids = () => {
  const [popReserv, setPopReserv] = useState(TodayPopVidsTest);

  const token = Token();

  useEffect(() => {
    console.log(
      "==========================[TodayPopVids]=========================="
    );
    popReservs();
  }, []);

  // 인기 예약 영상 조회
  const popReservs = () => {
    axios
      .get(preURL.preURL + "/run/reservations/best")
      .then((res) => {
        console.log("❕인기 예약 영상 조회❕ ", res.data);
        if (res.data.length > 0 && res.data !== undefined) {
          setPopReserv(res.data);
        }
      })
      .catch((err) => {
        console.error("⚠️ 인기 예약 영상 조회  ⚠️ ", err);
      });
  };

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
      })
      .catch((err) => {
        console.error("⚠️ 영상 달리기 예약 등록  ⚠️ ", err);
      });
    popReservs();
  };

  return (
    <MainContainer>
      <Num>1</Num>
      <PopVidContainer>
        <PopVidImg />
        <PopVidInfoContainer>
          <PopVidInfo>{popReserv[0].title}</PopVidInfo>
          <PopVidTime>{popReserv[0].runTime}</PopVidTime>
        </PopVidInfoContainer>
        <ReservBtnContainer onClick={() => onLike(popReserv[0])}>
          <ReservBtn>
            예약
            <IconCarrot icon={faCarrot} />
            {popReserv[0].count}
          </ReservBtn>
        </ReservBtnContainer>
      </PopVidContainer>
      <Num>2</Num>
      <PopVidContainer>
        <PopVidImg />
        <PopVidInfoContainer>
          <PopVidInfo>{popReserv[1].title}</PopVidInfo>
          <PopVidTime>{popReserv[2].runTime}</PopVidTime>
        </PopVidInfoContainer>
        <ReservBtnContainer onClick={() => onLike(popReserv[1])}>
          <ReservBtn>
            예약
            <IconCarrot icon={faCarrot} />
            {popReserv[1].count}
          </ReservBtn>
        </ReservBtnContainer>
      </PopVidContainer>
      <Num>3</Num>
      <PopVidContainer>
        <PopVidImg />
        <PopVidInfoContainer>
          <PopVidInfo>{popReserv[2].title}</PopVidInfo>
          <PopVidTime>{popReserv[2].runTime}</PopVidTime>
        </PopVidInfoContainer>
        <ReservBtnContainer onClick={() => onLike(popReserv[2])}>
          <ReservBtn>
            예약
            <IconCarrot icon={faCarrot} />
            {popReserv[2].count}
          </ReservBtn>
        </ReservBtnContainer>
      </PopVidContainer>
    </MainContainer>
  );
};

export default TodayPopVids;
