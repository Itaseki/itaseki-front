import React, { useState } from "react";
import styled from "styled-components";

import Header from "../../Components/Header";

import AddReserv from "./AddReserv";
import ReservationListWrapper from "./ReservationList";

const Reservation = () => {
  // 예약 추가 팝업
  const [pop, setPop] = useState(false);

  return (
    <div>
      <Header />
      <ReservationListWrapper />
      {pop ? <AddReserv /> : <></>}
    </div>
  );
};

export default Reservation;
