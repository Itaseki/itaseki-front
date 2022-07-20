import React, { useEffect, useState } from "react";
import axios from "axios";
import preURL from "../../preURL/preURL";
// Components
import Header from "../../Components/Header";
import Pagination from "../../Components/Pagination";
// Style
import { Line, SortBox, Wrapper } from "../../Style/Video";
import {
  FourListWrapper,
  FourList,
  OnePlyWrapper,
  PlyContainer,
  PlyInfo,
  TopBtns,
} from "../../Style/Playlist";
import StyledBtn from "../../Style/StyledBtn";
import { light } from "../../Style/Color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
// Assets
import BestPly from "../../Assets/Best_Ply.png";
import Line_info from "../../Assets/Line_info.png";
import Add_New_Ply from "../../Assets/Add_New_Ply.png";
import Stored_Ply from "../../Assets/Stored_Ply.png";
import Ply_Count_Icon from "../../Assets/Ply_Count_Icon.png";
import Ply_preview from "../../Assets/Ply_preview.png";

// 플레이리스트 한개
const OnePly = (ply) => {
  const colors = light.colors;

  const [bestPlaylist, setBestPlaylist] = useState([
    {
      id: 1,
      title: "베스트 플리1",
      titleImageUrl:
        "https://i.ytimg.com/vi/mKkYQ2OwYYg/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLB-2wmECn5003TmXqION-Nqcgahzw",
      writerNickname: "작성자",
      likeCount: 30,
      saveCount: 3,
      videoCount: 7,
    },
    {
      id: 2,
      title: "베스트 플리2",
      titleImageUrl:
        "https://i.ytimg.com/vi/MRaAcIQOIIw/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDMAXcYHT37gxseIf6CA94ICpnTuQ",
      writerNickname: "작성자",
      likeCount: 25,
      saveCount: 3,
      videoCount: 7,
    },
    {
      id: 3,
      title: "베스트 플리3",
      titleImageUrl:
        "https://i.ytimg.com/vi/Q2ehBSEkAzw/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDgtPhu8WY4xOABtcCjVo5x-hgswA",
      writerNickname: "작성자",
      likeCount: 22,
      saveCount: 3,
      videoCount: 7,
    },
    {
      id: 4,
      title: "베스트 플리4",
      titleImageUrl:
        "https://i.ytimg.com/vi/iiIcTPoIoZk/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAjn_R-euhMSNKaCFjJzO89A93tAA",
      writerNickname: "작성자",
      likeCount: 19,
      saveCount: 3,
      videoCount: 7,
    },
  ]);

  // 수정 필요
  const [playlist1, setPlaylist1] = useState([
    {
      id: 1,
      title: "플리1",
      titleImageUrl:
        "https://i.ytimg.com/vi/xhyWDLWanHE/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLDNC541Gll7yxMs9Vcc8MWtC9gzLg",
      writerNickname: "작성자",
      likeCount: 3,
      saveCount: 3,
      videoCount: 7,
    },
    {
      id: 2,
      title: "플리2",
      titleImageUrl:
        "https://i.ytimg.com/vi/MRaAcIQOIIw/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDMAXcYHT37gxseIf6CA94ICpnTuQ",
      writerNickname: "작성자",
      likeCount: 25,
      saveCount: 3,
      videoCount: 7,
    },
    {
      id: 3,
      title: "플리3",
      titleImageUrl:
        "https://i.ytimg.com/vi/1ktnYFMm4S0/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBRJHJTM-_VzaapK9oCWlD8t-K8WQ",
      writerNickname: "작성자",
      likeCount: 3,
      saveCount: 3,
      videoCount: 7,
    },
    {
      id: 4,
      title: "플리4",
      titleImageUrl:
        "https://i.ytimg.com/vi/Q2ehBSEkAzw/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDgtPhu8WY4xOABtcCjVo5x-hgswA",
      writerNickname: "작성자",
      likeCount: 22,
      saveCount: 3,
      videoCount: 7,
    },
  ]);
  const [playlist2, setPlaylist2] = useState([
    {
      id: 5,
      title: "플리5",
      titleImageUrl:
        "https://i.ytimg.com/vi/mKkYQ2OwYYg/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLB-2wmECn5003TmXqION-Nqcgahzw",
      writerNickname: "작성자",
      likeCount: 30,
      saveCount: 3,
      videoCount: 7,
    },
    {
      id: 6,
      title: "플리6",
      titleImageUrl:
        "https://i.ytimg.com/vi/iiIcTPoIoZk/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAjn_R-euhMSNKaCFjJzO89A93tAA",
      writerNickname: "작성자",
      likeCount: 19,
      saveCount: 3,
      videoCount: 7,
    },
    {
      id: 7,
      title: "플리7",
      titleImageUrl:
        "https://i.ytimg.com/vi/UfBxMDp7VTo/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCJF-TybRxbbgYlWXiz2ARY6e-aHw",
      writerNickname: "작성자",
      likeCount: 3,
      saveCount: 3,
      videoCount: 7,
    },
    {
      id: 8,
      title: "플리8",
      titleImageUrl:
        "https://i.ytimg.com/vi/MzVRL5W4b1I/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLDJ-2oHWJdsOn-YBOi9t52n0qepNw",
      writerNickname: "작성자",
      likeCount: 3,
      saveCount: 3,
      videoCount: 7,
    },
  ]);
  const [playlist3, setPlaylist3] = useState([]);
  const [totalPageCount, setTotalPageCount] = useState(0); // 총 페이지 수
  const [pages, setPages] = useState([1, 2, 3, 4, 5]);
  const [page, setPage] = useState(0); // 현재 페이지
  const [sort, setSort] = useState(""); // 좋아요 순이면 -> likeCount,DESC
  const [search, setSearch] = useState("");
  const [nickname, setNickname] = useState("");

  return (
    <OnePlyWrapper>
      <PlyContainer>
        <img id="thumbnail" src={ply.titleImageUrl} alt="썸네일" />
        <img id="cover" src={Ply_preview} alt="썸네일 커버" />
      </PlyContainer>
      <div>
        <PlyInfo>
          <span id="title">{ply.title}</span>
          <div id="info-right">
            <StyledBtn>
              <FontAwesomeIcon
                icon={faHeart}
                style={{
                  fontSize: "80%",
                  color: "#D9767C",
                  marginLeft: "auto",
                }}
              />
            </StyledBtn>
            <span style={{ color: "#D9767C" }}>{ply.likeCount}</span>
            <img
              src={Ply_Count_Icon}
              alt="저장된 카운트"
              style={{ width: "22px", height: "13px", marginLeft: "4px" }}
            />
            <span>{ply.saveCount}</span>
          </div>
        </PlyInfo>
        <div style={{ fontSize: "small" }}>
          <span>{ply.writerNickname}</span>
          <img src={Line_info} alt="line" style={{ margin: "0 10px" }} />
          <span style={{ color: colors.reservColor }}>
            총 {ply.videoCount}개 영상
          </span>
        </div>
      </div>
    </OnePlyWrapper>
  );
};

export default OnePly;
