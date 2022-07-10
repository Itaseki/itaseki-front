import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import StyledBtn from "../../Style/StyledBtn";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import {
  StyledDiv,
  StyledDivColumn,
  StyledDivRow,
} from "../../Style/StyledDiv";
import { light } from "../../Style/Color";

// assets
import Temp from "../../Assets/Temp_gif.png";
import Guide from "../../Assets/Guide.png";
import Line1 from "../../Assets/Line1.png";
import Enter from "../../Assets/Enter.png";
import Line2 from "../../Assets/Line2.png";
import Line3 from "../../Assets/Line3.png";
import Best_Video from "../../Assets/Best_Video.png";
import Line4 from "../../Assets/Line4.png";

const color = light.colors;

const ReservationListWrapper = () => {
  const [next, setNext] = useState(false);
  const [popVids, setPopVids] = useState([
    { image: Temp, title: "런닝맨 유재석", length: "13:22", reservation: 3 },
    { title: "런닝맨 송지효", length: "13:22", reservation: 2 },
    { title: "런닝맨 김종국", length: "13:22", reservation: 1 },
  ]);
  return (
    <Wrapper>
      <StyledDivColumn>
        <BtnContainer>
          <StyledBtn>
            <img src={Guide} alt="guide" style={{ height: 85, width: 98 }} />
          </StyledBtn>
          <img src={Line1} alt="line1" style={{ width: 13 }} />
          <img src={Enter} alt="enter" style={{ height: 56, width: 190 }} />
          <img src={Line2} alt="line2" style={{ width: 172 }} />
        </BtnContainer>
        <NextContainer>
          <div
            style={{
              width: 435,
              height: 288,
              backgroundColor: "black",
              borderRadius: 10,
            }}
          >
            <p>분 초 후 달릴 영상</p>
            <p></p>
            <p></p>
            <FontAwesomeIcon
              icon={faCheck}
              style={{
                fontSize: 14,
                color: color.red,
              }}
            />
            <p></p>
          </div>
          <StyledDivColumn>
            <img src={Line3} alt="line3" style={{ marginBottom: 194 }} />
            <img src={Line3} alt="line3" />
          </StyledDivColumn>
        </NextContainer>
      </StyledDivColumn>
      <PopContainer>
        <StyledDivRow>
          <p style={{ marginLeft: 5 }}>인기 영상</p>
        </StyledDivRow>
        <Top1>
          <div>
            <StyledDivRow style={{ justifyContent: "space-between" }}>
              <p>{popVids[0].title}</p>
              <StyledDivRow>
                <p
                  style={{
                    fontSize: 14,
                    color: "#9C9C9C",
                    maringRight: 5,
                  }}
                >
                  {popVids[0].length}
                </p>
                <ReservBtn>
                  <p style={{ maringRight: 5 }}>예약하기</p>
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{
                      fontSize: 14,
                      color: "#532A6B",
                    }}
                  />
                  <p>{popVids[0].reservation}</p>
                </ReservBtn>
              </StyledDivRow>
            </StyledDivRow>
          </div>
        </Top1>
        {/* 인기 2, 3위 예약 영상 */}
        <Top23>
          <StyledDivRow style={{ justifyContent: "space-between" }}>
            <p>{popVids[1].title}</p>
            <StyledDivRow>
              <p
                style={{
                  fontSize: 14,
                  color: "#9C9C9C",
                  maringRight: 5,
                  marginLeft: 30,
                }}
              >
                {popVids[1].length}
              </p>
              <ReservBtn>
                <p style={{ maringRight: 5 }}>예약하기</p>
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{
                    fontSize: 14,
                    color: "#532A6B",
                  }}
                />
                <p>{popVids[1].reservation}</p>
              </ReservBtn>
            </StyledDivRow>
          </StyledDivRow>
        </Top23>
        <Top23>
          <StyledDivRow style={{ justifyContent: "space-between" }}>
            <p>{popVids[2].title}</p>
            <StyledDivRow>
              <p
                style={{
                  fontSize: 14,
                  color: "#9C9C9C",
                  maringRight: 5,
                  marginLeft: 30,
                }}
              >
                {popVids[2].length}
              </p>
              <ReservBtn>
                <p style={{ maringRight: 5 }}>예약하기</p>
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{
                    fontSize: 14,
                    color: "#532A6B",
                  }}
                />
                <p>{popVids[2].reservation}</p>
              </ReservBtn>
            </StyledDivRow>
          </StyledDivRow>
        </Top23>
      </PopContainer>
      <img src={Line4} alt="line4" style={{ height: 120, width: 19 }} />
    </Wrapper>
  );
};

export default ReservationListWrapper;

const Wrapper = styled(StyledDivRow)`
  margin-left: 20%;
`;

const BtnContainer = styled(StyledDivRow)``;
const NextContainer = styled(StyledDivRow)``;

const PopContainer = styled.div`
  height: 503px;
  width: 445px;
  background-image: url(${Best_Video});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;
const Top1 = styled(StyledDivRow)``;
const Top23 = styled(StyledDivRow)``;

const ReservBtn = styled(StyledBtn)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
