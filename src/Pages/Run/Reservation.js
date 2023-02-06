import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import Header from "../../Components/Header";
import { Wrapper } from "../../Style/Reservation";
import StyledBtn from "../../Style/StyledBtn";

import AddReserv from "./AddReserv";
import Detail from "./Detail";
import Guide from "./Guide";
import ReservationListWrapper from "./ReservationList";
import TimeTable from "./TimeTable";
import TodayPopVids from "./TodayPopVids";

const Reservation = () => {
  // 예약 추가 팝업
  const [pop, setPop] = useState(false);
  const [detailPop, setDetailPop] = useState(false);
  const [guidePop, setGuidePop] = useState(false);
  const [reservId, setReservId] = useState(0);
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    console.log("================[Reservation]================");
  }, []);

  return (
    <Wrapper>
      <Header />
      <ReservationListWrapper guidePop={guidePop} setGuidePop={setGuidePop} />
      <TodayPopVids />
      <TimeTable
        pop={pop}
        setPop={setPop}
        setDetailPop={setDetailPop}
        setReservId={setReservId}
        confirmed={confirmed}
        setConfirmed={setConfirmed}
      />
      {pop && <AddReserv setPop={setPop} />}
      {detailPop && (
        <Detail
          setDetailPop={setDetailPop}
          reservId={reservId}
          setReservId={setReservId}
          confirmed={confirmed}
          setConfirmed={setConfirmed}
        />
      )}
      {guidePop && <Guide guidePop={guidePop} setGuidePop={setGuidePop} />}
    </Wrapper>
  );
};

export default Reservation;
