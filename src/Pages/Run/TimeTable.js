import React, { useEffect, useState } from "react";
import axios from "axios";
import preURL from "../../preURL/preURL";

import { StyledDivColumn, StyledDivRow } from "../../Style/StyledDiv";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretLeft,
  faCaretRight,
  faCarrot,
} from "@fortawesome/free-solid-svg-icons";
import {
  BoldTitle,
  Day,
  Dot,
  FirstContainer,
  Line,
  ReservedBox,
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
import Carrot_Line from "../../Assets/Carrot_Line.png";
import Carrot_Color from "../../Assets/Carrot_Color.png";
import Rabbit_Side from "../../Assets/Rabbit_Side.png";

const TimeTable = (props) => {
  let d = new Date();

  const [year, setYear] = useState(d.getFullYear());
  const [month, setMonth] = useState(`0${d.getMonth() + 1}`);
  const [date, setDate] = useState(`0${d.getDate()}`);
  const [dateDiff, setDateDiff] = useState(1);
  const [todayData, setTodayData] = useState(TodayReservTest);

  const [timeZone, setTimeZone] = useState([0, 1, 2]);
  const [timeBlocks, setTimeBlocks] = useState([]);

  const [searchTimezone, setSearchTimezone] = useState([]);
  const [selectedId, setSelectedId] = useState([]);

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

  const addDays = (num) => {
    setDateDiff((prev) => prev + num);
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
    let m = "";
    let d = "";
    if (parseInt(month) < 10) {
      let m = `0${month}`;
      return m;
    }
    if (date < 10) {
      let d = `0${date}`;
      return d;
    }
    let url = `/run/reservations/confirm?date=${year}-${m}-${d}`;
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
      AddToTimeZone(timevar, id);
    } else {
      element.style.backgroundColor = "#F5F5F5";
      console.log("취소-searchTimezone: ", searchTimezone);
      let newTimeZone = searchTimezone.filter((s) => s !== timevar);
      console.log("취소-newTimeZone: ", newTimeZone);
      setSearchTimezone(newTimeZone);
      let newIDs = selectedId.filter((s) => s !== id);
      setSelectedId(newIDs);
    }
  };

  const AddToTimeZone = (timevar, id) => {
    console.log("선택 전-searchTimezone: ", searchTimezone);
    console.log("선택된 시간:", timevar);
    let arr = [];
    !searchTimezone.includes(timevar) && (arr = [...searchTimezone, timevar]);
    setSearchTimezone(arr);
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
    searchTimetable(newArr);
    ChangeToOrange(id);
  };

  // 느리게 색이 반영됨 🚨
  const ChangeToOrange = (id) => {
    timeBlocks.map((t) => {
      document.getElementById(t).style.backgroundColor = "#F5F5F5";
    });
    let IDs = [];
    id && (IDs = [...selectedId, id]);
    setSelectedId(IDs);

    selectedId.map((t) => {
      document.getElementById(t).style.backgroundColor = "#E8A284";
    });
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
    setSearchTimezone([]);
    setSelectedId([]);
    ChangeToOrange();
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
    setSearchTimezone([]);
    setSelectedId([]);
    ChangeToOrange();
  };

  return (
    <TimeTableWrapper>
      <img src={Rabbit_Side} style={{ width: "10%", marginTop: "30%" }} />
      <Wrapper>
        <FirstContainer>
          <StyledDivRow
            style={{
              alignItems: "center",
              width: 124,
              justifyContent: "space-between",
            }}
          >
            <Dot />
            <Dot />
            <Dot />
          </StyledDivRow>
        </FirstContainer>
        <StyledDivRow>
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
                  <p style={{ fontFamily: "Pretendard300" }}>
                    {reserv.startTime}~{reserv.endTime}
                  </p>
                  <p>{reserv.title}</p>
                </ReservedBox>
              );
            })}
          </SecondContainer>
          <ThirdContainer>
            <StyledDivRow
              style={{
                width: "100%",
                justifyContent: "flex-end",
                paddingTop: "3%",
                paddingRight: "7%",
              }}
            >
              <FontAwesomeIcon
                icon={faCaretLeft}
                style={{
                  fontSize: 15,
                  color: "white",
                }}
                onClick={() => {
                  addDays(-1);
                }}
              />
              <Day>
                {year} / {month} / {date}
              </Day>
              <FontAwesomeIcon
                icon={faCaretRight}
                style={{
                  fontSize: 15,
                  color: "white",
                }}
                onClick={() => {
                  addDays(1);
                }}
              />
            </StyledDivRow>
            <BoldTitle style={{ width: 469.42, textAlign: "left" }}>
              예약 대기 목록
            </BoldTitle>
            <StyledDivRow>
              <FontAwesomeIcon
                icon={faCaretLeft}
                style={{
                  fontSize: 15,
                  color: "white",
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
                  color: "white",
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
                      <p
                        style={{
                          fontFamily: "Pretendard400",
                          fontSize: 14,
                          color: "white",
                        }}
                      >
                        {d.startTime} - {d.endTime}
                      </p>
                      <FontAwesomeIcon
                        icon={faCarrot}
                        style={{
                          color: `${light.colors.mainColor}`,
                          marginLeft: 15,
                          marginRight: 15,
                        }}
                      />
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
      {props.pop ? (
        <img
          src={Carrot_Color}
          style={{ width: "10%", transform: "45deg", marginBottom: "10%" }}
          onClick={() => {
            props.setPop(false);
          }}
        />
      ) : (
        <img
          src={Carrot_Line}
          style={{ width: "10%", transform: "45deg", marginBottom: "10%" }}
          onClick={() => {
            props.setPop(true);
          }}
        />
      )}
    </TimeTableWrapper>
  );
};

export default TimeTable;
