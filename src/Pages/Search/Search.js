import React, { useState } from "react";
import Header from "../../Components/Header";
import axios from "axios";
import preURL from "../../preURL/preURL";
import OneVideo from "../../Components/Video/OneVideo";
import { StyledDivColumn, StyledDivRow } from "../../Style/StyledDiv";
import OnePly from "../../Components/Playlist/Oneply";
import { SearchBox, WriteInput } from "../../Style/Search";
import { Wrapper } from "../../Style/Video";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

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

  const showVids = () => {};

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

  const showPlys = () => {};

  return (
    <Wrapper>
      <Header />
      <SearchBox>
        <WriteInput onChange={handleChanges} />
        <FontAwesomeIcon
          icon={faCircleXmark}
          style={{ fontSize: "130%", marginRight: "1.5%" }}
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{ fontSize: "130%", marginRight: "1.5%" }}
        />
      </SearchBox>
      <StyledDivColumn>
        <p
          style={{
            fontWeight: "bold",
          }}
        >
          "{keyword}"의 검색결과에요!
        </p>
        <div>
          <StyledDivColumn>
            {video.length === 0 ? <></> : showVids()}
          </StyledDivColumn>
        </div>
        <div>
          <StyledDivColumn>
            {ply.length === 0 ? <></> : showPlys()}
          </StyledDivColumn>
        </div>
      </StyledDivColumn>
    </Wrapper>
  );
};

export default Search;
