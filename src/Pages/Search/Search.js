import React, { useState } from "react";
import Header from "../../Components/Header";
import WriteWord from "../../Style/WriteWord";

import Search_Vanner from "../../Assets/Search_Vanner.png";
import styled from "styled-components";
import axios from "axios";
import preURL from "../../preURL/preURL";
import OneVideo from "../../Components/Video/OneVideo";
import { StyledDivColumn, StyledDivRow } from "../../Style/StyledDiv";
import OnePly from "../../Components/Playlist/Oneply";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const [video, setVideo] = useState([]);
  // { id: 0, thumbnailUrl: "", tags: [] }
  const [ply, setPly] = useState([]);

  const handleChanges = (e) => {
    setKeyword(e.target.value);
    searchVideo();
    searchPlaylist();
  };

  // 영상 검색 조회
  const searchVideo = () => {
    let url =
      preURL.preURL +
      `/search/video?sort=likeCount,DESC&sort=id,DESC&q=${keyword}`;
    console.log("url: ", url);
    axios
      .get(url)
      .then((res) => {
        console.log("❕영상 검색 조회❕ ", res.data);
        setVideo(res.data);
      })
      .catch((err) => {
        console.error("⚠️ 영상 검색 조회 ⚠️ ", err);
      });
  };

  const showVids = () => {
    let fourVids = [];
    let result = []; // 4개씩 담은 이중배열
    for (let i = 0; i < video.length; i++) {
      fourVids = [...fourVids, video[i]];
      if (fourVids.length === 4) {
        result.push(fourVids);
        fourVids = [];
      }
    }
    result.push(fourVids);

    return result.map((fourVids) => {
      return (
        <StyledDivRow
          style={{ width: "100%", justifyContent: "space-between" }}
        >
          {fourVids.map((v) => {
            return <OneVideo video={v} />;
          })}
        </StyledDivRow>
      );
    });
  };

  // 플레이리스트 검색 조회
  const searchPlaylist = () => {
    let url = preURL.preURL + `/search/playlist?sort=id,DESC&q=${keyword}`;
    console.log("url: ", url);
    axios
      .get(url)
      .then((res) => {
        console.log("플레이리스트 검색 조회❕ ", res.data);
        setPly(res.data);
      })
      .catch((err) => {
        console.error("⚠️ 플레이리스트 검색 조회 ⚠️ ", err);
      });
  };

  const showPlys = () => {
    let fourPly = [];
    let result = []; // 4개씩 담은 이중배열
    for (let i = 0; i < ply.length; i++) {
      fourPly = [...fourPly, ply[i]];
      if (fourPly.length === 4) {
        result.push(fourPly);
        fourPly = [];
      }
    }
    result.push(fourPly);

    return result.map((fourPly) => {
      return (
        <StyledDivRow
          style={{ width: "100%", justifyContent: "space-between" }}
        >
          {fourPly.map((p) => {
            return <OnePly ply={p} />;
          })}
        </StyledDivRow>
      );
    });
  };

  return (
    <div style={{ width: "100%" }}>
      <Header />
      <WriteInput onChange={handleChanges} />
      <Wrapper>
        <img
          src={Search_Vanner}
          style={{
            width: 793,
            height: 70,
            position: "absolute",
            left: 133,
            top: 159,
          }}
        />
        <StyledDivColumn
          style={{ position: "absolute", left: 133, top: 286, width: 1233 }}
        >
          <p
            style={{
              fontWeight: "bold",
            }}
          >
            "{keyword}"에 관한 영상 검색결과에요!
          </p>
          <div>
            <StyledDivColumn>
              {video.length === 0 ? <></> : showVids()}
            </StyledDivColumn>
          </div>
          <p
            style={{
              fontWeight: "bold",
            }}
          >
            "{keyword}"에 관한 플레이리스트 검색결과에요!
          </p>
          <div>
            <StyledDivColumn>
              {ply.length === 0 ? <></> : showPlys()}
            </StyledDivColumn>
          </div>
        </StyledDivColumn>
      </Wrapper>
    </div>
  );
};

export default Search;

const Wrapper = styled.div`
  width: 983px;
`;

const WriteInput = styled.input`
  height: 25.64px;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 6.3%;
  right: 12%;
  background-color: black;
  padding: 5px;
  padding-left: 40px;
  padding-right: 40px;
  border-radius: 71px;
  color: white;
`;
