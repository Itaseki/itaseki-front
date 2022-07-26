import { faCheck, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import preURL from "../../preURL/preURL";
import {
  StyledDiv,
  StyledDivColumn,
  StyledDivRow,
} from "../../Style/StyledDiv";
import { light } from "../../Style/Color";
import StyledBtn from "../../Style/StyledBtn";
import { Link } from "react-router-dom";

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
      <StyledBtn
        style={{
          alignSelf: "flex-end",
          marginRight: 30,
          marginBottom: 25,
        }}
        onClick={() => props.setDetailPop(false)}
      >
        <FontAwesomeIcon
          icon={faClose}
          style={{
            fontSize: "150%",
          }}
        />
      </StyledBtn>
      {props.confirmed ? (
        // 확정 목록 영상 클릭 시
        <StyledDivColumn>
          <IMG src={confirmedData.thumbnailUrl} />
          <FirstRow>
            <p style={{ margin: 3 }}>{confirmedData.description}</p>
            <StyledDivRow>
              <FontAwesomeIcon
                icon={faCheck}
                style={{
                  color: `${light.colors.mainColor}`,
                }}
              />
              <p
                style={{
                  color: `${light.colors.mainColor}`,
                  margin: 3,
                }}
              >
                {confirmedData.count}
              </p>
            </StyledDivRow>
          </FirstRow>
          <p style={{ margin: 3 }}>{confirmedData.url}</p>
          <p style={{ margin: 3, color: "#505050" }}>
            {confirmedData.writerNickname}
          </p>
          <Link to="/running" style={{ textDecoration: "none" }}>
            <StyledDiv
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <StyledBtn
                style={{
                  width: 182.39,
                  height: 33,
                  borderRadius: 71,
                  backgroundColor: `${light.colors.mainColor}`,
                  fontWeight: "bold",
                  fontSize: 16,
                  marginTop: 14,
                }}
              >
                영상 달리기
              </StyledBtn>
            </StyledDiv>
          </Link>
        </StyledDivColumn>
      ) : (
        // 예약 대기 목록 영상 클릭 시
        <StyledDivColumn>
          <IMG src={preReservData.thumbnailUrl} />
          <FirstRow>
            <p style={{ margin: 3 }}>{preReservData.description}</p>
            <StyledDivRow>
              <FontAwesomeIcon
                icon={faCheck}
                style={{
                  color: `${light.colors.mainColor}`,
                }}
              />
              <p
                style={{
                  color: `${light.colors.mainColor}`,
                  margin: 3,
                }}
              >
                {preReservData.count}
              </p>
            </StyledDivRow>
          </FirstRow>
          <p style={{ margin: 3 }}>{preReservData.url}</p>
          <p style={{ margin: 3, color: "#505050" }}>
            {preReservData.writerNickname}
          </p>
          <StyledBtn
            style={{
              width: 182.39,
              height: 33,
              borderRadius: 71,
              backgroundColor: "black",
              fontWeight: "bold",
              fontSize: 16,
              alignSelf: "center",
              marginTop: 14,
            }}
          >
            나도 예약하기
          </StyledBtn>
        </StyledDivColumn>
      )}
    </Modal>
  );
};

export default Detail;

const Modal = styled.div`
  position: fixed;
  width: 621px;
  height: 458px;
  left: 410px;
  top: 147px;
  z-index: 2;
  display: flex;
  padding-top: 2%;
  flex-direction: column;
  align-items: center;
  background: #f4f3ee;
  border: 6px dashed #000000;
  border-radius: 30px;
`;

const IMG = styled.img`
  width: 423px;
  height: 224px;
`;

const FirstRow = styled(StyledDivRow)`
  justify-content: space-between;
`;
