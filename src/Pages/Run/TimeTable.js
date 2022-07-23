import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  StyledDiv,
  StyledDivColumn,
  StyledDivRow,
} from "../../Style/StyledDiv";

import Ticket from "../../Assets/Ticket.png";
import Main_logo from "../../Assets/Main_logo.png";

import { light } from "../../Style/Color";
import StyledBtn from "../../Style/StyledBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import preURL from "../../preURL/preURL";
import axios from "axios";

const TimeTable = () => {
  const [year, setYear] = useState("2022");
  const [month, setMonth] = useState("07");
  const [date, setDate] = useState("24");
  const [todayData, setTodayData] = useState([
    {
      reservationId: 3,
      videoId: 1,
      title: "정형돈 특집",
      reservationDate: "2022-05-24",
      startTime: "15:00",
      endTime: "16:00",
    },
    {
      reservationId: 3,
      videoId: 1,
      title: "정형돈 특집",
      reservationDate: "2022-05-24",
      startTime: "15:00",
      endTime: "16:00",
    },
    {
      reservationId: 3,
      videoId: 1,
      title: "정형돈 특집",
      reservationDate: "2022-05-24",
      startTime: "15:00",
      endTime: "16:00",
    },
    {
      reservationId: 3,
      videoId: 1,
      title: "정형돈 특집",
      reservationDate: "2022-05-24",
      startTime: "15:00",
      endTime: "16:00",
    },
    {
      reservationId: 3,
      videoId: 1,
      title: "정형돈 특집",
      reservationDate: "2022-05-24",
      startTime: "15:00",
      endTime: "16:00",
    },
  ]);

  useEffect(() => {
    todayReserv();
    console.log("================[TimeTable]================");
  }, []);

  // 오늘의 예약 확정 목록 조회
  const todayReserv = () => {
    if (month < 10) {
      setMonth(`0${month}`);
    }
    if (date < 10) {
      setDate(`0${date}`);
    }
    let url = `/run/reservations/confirm?date=${year}-${month}-${date}`;
    console.log(url);
    axios
      .get(preURL.preURL + url)
      .then((res) => {
        console.log("❕오늘의 예약 확정 목록 조회❕ ", res.data);
        // setTodayData(res.data);
      })
      .catch((err) => {
        console.error("⚠️ 오늘의 예약 확정 목록 조회 ⚠️ ", err);
      });
  };

  return (
    <TimeTableWrapper>
      <Wrapper>
        <FirstContainer>
          <img src={Main_logo} alt="로고" style={{ width: 182, height: 61 }} />
          <StyledDivColumn style={{ alignItems: "center" }}>
            <StyledBtn
              style={{
                backgroundColor: "white",
                width: 136,
                height: 31.04,
                borderRadius: 21,
                color: light.colors.mainColor,
                fontSize: 14,
                fontWeight: "bold",
                marginBottom: 6,
              }}
            >
              달리기 예약하기
            </StyledBtn>
            <StyledDivRow>
              <FontAwesomeIcon
                icon={faCaretLeft}
                style={{
                  fontSize: 15,
                }}
              />
              <Day>
                {year} / {month} / {date}
              </Day>
              <FontAwesomeIcon
                icon={faCaretRight}
                style={{
                  fontSize: 15,
                }}
              />
            </StyledDivRow>
          </StyledDivColumn>
        </FirstContainer>
        <StyledDivRow style={{ width: 820 }}>
          <SecondContainer>
            <BoldTitle>예약 확정 목록</BoldTitle>
            <Line style={{ width: 182, marginBottom: 5 }} />
            {todayData.map((reserv) => {
              return (
                <ReservedBox>
                  <p style={{ fontSize: 14, margin: 0 }}>
                    {reserv.startTime}~{reserv.endTime}
                  </p>
                  <p style={{ fontSize: 14, fontWeight: "bold", margin: 0 }}>
                    {reserv.title}
                  </p>
                </ReservedBox>
              );
            })}
          </SecondContainer>
          <ThirdContainer>
            <BoldTitle>예약 대기 목록</BoldTitle>
            <Line style={{ width: 538 }} />
          </ThirdContainer>
        </StyledDivRow>
      </Wrapper>
    </TimeTableWrapper>
  );
};

export default TimeTable;

const TimeTableWrapper = styled(StyledDiv)`
  width: 1102px;
  height: 628px;
  background-image: url(${Ticket});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  left: 169px;
  top: 721px;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const Wrapper = styled(StyledDivColumn)`
  width: 820px;
  height: 535px;
  border: 4px solid ${light.colors.mainColor};
  border-radius: 17px;
`;

const FirstContainer = styled(StyledDivRow)`
  width: 795px;
  height: 103px;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 15px;
  padding-top: 15px;
  border-bottom: 4px solid ${light.colors.mainColor};
`;

const Day = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0px 5px 0px 5px;
`;

const SecondContainer = styled(StyledDivColumn)`
  width: 203px;
  height: 415px;
  align-items: center;
  border-right: 4px solid ${light.colors.mainColor};
`;

const BoldTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

const Line = styled.div`
  border-bottom: 1px solid black;
`;

const ReservedBox = styled(StyledDivColumn)`
  width: 136px;
  height: 50.04px;
  justify-content: center;
  align-items: center;
  background-color: #e37958;
  border-radius: 21px;
  margin: 5px;
`;

const ThirdContainer = styled(StyledDivColumn)`
  width: 614px;
  height: 415px;
  align-items: center;
`;
