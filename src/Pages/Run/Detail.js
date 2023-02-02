import { faCarrot, faCheck, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import preURL from "../../preURL/preURL";
import {
  StyledDiv,
  StyledDivColumn,
  StyledDivRow,
} from "../../Style/StyledDiv";
import { light } from "../../Style/Color";
import { Link } from "react-router-dom";
import {
  CloseBtn,
  FirstRow,
  IMG,
  Modal,
  P,
  ReservBtn,
} from "../../Style/Detail";

const Detail = (props) => {
  const [confirmedData, setConfirmedData] = useState({});
  const [preReservData, setPreReservData] = useState({});

  useEffect(() => {
    console.log("Id ==>", props.reservId);
    console.log("confirmed :", props.confirmed);
    confirmedReserv();
    preReserv();
  }, []);

  // 확정 예약 조회
  const confirmedReserv = () => {
    let url = preURL.preURL + `/run/reservations/confirm/${props.reservId}`;
    axios
      .get(url)
      .then((res) => {
        console.log("❕확정 예약 조회❕ ", res.data);
        setConfirmedData(res.data);
      })
      .catch((err) => {
        console.error("⚠️ 확정 예약 조회 ⚠️ ", err);
      });
  };

  // 예약 대기 영상 조회
  const preReserv = () => {
    let url = preURL.preURL + `/run/reservations/${props.reservId}`;
    axios
      .get(url)
      .then((res) => {
        console.log("❕예약 대기 영상 조회❕ ", res.data);
        setConfirmedData(res.data);
      })
      .catch((err) => {
        console.error("⚠️ 예약 대기 영상 조회 ⚠️ ", err);
      });
  };

  return (
    <Modal>
      <CloseBtn onClick={() => props.setDetailPop(false)}>
        <FontAwesomeIcon
          icon={faClose}
          style={{
            fontSize: "170%",
          }}
        />
      </CloseBtn>
      {props.confirmed ? (
        // 확정 목록 영상 클릭 시
        <StyledDivColumn>
          <IMG src={confirmedData.thumbnailUrl} />
          <FirstRow>
            <p style={{ margin: 3 }}>{confirmedData.description}</p>
            <StyledDivRow
              style={{ width: "7%", justifyContent: "space-between" }}
            >
              <FontAwesomeIcon
                icon={faCarrot}
                style={{
                  color: `${light.colors.mainColor}`,
                }}
              />
              <P
                style={{
                  color: `${light.colors.mainColor}`,
                }}
              >
                {confirmedData.count}
              </P>
            </StyledDivRow>
          </FirstRow>
          <P>{confirmedData.url}</P>
          <P style={{ color: "#505050" }}>{confirmedData.writerNickname}</P>
          <Link to="/running" style={{ textDecoration: "none" }}>
            <StyledDiv
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <ReservBtn bgColor="#E37958">영상 달리기</ReservBtn>
            </StyledDiv>
          </Link>
        </StyledDivColumn>
      ) : (
        // 예약 대기 목록 영상 클릭 시
        <StyledDivColumn>
          <IMG src={preReservData.thumbnailUrl} />
          <FirstRow>
            <P>{preReservData.description}</P>
            <StyledDivRow
              style={{ width: "7%", justifyContent: "space-between" }}
            >
              <FontAwesomeIcon
                icon={faCarrot}
                style={{
                  color: `${light.colors.mainColor}`,
                }}
              />
              <P
                style={{
                  color: `${light.colors.mainColor}`,
                }}
              >
                {preReservData.count}
              </P>
            </StyledDivRow>
          </FirstRow>
          <P>{preReservData.url}</P>
          <P style={{ margin: 3, color: "#505050" }}>
            {preReservData.writerNickname}
          </P>
          <ReservBtn bgColor="black">나도 예약하기</ReservBtn>
        </StyledDivColumn>
      )}
    </Modal>
  );
};

export default Detail;
