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
import {
  faCaretLeft,
  faCaretRight,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import preURL from "../../preURL/preURL";
import axios from "axios";

const TimeTable = (props) => {
  const [year, setYear] = useState("2022");
  const [month, setMonth] = useState("7");
  const [date, setDate] = useState("28");
  const [todayData, setTodayData] = useState([
    {
      reservationId: 3,
      videoId: 1,
      title: "테스트 영상 등록",
      reservationDate: "2022-05-27",
      startTime: "12:20",
      endTime: "12:40",
    },
    {
      reservationId: 3,
      videoId: 1,
      title: "정형돈 특집",
      reservationDate: "2022-05-27",
      startTime: "15:00",
      endTime: "15:30",
    },
  ]);

  let arr = [];

  const [timeZone, setTimeZone] = useState([1, 2, 3]);
  const [timeBlocks1, setTimeBlocks1] = useState([]);
  const [timeBlocks2, setTimeBlocks2] = useState([]);
  const [timeBlocks3, setTimeBlocks3] = useState([]);

  const [searchTimezone, setSearchTimezone] = useState("");
  const [searchStart, setSearchStart] = useState("");
  const [searchEnd, setSearchEnd] = useState("");

  const [timeData, setTimeData] = useState([]);
  const [isTimeData, setisTimeData] = useState(false);

  useEffect(() => {
    todayReserv();
    console.log("================[TimeTable]================");
  }, []);

  useEffect(() => {
    timeSelect();
  }, [timeZone]);

  // 오늘의 예약 확정 목록 조회
  const todayReserv = () => {
    if (parseInt(month) < 10) {
      setMonth(`0${month}`);
    }
    if (date < 10) {
      setDate(`0${date}`);
    }
    let url = `/run/reservations/confirm?date=${year}-0${month}-27`;
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

  // 시간 만들기
  const timeSelect = () => {
    let mins = [":00", ":10", ":20", ":30", ":40", ":50"];
    let times1 = [];
    let times2 = [];
    let times3 = [];
    mins.map((t) => {
      times1.push(`${timeZone[0]}${t}`);
    });
    mins.map((t) => {
      times2.push(`${timeZone[1]}${t}`);
    });
    mins.map((t) => {
      times3.push(`${timeZone[2]}${t}`);
    });
    console.log(times1, times2, times3);
    setTimeBlocks1(times1);
    setTimeBlocks2(times2);
    setTimeBlocks3(times3);
  };

  const ChangeColor = (e) => {
    console.log(e.target.id); // 블록의 id 값
    let time = e.target.id;
    let timeSplit = time.split("");
    if ((timeSplit[1] = ":")) {
      time = `0${time}`;
    }
    let timevar = time.replace(":", "+");
    arr = searchTimezone.concat(timevar);
    console.log("선택된 시간대 :", arr);
    setSearchTimezone(arr);
    // arr.sort(function(a, b) {
    //   return b - a;
    // });
    setSearchStart(arr[0]);
    setSearchEnd(arr[arr.length - 1]);
    document.getElementById(e.target.id).style.backgroundColor = "#E8A284";
    searchTimetable();
  };

  // 시간별 예약 내역 조회
  const searchTimetable = () => {
    setTimeData([
      {
        id: 1,
        title: "[런닝맨] 흔한 반응 | RunningMan EP.170",
        reservationDate: "2022-07-27",
        startTime: "1:10",
        endTime: "1:20",
        runTime: "00:13:04",
        count: 3,
      },
    ]);
    setisTimeData(true);
    let url =
      preURL.preURL +
      `/run/reservations?start=${searchStart}&end=${searchEnd}&select=${searchTimezone.toString()}&date=${year}-${month}-${date}`;
    console.log(url);
    axios
      .get(url)
      .then((res) => {
        console.log("❕시간별 예약 내역 조회❕ ", res.data);
        // setTimeData(res.data)
        // setisTimeData(true);
      })
      .catch((err) => {
        console.error("⚠️ 시간별 예약 내역 조회 ⚠️ ", err);
      });
  };

  // 시간대 당기기
  const minusTime = () => {
    let arr = [];
    {
      timeZone.map((t) => {
        t = t - 3;
        arr.push(t);
        console.log(arr);
      });
    }
    setTimeZone(arr);
  };

  // 시간대 늦추기
  const plusTime = () => {
    let arr = [];
    timeZone.map((t) => {
      t = t + 3;
      arr.push(t);
      console.log(arr);
    });
    setTimeZone(arr);
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
              onClick={() => props.setPop(true)}
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
                <ReservedBox
                  onClick={() => {
                    props.setConfirmed(true);
                    props.setReservId(reserv.reservationId);
                    props.setDetailPop(true);
                  }}
                >
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
            <StyledDivRow>
              <StyledBtn
                onClick={() => {
                  minusTime();
                }}
              >
                <FontAwesomeIcon
                  icon={faCaretLeft}
                  style={{
                    fontSize: 15,
                  }}
                />
              </StyledBtn>
              <StyledDivColumn style={{ margin: 15 }}>
                <TimeBlocks>
                  {timeBlocks1.map((b) => {
                    return (
                      <TimeBlock id={b} onClick={ChangeColor}>
                        {b}
                      </TimeBlock>
                    );
                  })}
                </TimeBlocks>
                <TimeBlocks>
                  {timeBlocks2.map((b) => {
                    return (
                      <TimeBlock id={b} onClick={ChangeColor}>
                        {b}
                      </TimeBlock>
                    );
                  })}
                </TimeBlocks>
                <TimeBlocks>
                  {timeBlocks3.map((b) => {
                    return (
                      <TimeBlock id={b} onClick={ChangeColor}>
                        {b}
                      </TimeBlock>
                    );
                  })}
                </TimeBlocks>
              </StyledDivColumn>
              <StyledBtn onClick={() => setTimeZone((prev) => prev - 1)}>
                <FontAwesomeIcon
                  icon={faCaretRight}
                  style={{
                    fontSize: 15,
                  }}
                  onClick={() => {
                    plusTime();
                  }}
                />
              </StyledBtn>
            </StyledDivRow>
            {isTimeData ? (
              <StyledDivColumn>
                {timeData.map((d) => {
                  return (
                    <StyledDivRow>
                      <p style={{ fontWeight: "bold" }}>
                        {d.startTime} - {d.endTime}
                      </p>
                      <FontAwesomeIcon
                        icon={faCheck}
                        style={{
                          color: `${light.colors.mainColor}`,
                          marginLeft: 15,
                          marginRight: 15,
                        }}
                      />
                      <p
                        style={{
                          fontWeight: "bold",
                          backgroundColor: "white",
                          padding: 7,
                          paddingRight: 30,
                          borderRadius: 8,
                        }}
                      >
                        {d.title}
                      </p>
                    </StyledDivRow>
                  );
                })}
              </StyledDivColumn>
            ) : (
              <></>
            )}
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

const ReservedBox = styled(StyledBtn)`
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

const TimeBlocks = styled(StyledDivRow)`
  justify-content: center;
  align-items: center;
`;

const TimeBlock = styled(StyledBtn)`
  justify-content: center;
  align-items: center;
  width: 73.42px;
  height: 41.14px;
  background: #f5f5f5;
  margin: 3px;
`;
