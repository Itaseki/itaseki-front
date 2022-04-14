import React, { useEffect, useState } from "react";
import axios from "axios";
import preURL from "../preURL/preURL";
import styled from "styled-components";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

// Assets
import Home_running from "../Assets/Home_running.png";
import Temp_gif from "../Assets/Temp_gif.png";

const Main = () => {
  const [pVideos, setPVideos] = useState([
    { image: Temp_gif, tags: "태그1" },
    { image: Temp_gif, tags: "태그2" },
    { image: Temp_gif, tags: "태그3" },
    { image: Temp_gif, tags: "태그4" },
  ]);
  const [pPlaylists, setPPlaylists] = useState([
    { image: Temp_gif, tags: "태그1" },
    { image: Temp_gif, tags: "태그2" },
    { image: Temp_gif, tags: "태그3" },
    { image: Temp_gif, tags: "태그4" },
  ]);

  const PVideoList = pVideos.map((video, index) => (
    <div key={index}>
      <img
        src={video.image}
        style={{
          width: "253px",
          height: "142px",
          marginTop: "17px",
          marginBottom: "22px",
        }}
      />
      <TagBox>
        <Tag>#{video.tags}</Tag>
      </TagBox>
    </div>
  ));

  const PPlaylistList = pPlaylists.map((playlist, index) => (
    <div key={index}>
      <img
        src={playlist.image}
        style={{
          width: "253px",
          height: "142px",
          marginTop: "17px",
          marginBottom: "22px",
        }}
      />
      <TagBox>
        <Tag>#{playlist.tags}</Tag>
      </TagBox>
    </div>
  ));

  return (
    <>
      <Header />
      <FirstBWrapper>
        <img
          src={Home_running}
          style={{ width: "593.02px", height: "321.81px" }}
        />
      </FirstBWrapper>
      <PWrapper>
        <Subheading>지금 가장 인기 있는 영상</Subheading>
        <ListWrapper>{PVideoList}</ListWrapper>
      </PWrapper>
      <PWrapper style={{ marginTop: "42px" }}>
        <Subheading>지금 가장 인기 있는 플레이리스트</Subheading>
        <ListWrapper>{PPlaylistList}</ListWrapper>
      </PWrapper>
      <Footer />
    </>
  );
};

export default Main;

const FirstBWrapper = styled.div`
  margin: 22px 70px 74px 70px;
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
