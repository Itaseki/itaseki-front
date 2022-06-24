import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import { StyledDiv, StyledDivRow } from "../../Style/StyledDiv";

import Header from "../../Components/Header";

import Run from "../../Assets/Run_Run.png";
import Stick from "../../Assets/Stick.png";
import Run1 from "../../Assets/Run_1.png";
import Run2 from "../../Assets/Run_2.png";
import Run3 from "../../Assets/Run_3.png";
import Temp from "../../Assets/Temp_gif.png";
import StyledBtn from "../../Style/StyledBtn";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Reservation = () => {
  const [next, setNext] = useState(false);
  const [popVids, setPopVids] = useState([
    { image: Temp, title: "런닝맨 유재석", length: "13:22", reservation: 3 },
    { title: "런닝맨 송지효", length: "13:22", reservation: 2 },
    { title: "런닝맨 김종국", length: "13:22", reservation: 1 },
  ]);
  const [reservations, setReservations] = useState([
    { title: "런닝맨", start: "12:30", finish: "13:30" },
  ]);

  // 예약된 영상 리스트
  const RList = reservations.map((reservation) => (
    <div>
      <p>{reservation.title}</p>
      <p>{reservation.start}</p>
      <p>{reservation.finish}</p>
    </div>
  ));

  return (
    <div>
      <Header />
      <StyledDiv>
        <StyledDiv>
          <RunWrapper>
            {next ? (
              <></>
            ) : (
              <ReadyWrapper>
                <img src={Run} style={{ width: 355 }} />
              </ReadyWrapper>
            )}
            <PopWrapper>
              <StyledDivRow>
                <img src={Stick} style={{ height: 24 }} />
                <p style={{ marginLeft: 5 }}>인기 영상</p>
              </StyledDivRow>
              <Top1>
                <img src={Run1} style={{ height: 93, marginRight: 20 }} />
                <div>
                  <img src={Temp} style={{ width: 274, height: 136 }} />
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
              <Top23>
                <img src={Run2} style={{ height: 30, marginRight: 20 }} />
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
                <img src={Run3} style={{ height: 30, marginRight: 20 }} />
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
            </PopWrapper>
          </RunWrapper>
        </StyledDiv>
      </StyledDiv>
      <TimeTable>
        <Paper>
          <Grid container spacing={0}>
            <Grid item xs={2}>
              <Block>
                <p>예약시간</p>
              </Block>
            </Grid>
            <Grid item xs={10}>
              <Block>
                <p>예약 현황</p>
              </Block>
            </Grid>
            <Grid item xs={2}>
              <Block>
                <p></p>
              </Block>
            </Grid>
            <Grid item xs={10}>
              <Block style={{ justifyContent: "spaceBtween" }}>
                <p>확정목록</p>
                <StyledBtn>
                  <p>추가하기</p>
                </StyledBtn>
              </Block>
            </Grid>
            <Grid item xs={2}>
              <Block>
                <p>예약 확정 시간</p>
              </Block>
            </Grid>
            <Grid item xs={2}>
              <Block>
                <p>예약 확정 리스트</p>
              </Block>
            </Grid>
            <Grid item xs={8}>
              <Block>
                <div>{RList}</div>
              </Block>
            </Grid>
          </Grid>
        </Paper>
      </TimeTable>
    </div>
  );
};

export default Reservation;

const RunWrapper = styled(StyledDiv)`
  justify-content: space-between;
`;

const ReadyWrapper = styled.div`
  margin-right: 10%;
`;

const PopWrapper = styled.div`
  margin-left: 10%;
`;

const Top1 = styled(StyledDivRow)``;

const Top23 = styled(StyledDivRow)``;

const ReservBtn = styled(StyledBtn)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TimeTable = styled(StyledDiv)`
  width: 80%;
  margin-top: 10%;
`;

const Block = styled(StyledDiv)`
  border: 1px solid purple;
`;
