import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import preURL from "../../preURL/preURL";
import { StyledDivColumn, StyledDivRow } from "../../Style/StyledDiv";
import StyledBtn from "../../Style/StyledBtn";
import { Bold, MainContainer, RestPop, TopPop } from "../../Style/TodayPopVids";

const TodayPopVids = () => {
  const [popReserv, setPopReserv] = useState([
    {
      id: 1,
      title: "깡깡다섯",
      runTime: "00:23:09",
      videUrl: "https://youtu.be/6q7tRmW8JuY",
      count: 3,
      reservationDate: "2022-08-02",
      startTime: "15:00",
      endTime: "16:30",
      thumbnailUrl:
        "https://i.ytimg.com/vi/6q7tRmW8JuY/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDNIJ1YgO4bqBXgacOEs4QYiqfApQ",
    },
    {
      id: 2,
      title: "런닝맨전래동화",
      runTime: "00:29:59",
      videUrl: "",
      count: 2,
      reservationDate: "2022-08-02",
      startTime: "15:00",
      endTime: "16:00",
      thumbnailUrl: "",
    },
    {
      id: 3,
      title: "정형돈 특집",
      runTime: "00:13:14",
      videUrl: "",
      count: 1,
      reservationDate: "2022-08-02",
      startTime: "10:00",
      endTime: "10:20",
      thumbnailUrl: "",
    },
  ]);
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
          // setPopReserv(res.data);
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
      <TopPop>
        <Bold style={{ fontSize: 50, margin: 0 }}>1</Bold>
        <StyledDivColumn>
          <img
            src={popReserv[0].thumbnailUrl}
            style={{ width: 274, height: 136, marginBottom: 10 }}
          />
          <StyledDivRow style={{ justifyContent: "space-between" }}>
            <Bold>{popReserv[0].title}</Bold>
            <StyledDivRow>
              <Bold style={{ color: "#9C9C9C", fontSize: 14 }}>
                {popReserv[0].runTime.slice(4)}
              </Bold>
              <StyledBtn onClick={() => reservPop(0)}>
                <StyledDivRow>
                  <Bold style={{ color: "#C31212", fontSize: 14 }}>
                    예약하기
                  </Bold>
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{
                      color: "#C31212",
                      fontSize: 14,
                    }}
                  />
                </StyledDivRow>
              </StyledBtn>
              <Bold style={{ color: "#C31212", fontSize: 14 }}>{like1}</Bold>
            </StyledDivRow>
          </StyledDivRow>
        </StyledDivColumn>
      </TopPop>
      <RestPop>
        <StyledDivRow>
          <Bold style={{ fontSize: 30, margin: 0, marginRight: 10 }}>2</Bold>
          <Bold style={{ marginRight: 90 }}>{popReserv[1].title}</Bold>
        </StyledDivRow>
        <StyledDivRow>
          <Bold style={{ color: "#9C9C9C", fontSize: 14 }}>
            {popReserv[1].runTime.slice(4)}
          </Bold>
          <Bold style={{ color: "#C31212", fontSize: 14, marginLeft: 10 }}>
            예약하기
          </Bold>
          <FontAwesomeIcon
            icon={faCheck}
            style={{
              color: "#C31212",
              fontSize: 14,
            }}
          />
          <Bold style={{ color: "#C31212", fontSize: 14 }}>{like2}</Bold>
        </StyledDivRow>
      </RestPop>
      <RestPop>
        <StyledDivRow>
          <Bold style={{ fontSize: 30, margin: 0, marginRight: 10 }}>3</Bold>
          <Bold style={{ marginRight: 100 }}>{popReserv[2].title}</Bold>
        </StyledDivRow>
        <StyledDivRow>
          <Bold style={{ color: "#9C9C9C", fontSize: 14 }}>
            {popReserv[2].runTime.slice(4)}
          </Bold>
          <Bold style={{ color: "#C31212", fontSize: 14, marginLeft: 10 }}>
            예약하기
          </Bold>
          <FontAwesomeIcon
            icon={faCheck}
            style={{
              color: "#C31212",
              fontSize: 14,
            }}
          />
          <Bold style={{ color: "#C31212", fontSize: 14 }}>{like3}</Bold>
        </StyledDivRow>
      </RestPop>
    </MainContainer>
  );
};

export default TodayPopVids;
