import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import Header from "../../Components/Header";
import StyledBtn from "../../Style/StyledBtn";

import AddReserv from "./AddReserv";
import ReservationListWrapper from "./ReservationList";

const Reservation = () => {
  // 예약 추가 팝업
  const [pop, setPop] = useState(false);

  useEffect(() => {
    console.log(
      "==============================[Reservation]=============================="
    );
  }, []);
  return (
    <div>
      <Header />
      {/* <ReservationListWrapper /> */}
      {pop ? <AddReserv setPop={setPop} /> : <></>}
    </div>
  );
};

export default Reservation;
