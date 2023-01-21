import styled from "styled-components";

// Assets
import Reservation_bg from "../Assets/Reservation_bg.png";
import { StyledDivColumn } from "./StyledDiv";

export const Wrapper = styled(StyledDivColumn)`
  height: 100%;
  width: 100vw;
  background-image: url(${Reservation_bg});
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  min-width: 100%;
  min-height: 2675px;
  padding-top: 9%;
  align-items: center;
`;
