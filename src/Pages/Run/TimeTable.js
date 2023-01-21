import React, { useEffect, useState } from "react";
import axios from "axios";
import preURL from "../../preURL/preURL";

import { StyledDivColumn, StyledDivRow } from "../../Style/StyledDiv";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretLeft,
  faCaretRight,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import {
  BoldTitle,
  Day,
  FirstContainer,
  Line,
  ReservedBox,
  ReservedBtn,
  SecondContainer,
  ThirdContainer,
  TimeBlock,
  TimeBlocks,
  TimeTableWrapper,
  TitleBlock,
  Wrapper,
} from "../../Style/TimeTable";
import { TodayReservTest } from "../../TestData/ReservTest";
import { light } from "../../Style/Color";

// Assets
import Main_logo from "../../Assets/Main_logo.png";

const TimeTable = (props) => {
  let d = new Date();

  const [year, setYear] = useState(d.getFullYear());
  const [month, setMonth] = useState(d.getMonth() + 1);
  const [date, setDate] = useState(d.getDate());
  const [dateDiff, setDateDiff] = useState(1);
  const [todayData, setTodayData] = useState(TodayReservTest);

  const [timeZone, setTimeZone] = useState([0, 1, 2]);
  const [timeBlocks, setTimeBlocks] = useState([]);

  const [searchTimezone, setSearchTimezone] = useState([]);

  const [timeData, setTimeData] = useState([]);
  const [isTimeData, setisTimeData] = useState(false);

  useEffect(() => {
    todayReserv();
    calTimeZone();
    console.log("================[TimeTable]================");
  }, []);

  // 현재 날짜 -> 타임존
  let hour = d.getHours();

  const calTimeZone = () => {
    console.log(hour);
    if (hour % 3 == 0) {
      setTimeZone([hour, hour + 1, hour + 2]);
    } else if (hour % 3 == 1) {
      setTimeZone([hour - 1, hour, hour + 1]);
    } else {
      setTimeZone([hour - 2, hour - 1, hour]);
    }
  };

  // 날짜 더하고 빼기
  function calDays(date, days) {
    const clone = new Date(date);
    clone.setDate(date.getDate() + days);
    return clone;
  }

  const today = new Date();

  const addDays = () => {
    setDateDiff((prev) => prev + 1);
    let addedDate = calDays(today, dateDiff);
    addedDate.getDate() < 10
      ? setDate(`0${addedDate.getDate()}`)
      : setDate(addedDate.getDate());
    addedDate.getMonth() + 1 < 10
      ? setMonth(`0${addedDate.getMonth() + 1}`)
      : setMonth(addedDate.getMonth() + 1);

    setYear(addedDate.getFullYear());
    let t = addedDate.getHours();
    if (t % 3 == 0) {
      setTimeZone([t, t + 1, t + 2]);
    } else if (t % 3 == 1) {
      setTimeZone([t - 1, t, t + 1]);
    } else {
      setTimeZone([t - 2, t - 1, t]);
    }
  };

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
    let url = `/run/reservations/confirm?date=${year}-${month}-${date}`;
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
    let times = [];
    mins.map((t) => {
      times.push(`${timeZone[0]}${t}`);
    });
    mins.map((t) => {
      times.push(`${timeZone[1]}${t}`);
    });
    mins.map((t) => {
      times.push(`${timeZone[2]}${t}`);
    });
    setTimeBlocks(times);
    console.log("times", times);
  };

  const ChangeColor = (e) => {
    let id = e.target.id;
    let element = document.getElementById(id);

    let time = id;
    if (time.length == 4) {
      time = `0${time}`;
    }
    let timevar = time.replace(":", "+");

    if (
      window.getComputedStyle(element).backgroundColor == "rgb(245, 245, 245)"
    ) {
      ColorToOrange(timevar, id);
    } else {
      element.style.backgroundColor = "#F5F5F5";
      console.log("취소-searchTimezone: ", searchTimezone);
      let newTimeZone = searchTimezone.filter((s) => s !== timevar);
      console.log("취소-newTimeZone: ", newTimeZone);
      setSearchTimezone(newTimeZone);
    }
  };

  const ColorToOrange = (timevar, id) => {
    console.log("선택 전-searchTimezone: ", searchTimezone);
    console.log("선택된 시간:", timevar);
    let arr = [...searchTimezone, timevar];
    setSearchTimezone(arr);
    // setSearchTimezone(() => [...searchTimezone, timevar]);
    console.log("선택-newTimeZone: ", arr);

    let newArr = arr.sort((a, b) => {
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      } else {
        return 0;
      }
    });
    console.log("선택-sortedTimeZone: ", newArr);
    document.getElementById(id).style.backgroundColor = "#E8A284";
    searchTimetable(newArr);
  };

  // 시간별 예약 내역 조회
  const searchTimetable = (newArr) => {
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
      `/run/reservations?start=${newArr[0]}&end=${
        newArr[newArr.length - 1]
      }&select=${newArr.toString()}&date=${year}-${month}-${date}`;
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

  // runTime 계산하기
  let runSecs = 0;

  const runTimeToNum = (s) => {
    let hour = parseInt(s.slice(0, 2));
    let min = parseInt(s.slice(3, 5));
    let sec = parseInt(s.slice(-2));
    let runSecs = hour * 360 + min * 60 + sec;
    return runSecs;
  };

  // 시간대 당기기
  const minusTime = () => {
    let arr = [];
    console.log("originalTimeZone: ", timeZone);
    if (timeZone[0] == 0) {
      console.log("하루가 지났어요!");
      setTimeZone([21, 22, 23]);
      console.log(timeZone);
      addDays();
    } else {
      timeZone &&
        timeZone.map((t) => {
          t = t - 3;
          arr.push(t);
          console.log(arr);
          setTimeZone(arr);
        });
    }
    console.log("newTimeZone: ", timeZone);
  };

  // 시간대 늦추기
  const plusTime = () => {
    let arr = [];
    console.log("originalTimeZone: ", timeZone);
    if (timeZone[0] == 21) {
      console.log("하루가 지났어요!");
      setTimeZone([0, 1, 2]);
      console.log(timeZone);
      addDays();
    } else {
      timeZone &&
        timeZone.map((t) => {
          t = t + 3;
          arr.push(t);
          console.log(arr);
          setTimeZone(arr);
        });
    }
    console.log("newTimeZone: ", timeZone);
  };

  return (
    <TimeTableWrapper>
      <Wrapper style={{ border: `4px solid ${light.colors.mainColor}` }}>
        <FirstContainer
          style={{ borderBottom: `4px solid ${light.colors.mainColor}` }}
        >
          <img src={Main_logo} alt="로고" style={{ width: 182, height: 61 }} />
          <StyledDivColumn style={{ alignItems: "center" }}>
            <ReservedBtn
              style={{ color: light.colors.mainColor }}
              onClick={() => props.setPop(true)}
            >
              달리기 예약하기
            </ReservedBtn>
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
                onClick={() => {
                  addDays();
                }}
              />
            </StyledDivRow>
          </StyledDivColumn>
        </FirstContainer>
        <StyledDivRow style={{ width: 820 }}>
          <SecondContainer
            style={{ borderRight: `4px solid ${light.colors.mainColor}` }}
          >
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
              <FontAwesomeIcon
                icon={faCaretLeft}
                style={{
                  fontSize: 15,
                }}
                onClick={() => minusTime()}
              />
              <TimeBlocks>
                {timeBlocks.map((b) => {
                  return (
                    <TimeBlock id={b} onClick={ChangeColor}>
                      {b}
                    </TimeBlock>
                  );
                })}
              </TimeBlocks>
              <FontAwesomeIcon
                icon={faCaretRight}
                style={{
                  fontSize: 15,
                }}
                onClick={() => plusTime()}
              />
            </StyledDivRow>
            {isTimeData && (
              <StyledDivColumn>
                {timeData.map((d) => {
                  runTimeToNum(d.runTime);
                  let blockWidth = "";
                  let bgColor = "";
                  if (runSecs < 600) {
                    blockWidth = "79.92px";
                    bgColor = "#FFFCF2";
                  } else if (runSecs < 1800) {
                    blockWidth = "131.04px";
                    bgColor = "#FCF6E0";
                  } else {
                    blockWidth = "199.81px";
                    bgColor = "#FFF7D8";
                  }
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
                      {/* 영상 길이 적용 필요 */}
                      <TitleBlock blockWidth={blockWidth} bgColor={bgColor}>
                        {d.title}
                      </TitleBlock>
                    </StyledDivRow>
                  );
                })}
              </StyledDivColumn>
            )}
          </ThirdContainer>
        </StyledDivRow>
      </Wrapper>
    </TimeTableWrapper>
  );
};

export default TimeTable;
