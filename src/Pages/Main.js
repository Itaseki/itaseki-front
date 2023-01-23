import React, { useEffect, useState } from "react";
import axios from "axios";
import preURL from "../preURL/preURL";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import {
  DownBtn,
  ElevatorContainer,
  First,
  Fourth,
  MainImg,
  Num,
  PopVidsContainer,
  RunningBtn,
  Second,
  Third,
  UpBtn,
  Wrapper,
} from "../Style/Main";
import { PopGifTest } from "../TestData/MainTest";
import MainPage_Logo from "../Assets/MainPage_Logo.png";

const Main = () => {
  const [popCommus, setpopCommus] = useState([]);
  const [popGIFs, setPopGIFs] = useState(PopGifTest);
  const [popVideos, setPopVideos] = useState([]);
  const [popPlaylists, setPopPlaylists] = useState([]);

  useEffect(() => {
    console.log(
      "=============================[Main.js]============================="
    );
    popCommu();
    popGIF();
    popVideo();
    popPlaylist();
  }, []);

  // 인기 잡담글 조회
  const popCommu = () => {
    axios
      .get(preURL.preURL + "/main/community")
      .then((res) => {
        console.log("❕인기 잡담글 조회❕ ", res.data);
        setpopCommus(res.data);
      })
      .catch((err) => {
        console.error("⚠️ 인기 잡담글 조회 ⚠️ ", err);
      });
  };

  // 인기 짤 조회
  const popGIF = () => {
    axios
      .get(preURL.preURL + "/main/image")
      .then((res) => {
        console.log("❕인기 짤 조회❕ ", res.data);
        if (res.data.length > 1) {
          setPopGIFs(res.data);
        }
      })
      .catch((err) => {
        console.error("⚠️ 인기 짤 조회 ⚠️ ", err);
      });
  };

  // 인기 영상 조회
  const popVideo = () => {
    axios
      .get(preURL.preURL + "/main/video")
      .then((res) => {
        console.log("❕인기 영상 조회❕ ", res.data);
        setPopVideos(res.data);
        console.log(popVideos);
      })
      .catch((err) => {
        console.error("⚠️ 인기 영상 조회 ⚠️ ", err);
      });
  };

  // 인기 플레이리스트 조회
  const popPlaylist = () => {
    axios
      .get(preURL.preURL + "/main/playlist")
      .then((res) => {
        console.log("❕인기 플레이리스트 조회❕ ", res.data);
        // setPopPlaylists(res.data);
        console.log(popPlaylists);
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
        <PopVidsContainer></PopVidsContainer>
        <ElevatorContainer>
          <Num>0위</Num>
          <UpBtn />
          <DownBtn />
        </ElevatorContainer>
      </Second>
      <Third></Third>
      <Fourth></Fourth>
      <Footer />
    </Wrapper>
  );
};

export default Main;
