import React from "react";
import styled from "styled-components";
import { StyledDiv, StyledDivColumn } from "../Style/StyledDiv";

import Sleepy_Eye from "../Assets/Sleepy_Eye.png";

const Footer = () => {
  return (
    <StyledDivColumn>
      <Bg>
        <img src={Sleepy_Eye} style={{ width: "20%" }} />
      </Bg>
    </StyledDivColumn>
  );
};

export default Footer;

const Bg = styled(StyledDiv)`
  background-color: #d7e0e4;
  min-height: 450px;
  width: 100vw;
  border-bottom-left-radius: 100%;
  border-bottom-right-radius: 100%;
  align-items: flex-end;
  padding-bottom: 5%;
`;
