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

const TodayPopVids = () => {
  const [popReserv, setPopReserv] = useState(TodayPopVidsTest);
  const [like1, setLike1] = useState(popReserv[0].count);
  const [like2, setLike2] = useState(popReserv[1].count);
  const [like3, setLike3] = useState(popReserv[2].count);

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

  const reservPop = (n) => {
    if (n === 0) {
      setLike1((prev) => prev + 1);
    } else if (n === 1) {
      setLike2((prev) => prev + 1);
    } else if (n === 2) {
      setLike3((prev) => prev + 1);
    }
    alert(`${popReserv[n].title} 예약 추가되었습니다.`);
  };

  return (
    <MainContainer>
      <Num>1</Num>
      <PopVidContainer>
        <PopVidImg />
        <PopVidInfoContainer>
          <PopVidInfo></PopVidInfo>
          <PopVidTime></PopVidTime>
        </PopVidInfoContainer>
        <ReservBtnContainer>
          <ReservBtn>
            예약
            <IconCarrot icon={faCarrot} />5
          </ReservBtn>
        </ReservBtnContainer>
      </PopVidContainer>
      <Num>2</Num>
      <PopVidContainer>
        <PopVidImg />
        <PopVidInfoContainer>
          <PopVidInfo></PopVidInfo>
          <PopVidTime></PopVidTime>
        </PopVidInfoContainer>
        <ReservBtnContainer>
          <ReservBtn>
            예약
            <IconCarrot icon={faCarrot} />5
          </ReservBtn>
        </ReservBtnContainer>
      </PopVidContainer>
      <Num>3</Num>
      <PopVidContainer>
        <PopVidImg />
        <PopVidInfoContainer>
          <PopVidInfo></PopVidInfo>
          <PopVidTime></PopVidTime>
        </PopVidInfoContainer>
        <ReservBtnContainer>
          <ReservBtn>
            예약
            <IconCarrot icon={faCarrot} />5
          </ReservBtn>
        </ReservBtnContainer>
      </PopVidContainer>
    </MainContainer>
  );
};

export default TodayPopVids;
