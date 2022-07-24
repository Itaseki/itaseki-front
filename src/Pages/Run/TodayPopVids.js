import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import preURL from "../../preURL/preURL";
import { StyledDivColumn, StyledDivRow } from "../../Style/StyledDiv";

import Temp_gif from "../../Assets/Temp_gif.png";

const TodayPopVids = () => {
  const [popReserv, setPopReserv] = useState([
    {
      id: 1,
      title: "정형돈 특집1",
      runTime: "00:13:14",
      videUrl: "",
      count: 3,
      reservationDate: "2022-08-02",
      startTime: "15:00",
      endTime: "16:00",
    },
    {
      id: 2,
      title: "정형돈 특집2",
      runTime: "00:13:14",
      videUrl: "",
      count: 2,
      reservationDate: "2022-08-02",
      startTime: "15:00",
      endTime: "16:00",
    },
    {
      id: 3,
      title: "정형돈 특집3",
      runTime: "00:13:14",
      videUrl: "",
      count: 1,
      reservationDate: "2022-08-02",
      startTime: "15:00",
      endTime: "16:00",
    },
  ]);

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
        if (res.data.length > 0) {
          setPopReserv(res.data);
        }
      })
      .catch((err) => {
        console.error("⚠️ 인기 예약 영상 조회  ⚠️ ", err);
      });
  };
  return (
    <MainContainer>
      <TopPop>
        <Bold style={{ fontSize: 30, margin: 0 }}>1</Bold>
        <StyledDivColumn>
          <img
            src={Temp_gif}
            style={{ width: 274, height: 136, marginBottom: 10 }}
          />
          <StyledDivRow style={{ justifyContent: "space-between" }}>
            <Bold style={{ marginRight: 65 }}>{popReserv[0].title}</Bold>
            <Bold style={{ color: "#9C9C9C", fontSize: 14 }}>
              {popReserv[0].runTime.slice(4)}
            </Bold>
            <Bold style={{ color: "#C31212", fontSize: 14 }}>예약하기</Bold>
            <FontAwesomeIcon
              icon={faCheck}
              style={{
                color: "#C31212",
                fontSize: 14,
              }}
            />
            <Bold style={{ color: "#C31212", fontSize: 14 }}>
              {popReserv[0].count}
            </Bold>
          </StyledDivRow>
        </StyledDivColumn>
      </TopPop>
      <RestPop>
        <Bold style={{ fontSize: 30, margin: 0 }}>2</Bold>
        <Bold style={{ marginRight: 90 }}>{popReserv[1].title}</Bold>
        <Bold style={{ color: "#9C9C9C", fontSize: 14 }}>
          {popReserv[1].runTime.slice(4)}
        </Bold>
        <Bold style={{ color: "#C31212", fontSize: 14 }}>예약하기</Bold>
        <FontAwesomeIcon
          icon={faCheck}
          style={{
            color: "#C31212",
            fontSize: 14,
          }}
        />
        <Bold style={{ color: "#C31212", fontSize: 14 }}>
          {popReserv[1].count}
        </Bold>
      </RestPop>
      <RestPop>
        <Bold style={{ fontSize: 36, margin: 0 }}>3</Bold>
        <Bold style={{ marginRight: 100 }}>{popReserv[2].title}</Bold>
        <Bold style={{ color: "#9C9C9C", fontSize: 14 }}>
          {popReserv[2].runTime.slice(4)}
        </Bold>
        <Bold style={{ color: "#C31212", fontSize: 14 }}>예약하기</Bold>
        <FontAwesomeIcon
          icon={faCheck}
          style={{
            color: "#C31212",
            fontSize: 14,
          }}
        />
        <Bold style={{ color: "#C31212", fontSize: 14 }}>
          {popReserv[2].count}
        </Bold>
      </RestPop>
    </MainContainer>
  );
};

export default TodayPopVids;

const MainContainer = styled.div`
  width: 380px;
  height: 460px;
  z-index: 2;
  position: relative;
  top: 130px;
  left: 515px;
`;

const TopPop = styled(StyledDivRow)`
  width: 380px;
  margin-bottom: 80px;
  justify-content: space-around;
  align-items: center;
`;

const Bold = styled.p`
  font-weight: bold;
  margin: 0px;
`;

const RestPop = styled(StyledDivRow)`
  justify-content: space-between;
  width: 320px;
  padding-left: 37px;
`;
