import React, { useEffect, useState } from "react";

import axios from "axios";
import preURL from "../preURL/preURL";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import {
  Btn,
  DownBtn,
  ElevatorContainer,
  First,
  Fourth,
  ImgBtn,
  ImgBtnBox,
  MainImg,
  Num,
  PlyBox,
  PlyList,
  PopPly,
  PopPlyTitle,
  PopThumbnail,
  PopVid,
  PopVidsContainer,
  Rank,
  RunningBtn,
  Second,
  Third,
  UpBtn,
  Wrapper,
} from "../Style/Main";
// import { PopGifTest } from "../TestData/MainTest";
import { StyledDivColumn } from "../Style/StyledDiv";

// Assets
import MainPage_Logo from "../Assets/MainPage_Logo.png";
import PopPlaylist from "../Assets/PopPlaylist.png";
import Guideline_Btn from "../Assets/Guideline_Btn.png";
import Video_Btn from "../Assets/Video_Btn.png";
import Run_Btn from "../Assets/Run_Btn.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  const [popVideos, setPopVideos] = useState([]);
  const [popPlaylists, setPopPlaylists] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [prevVid, setPrevVid] = useState("");
  const [nextVid, setNextVid] = useState("");
  const [currentVid, setCurrentVid] = useState("");

  useEffect(() => {
    console.log("========================[Main.js]========================");
    popVideo();
    popPlaylist();
  }, []);

  const popVideo = () => {
    axios
      .get(preURL.preURL + "/main/video")
      .then((res) => {
        console.log("❕인기 영상 조회❕ ", res.data);
        setPopVideos(res.data);
        setCurrentVid(res.data[0].thumbnailUrl);
        let newIndex = 0;
        let nextIndex = newIndex === res.data.length - 1 ? 0 : newIndex + 1;
        let prevIndex = newIndex === 0 ? res.data.length - 1 : newIndex - 1;
        setNextVid(res.data[nextIndex].thumbnailUrl);
        setPrevVid(res.data[prevIndex].thumbnailUrl);
      })
      .catch((err) => {
        console.error("⚠️ 인기 영상 조회 ⚠️ ", err);
      });
  };

  // 이전 영상
  const getPrevVid = () => {
    let newIndex = currentIndex === 0 ? popVideos.length - 1 : currentIndex - 1;
    let nextIndex = newIndex === 0 ? popVideos.length - 1 : newIndex - 1;
    setCurrentIndex(newIndex);
    setCurrentVid(popVideos[newIndex].thumbnailUrl);
    setNextVid(popVideos[currentIndex].thumbnailUrl);
    setPrevVid(popVideos[nextIndex].thumbnailUrl);
  };

  // 다음 영상
  const getNextVid = () => {
    let newIndex = currentIndex === popVideos.length - 1 ? 0 : currentIndex + 1;
    let prevIndex = newIndex === popVideos.length - 1 ? 0 : newIndex + 1;
    setCurrentIndex(newIndex);
    setCurrentVid(popVideos[newIndex].thumbnailUrl);
    setPrevVid(popVideos[currentIndex].thumbnailUrl);
    setNextVid(popVideos[prevIndex].thumbnailUrl);
  };

  // 인기 플레이리스트 조회
  const popPlaylist = () => {
    axios
      .get(preURL.preURL + "/main/playlist")
      .then((res) => {
        console.log("❕인기 플레이리스트 조회❕ ", res.data);
        setPopPlaylists(res.data);
      })
      .catch((err) => {
        console.error("⚠️ 인기 플레이리스트 조회 ⚠️ ", err);
      });
  };

  return (
    <Wrapper>
      <Header />
      <First>
        <MainImg src={MainPage_Logo} />
        <Link to="/running">
          <RunningBtn>예능 영상 달리러 가기</RunningBtn>
        </Link>
      </First>
      <Second>
        <PopVidsContainer>
          <PopVid position="prev" src={prevVid} />
          <PopVid position="current" src={currentVid} />
        </PopVidsContainer>
        <ElevatorContainer>
          <Num>
            <Rank>{currentIndex + 1}위</Rank>
          </Num>
          <Btn onClick={getPrevVid}>
            <FontAwesomeIcon icon={faCaretUp} />
          </Btn>
          <Btn onClick={getNextVid}>
            <FontAwesomeIcon icon={faCaretDown} />
          </Btn>
        </ElevatorContainer>
      </Second>
      <Third style={{ paddingTop: "12%", paddingBottom: "12%" }}>
        <StyledDivColumn style={{ alignItems: "center", width: "45%" }}>
          <PopPly src={PopPlaylist} />
          <PopThumbnail src={popPlaylists.titleImageUrl} />
        </StyledDivColumn>
        <StyledDivColumn style={{ alignItems: "flex-start", width: "45%" }}>
          <PopPlyTitle>알쓸인잡 달리기</PopPlyTitle>
          <PlyBox>
            {popPlaylists.videos &&
              popPlaylists.videos.map((v) => {
                return <PlyList>{v}</PlyList>;
              })}
          </PlyBox>
        </StyledDivColumn>
      </Third>
      <Fourth>
        <ImgBtnBox>
          <Link to="/center">
            <ImgBtn src={Guideline_Btn} />
          </Link>
          <Link to="/video">
            <ImgBtn src={Video_Btn} />
          </Link>
          <Link to="/running">
            <ImgBtn src={Run_Btn} />
          </Link>
        </ImgBtnBox>
      </Fourth>
      <Footer />
    </Wrapper>
  );
};

export default Main;
