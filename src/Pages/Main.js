import React, { useEffect, useState } from "react";
import axios from "axios";
import preURL from "../preURL/preURL";
import styled from "styled-components";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import OneVideo from "../Components/Main/OneVideo";

// Assets
import Temp_gif from "../Assets/Temp_gif.png";
import Go_To_Run from "../Assets/Go_To_Run.png";
import Main_Article from "../Assets/Main_Article.png";
import Main_GIF from "../Assets/Main_GIF.png";
import { StyledDiv, StyledDivColumn, StyledDivRow } from "../Style/StyledDiv";
import StyledBtn from "../Style/StyledBtn";

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { light } from "../Style/Color";
import { Link } from "react-router-dom";
import OnePly from "../Components/Main/Oneply";

const Main = () => {
  const [popCommus, setpopCommus] = useState([]);
  const [popGIFs, setPopGIFs] = useState([
    { id: 0, imageUrl: `${Temp_gif}`, likeCount: 100 },
    { id: 0, imageUrl: `${Temp_gif}`, likeCount: 100 },
    { id: 0, imageUrl: `${Temp_gif}`, likeCount: 100 },
    { id: 0, imageUrl: `${Temp_gif}`, likeCount: 100 },
    { id: 0, imageUrl: `${Temp_gif}`, likeCount: 100 },
  ]);
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
        setPopPlaylists(res.data);
      })
      .catch((err) => {
        console.error("⚠️ 인기 플레이리스트 조회 ⚠️ ", err);
      });
  };

  return (
    <>
      <Header />
      <StyledDiv>
        <Link to="/running">
          <img src={Go_To_Run} style={{ width: "624px", height: "415px" }} />
        </Link>
        <FirstBWrapper>
          {/* 인기 게시글  */}
          <PopArticleContainer>
            <div style={{ paddingTop: 50, paddingLeft: 20 }}>
              {popCommus.map((i) => {
                let url = `/community/${i.id}`;
                return (
                  <Link to={url} style={{ textDecoration: "none" }}>
                    <StyledBtn
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        height: 26,
                        width: 460,
                      }}
                    >
                      <p style={{ fontSize: 13 }}>
                        {i.title}
                        {i.commentCount}
                      </p>
                      <StyledDivRow>
                        <FontAwesomeIcon
                          icon={faHeart}
                          style={{
                            marginRight: 5,
                            color: `${light.colors.mainColor}`,
                          }}
                        />
                        <p
                          style={{
                            color: `${light.colors.mainColor}`,
                            fontSize: 12,
                          }}
                        >
                          {i.likeCount}
                        </p>
                      </StyledDivRow>
                    </StyledBtn>
                  </Link>
                );
              })}
            </div>
          </PopArticleContainer>

          {/* 인기 짤  */}
          <PopGIFContainer>
            <div style={{ paddingTop: 50, paddingLeft: 20 }}>
              {popGIFs.map((i) => {
                let url = `/boards/${i.id}`;
                return (
                  <Link to={url} style={{ textDecoration: "none" }}>
                    <StyledBtn>
                      <StyledDivColumn
                        style={{
                          margin: 5,
                          marginLeft: 10,
                          marginRight: 10,
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={i.imageUrl}
                          style={{ width: 74, height: 67 }}
                        />
                        <StyledDivRow>
                          <FontAwesomeIcon
                            icon={faHeart}
                            style={{
                              marginRight: 5,
                              color: `${light.colors.mainColor}`,
                            }}
                          />
                          <p
                            style={{
                              color: `${light.colors.mainColor}`,
                              fontSize: 12,
                            }}
                          >
                            {i.likeCount}
                          </p>
                        </StyledDivRow>
                      </StyledDivColumn>
                    </StyledBtn>
                  </Link>
                );
              })}
            </div>
          </PopGIFContainer>
        </FirstBWrapper>
      </StyledDiv>
      <PWrapper>
        <Subheading>지금 가장 인기 있는 영상</Subheading>
        <StyledDivRow>
          {popVideos.map((video) => {
            return <OneVideo video={video} />;
          })}
        </StyledDivRow>
      </PWrapper>
      <PWrapper style={{ marginTop: "42px" }}>
        <Subheading>지금 가장 인기 있는 플레이리스트</Subheading>
        <StyledDivRow>
          {popPlaylists.map((plylist) => {
            return <OnePly ply={plylist} />;
          })}
        </StyledDivRow>
      </PWrapper>
      <Footer />
    </>
  );
};

export default Main;

const FirstBWrapper = styled(StyledDivColumn)`
  margin-left: 15px;
  margin-bottom: 15px;
`;

const TagBox = styled.div`
  width: 161px;
  height: 31px;
  background-color: #f3e1ec;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 71px;
`;

const Tag = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #532a6b;
`;

const PWrapper = styled.div`
  margin: 0px 70px 0px 70px;
`;

const Subheading = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`;

const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PopArticleContainer = styled.div`
  background-image: url(${Main_Article});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 521px;
  height: 169px;
`;

const PopGIFContainer = styled.div`
  background-image: url(${Main_GIF});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 521px;
  height: 170px;
`;
