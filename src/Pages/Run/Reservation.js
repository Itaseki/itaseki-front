import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import Header from "../../Components/Header";
import StyledBtn from "../../Style/StyledBtn";

import AddReserv from "./AddReserv";
import Detail from "./Detail";
import ReservationListWrapper from "./ReservationList";
import TimeTable from "./TimeTable";

const Reservation = () => {
  // 예약 추가 팝업
  const [pop, setPop] = useState(false);
  const [detailPop, setDetailPop] = useState(false);
  const [reservId, setReservId] = useState(0);
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    console.log("================[Reservation]================");
  }, []);

  return (
    <div style={{ height: 1505, width: "100%" }}>
      <Header />
      <ReservationListWrapper />
      <TimeTable
        setPop={setPop}
        setDetailPop={setDetailPop}
        setReservId={setReservId}
        confirmed={confirmed}
        setConfirmed={setConfirmed}
      />
      {pop ? <AddReserv setPop={setPop} /> : <></>}
      {detailPop ? (
        <Detail
          setDetailPop={setDetailPop}
          reservId={reservId}
          setReservId={setReservId}
          confirmed={confirmed}
          setConfirmed={setConfirmed}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Reservation;
