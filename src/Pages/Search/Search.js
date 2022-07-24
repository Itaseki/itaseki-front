import React, { useState } from "react";
import Header from "../../Components/Header";
import WriteWord from "../../Style/WriteWord";

import Search_Vanner from "../../Assets/Search_Vanner.png";
import styled from "styled-components";
import axios from "axios";
import preURL from "../../preURL/preURL";
import OneVideo from "../../Components/Video/OneVideo";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const [video, setVideo] = useState([
    { id: 1, thumbnailUrl: "", tags: ["복불복", "밥"] },
  ]);

  const handleChanges = (e) => {
    setKeyword(e.target.value);
    searchVideo();
  };

  // 영상 검색 조회
  const searchVideo = () => {
    let url = preURL.preURL + `/search/video?sort=id,DESC&q=${keyword}`;
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

  return (
    <div>
      <Header />
      <WriteInput onChange={handleChanges} />
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
      <p
        style={{
          position: "absolute",
          left: 133,
          top: 259,
          fontWeight: "bold",
        }}
      >
        "{keyword}"에 관한 영상 검색결과에요!
      </p>
      <OneVideo video={video} />
    </div>
  );
};

export default Search;

const WriteInput = styled.input`
  border: none;
  cursor: pointer;
  position: fixed;
  top: 6.3%;
  right: 12%;
  background-color: black;
  padding: 5px;
  padding-left: 40px;
  padding-right: 40px;
  border-radius: 15px;
  color: white;
`;
