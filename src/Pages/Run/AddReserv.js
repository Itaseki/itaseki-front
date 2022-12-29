import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import preURL from "../../preURL/preURL";
import StyledBtn from "../../Style/StyledBtn";
import { StyledDiv, StyledDivRow } from "../../Style/StyledDiv";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import Pre_Thumbnail from "../../Assets/Pre_Thumbnail.png";
import {
  AddCat,
  AddCatWrapper,
  Modal,
  Sign,
  TimeInput,
  TimeWBox,
  VideoDescription,
  VideoList,
  WhiteBoxBtn,
} from "../../Style/AddReserv";

const AddReserv = (props) => {
  const [title, setTitle] = useState("");
  const [sTitle, setSTitle] = useState("");
  const [result, setResult] = useState([]);
  const [sResult, setSResult] = useState(false);
  const [results, setResults] = useState([]);
  // 검색 후, 선택된 제목
  let [rItem, setRItem] = useState({});
  let [rTitle, setRTitle] = useState("");
  let [thumbnail, setThumbnail] = useState(Pre_Thumbnail);

  let [date, setDate] = useState("00");
  const [hour1, setHour1] = useState("0");
  const [hour2, setHour2] = useState("0");
  let [min1, setmin1] = useState(0);

  const [rHour1, setRHour1] = useState(0);
  const [rHour2, setRHour2] = useState(0);
  let [rMin1, setRMin1] = useState(0);
  const [rMin2, setRMin2] = useState(0);

  useEffect(() => {
    console.log(
      "==============================[AddReserv]=============================="
    );
  }, []);

  const WhiteBoxStyle = {
    borderStyle: "none",
    backgroundColor: "white",
    width: 393,
    height: 33,
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    paddingLeft: 10,
    margin: 0,
  };

  // 제목 input 관리
  const onChange = (e) => {
    setTitle(e.target.value);
    if (title.length > 0) {
      searchTitle();
    } else if (title.length === 0) {
      setSResult(false);
    }
  };

  // 영상 제목 조회
  const searchTitle = (e) => {
    axios
      .get(preURL.preURL + `/run/reservations/title/search?q=${sTitle}`)
      .then((res) => {
        console.log("❕영상 제목 조회❕ ", res.data);
        setResults(res.data);
        let newResult = [];
        for (let i = 0; i < results.length; i++) {
          newResult.push(results[i].title);
        }
        // 🚨 한 번에 작동하지 않음 <- 수정 필요
        setResult(newResult);
        console.log("연관 검색어 리스트 : ", result.length);
        setSResult(true);
      })
      .catch((err) => {
        console.error("⚠️ 영상 제목 조회 ⚠️ ", err);
      });
  };

  // 연관 검색어 드롭 다운 리스트
  const ArrayData = result.map((item, i) => {
    return (
      <li
        key={i}
        style={{ listStyle: "none", backgroundColor: "white", padding: 3 }}
      >
        <StyledBtn
          type="button"
          onClick={() => {
            setRTitle(item);
            setTitle(rTitle);
            setRItem(results[i]);
            setThumbnail(rItem.thumbnailUrl);
            console.log("선택된 제목의 정보 :", rItem);
            setSResult(false);
          }}
        >
          <span>{item}</span>
        </StyledBtn>
      </li>
    );
  });

  // 예약 시간 input 관리
  const onChangeTime = (e) => {
    if (title == "") {
      alert("영상을 먼저 선택해주세요!");
    } else {
      if (e.target.name === "hour1") {
        setHour1((hour1) => e.target.value);
      } else if (e.target.name === "hour2") {
        setHour2((hour2) => e.target.value);
      } else if (e.target.name === "min1") {
        reservationTime();
        setmin1((prevmin1) => e.target.value);
      }
    }
  };

  // 날짜 구하기
  let now = new Date();
  let year = now.getFullYear();
  let todayMonth = now.getMonth() + 1;
  let todayDate = now.getDate();

  // 예약 시간 계산 (예약 시작 시간 + 총 재생 시간)
  // 🚨 이전 값을 받아옴 <- 수정 필요
  // 값 올리는 것 가능, 값 내리는 것 불가능
  const reservationTime = () => {
    console.log(`입력값 : ${hour1} ${hour2} : ${min1} 0`);
    let hour = parseInt(`${hour1}${hour2}`) + rItem.runtimeHour;
    let runtimeMin = 0;
    console.log("시 :", hour);
    if (rItem.runtimeMin > 50) {
      runtimeMin = 60;
    } else if (rItem.runtimeMin > 40) {
      runtimeMin = 50;
    } else if (rItem.runtimeMin > 30) {
      runtimeMin = 40;
    } else if (rItem.runtimeMin > 20) {
      runtimeMin = 30;
    } else if (rItem.runtimeMin > 10) {
      runtimeMin = 20;
    } else if (rItem.runtimeMin > 0) {
      runtimeMin = 10;
    }
    let min = parseInt(`${min1}0`) + runtimeMin;
    console.log("분 :", min);
    // 🚨 임의 값(수정 필요)
    min = min + 10;
    if (min > 60) {
      hour = hour + min / 60;
      hour = Math.floor(hour);
      min = min % 60;
    } else if (hour > 23) {
      alert("다음날로 넘어가는 시간에는 예약이 불가능합니다.");
    }
    console.log("최종 시간 : ", hour, min);
    setRHour1(hour.toString().substring(0, 1));
    min = min.toString();
    let rHour = hour;

    if (min.substring(0, 1) === "6") {
      if (rHour > 23) {
        alert("다음날로 넘어가는 시간에는 예약이 불가능합니다.");
      } else {
        rHour = hour + 1;
        rHour = rHour.toString();
        setRHour2(rHour.substring(1, 2));
        setRMin1(0);
      }
    } else {
      rHour = rHour.toString();
      setRHour2(rHour.substring(1, 2));
      setRMin1(min.substring(0, 1));
    }
    setRMin2(min.substring(1, 2));
  };

  let body = {
    id: rItem.id,
    reservationDate: `${year}-${
      todayMonth > 9 ? todayMonth : `0${todayMonth}`
    }-${date}`,
    startTime: `${hour1}${hour2}:${min1}${0}`,
    endTime: `${rHour1}${rHour2}:${rMin1}${rMin2}`,
  };

  const reservations = () => {
    console.log("REQUEST BODY : ", body);

    axios
      .post(preURL.preURL + "/run/reservations", body)
      .then((res) => {
        console.log("❕예약 등록❕ ", res.data);
        alert("예약이 등록되었습니다!");
        props.setPop(false);
      })
      .catch((err) => {
        console.error("⚠️ 예약 등록 ⚠️ ", err);
        if (err.response.status === 409) {
          alert(
            "해당 시간에 다른 확정된 예약이 있거나 오늘 이미 예약을 하셨습니다."
          );
        }
      });
  };

  return (
    <>
      <StyledDiv>
        <Modal>
          <AddCatWrapper>
            <Link to="/addvideo">
              <AddCat>영상 등록하기</AddCat>
            </Link>
            <AddCat default>영상 가져오기</AddCat>
          </AddCatWrapper>
          <StyledBtn onClick={() => props.setPop(false)}>
            <FontAwesomeIcon
              icon={faClose}
              style={{
                fontSize: "150%",
                position: "relative",
                right: -287,
                top: 15,
              }}
            />
          </StyledBtn>
          <StyledDiv
            style={{
              flexDirection: "column",
              position: "absolute",
              top: 100,
              left: 60,
              justifyContent: "flex-start",
            }}
          >
            <StyledDiv>
              <div style={{ position: "relative" }}>
                <p>영상 제목</p>
                <input
                  type="text"
                  name="title"
                  onChange={onChange}
                  value={rItem.title}
                  style={WhiteBoxStyle}
                />
                {sResult && <VideoList>{ArrayData}</VideoList>}
                <p>영상 URL</p>
                <p style={WhiteBoxStyle}>{rItem.url}</p>
                <div>
                  <p>영상 예약 날짜</p>
                  <StyledDiv
                    style={{ width: 403, justifyContent: "space-between" }}
                  >
                    <WhiteBoxBtn
                      onClick={() => {
                        setDate((date) => todayDate);
                        console.log(date);
                      }}
                    >
                      오늘 ({todayMonth}/{todayDate})
                    </WhiteBoxBtn>
                    {/* 다음달로 넘어가는 경우 처리 필요 */}
                    <WhiteBoxBtn
                      onClick={() => {
                        setDate((date) => todayDate + 1);
                        console.log(date);
                      }}
                    >
                      내일 ({todayMonth}/{todayDate + 1})
                    </WhiteBoxBtn>
                    <WhiteBoxBtn
                      onClick={() => {
                        setDate((date) => todayDate + 2);
                        console.log(date);
                      }}
                    >
                      모레 ({todayMonth}/{todayDate + 2})
                    </WhiteBoxBtn>
                    {/* 처리 필요 */}
                  </StyledDiv>
                  <p>영상 예약 시간(10분 단위로 입력 가능)</p>
                  <StyledDivRow
                    className="reservTime"
                    style={{ width: 403, justifyContent: "space-between" }}
                  >
                    <TimeInput
                      type="number"
                      name="hour1"
                      onChange={onChangeTime}
                      value={hour1}
                      min="0"
                      max="2"
                    ></TimeInput>
                    {hour1 === 0 || 1 ? (
                      <TimeInput
                        type="number"
                        name="hour2"
                        onChange={onChangeTime}
                        value={hour2}
                        min="0"
                        max="9"
                      ></TimeInput>
                    ) : (
                      <TimeInput
                        type="number"
                        name="hour2"
                        onChange={onChangeTime}
                        value={hour2}
                        min="0"
                        max="3"
                      ></TimeInput>
                    )}

                    <Sign>:</Sign>
                    {/* 🚨 한  클릭씩 늦게 분의 값이 바뀜 (수정 예정) */}
                    <TimeInput
                      type="number"
                      name="min1"
                      value={min1}
                      onChange={onChangeTime}
                      min="0"
                      max="5"
                    ></TimeInput>
                    <TimeWBox>0</TimeWBox>
                    <Sign>-</Sign>
                    <TimeWBox>{rHour1}</TimeWBox>
                    <TimeWBox>{rHour2}</TimeWBox>
                    <Sign>:</Sign>
                    <TimeWBox>{rMin1}</TimeWBox>
                    <TimeWBox>{rMin2}</TimeWBox>
                  </StyledDivRow>
                </div>
              </div>
              <StyledDiv
                style={{
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  marginLeft: 77,
                }}
              >
                <img src={thumbnail} style={{ width: 174, height: 98 }} />
                <div>
                  <p>총 재생 시간</p>
                  <StyledDivRow
                    style={{ width: 163, justifyContent: "space-between" }}
                  >
                    <TimeWBox style={{ width: 62 }}>
                      {rItem.runtimeHour < 10
                        ? `0${rItem.runtimeHour}`
                        : rItem.runtimeHour}
                    </TimeWBox>
                    <Sign>:</Sign>
                    <TimeWBox style={{ width: 62 }}>
                      {rItem.runtimeMin < 10
                        ? `0${rItem.runtimeMin}`
                        : rItem.runtimeMin}
                    </TimeWBox>
                  </StyledDivRow>
                  <StyledBtn
                    style={{
                      color: "white",
                      backgroundColor: "#E37958",
                      borderRadius: 8,
                      width: 201,
                      height: 50,
                      fontSize: 16,
                      marginTop: 50,
                    }}
                    onClick={() => reservations()}
                  >
                    영상 등록 완료(수정 불가)
                  </StyledBtn>
                </div>
              </StyledDiv>
            </StyledDiv>
            <StyledDiv
              style={{ flexDirection: "column", alignItems: "flex-start" }}
            >
              <p style={{ marginBottom: 0 }}>영상을 간단하게 소개해주세요!</p>
              <VideoDescription>{rItem.description}</VideoDescription>
            </StyledDiv>
          </StyledDiv>
        </Modal>
      </StyledDiv>
    </>
  );
};

export default AddReserv;
