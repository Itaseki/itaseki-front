import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import preURL from "../../preURL/preURL";
// Components
import Header from "../../Components/Header";
import OneVideo from "../../Components/Video/OneVideo";
import Pagination from "../../Components/Pagination";
import { StyledDivColumn, StyledDivRow } from "../../Style/StyledDiv";
import OnePly from "../../Components/Playlist/Oneply";
import {
  Category,
  ResultBox,
  RunningBtn,
  SearchBox,
  WriteInput,
} from "../../Style/Search";
import { SortBox, VideoList, Wrapper } from "../../Style/Video";
// Assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Rabbits from "../../Assets/Three_Rabbits.png";
import StyledBtn from "../../Style/StyledBtn";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const [video, setVideo] = useState([]);
  // { id: 0, thumbnailUrl: "", tags: [] }
  const [ply, setPly] = useState([]);
  const [tag, setTag] = useState("");
  const [sort, setSort] = useState("id");

  const [vPage, setVPage] = useState(0);
  const [vTotalPage, setVTotalPage] = useState(6);
  const [vPages, setVPages] = useState([1, 2, 3, 4, 5]);

  const [pPage, setPPage] = useState(0);
  const [pTotalPage, setPTotalPage] = useState(6);
  const [pPages, setPPages] = useState([1, 2, 3, 4, 5]);

  const handleChanges = (e) => {
    setKeyword(e.target.value);
    searchVideo();
    searchPlaylist();
  };

  // 초기화 버튼
  const handleReset = () => {
    setKeyword("");
  };

  // 검색 버튼
  const handleSearch = () => {
    searchVideo();
    searchPlaylist();
  };

  // 최신순 정렬
  const onClickSortNewest = () => {
    console.log("최신순 정렬");
    setSort("id");
  };

  // 좋아요순 정렬
  const onClickSortLike = () => {
    console.log("좋아요순 정렬");
    setSort("likeCount");
  };

  // 영상 검색 조회
  const searchVideo = () => {
    let url =
      preURL.preURL +
      `/search/video?sort=${sort}&tag=${tag}&q=${keyword}&page=${vPage}`;
    console.log("url: ", url);
    axios
      .get(url)
      .then((res) => {
        console.log("❕영상 검색 조회❕ ", res.data);
        let data = res.data;
        const totalPage = data["totalPageCount"];
        const posts = data["data"];
        setVideo(posts);
        setVTotalPage(totalPage);
        let list = [];
        if (totalPage >= 5) list = [1, 2, 3, 4, 5];
        else {
          for (let i = 1; i <= totalPage; i++) list.push(i);
        }
        setVPages(list);
      })
      .catch((err) => {
        console.error("⚠️ 영상 검색 조회 ⚠️ ", err);
      });
  };

  // 플레이리스트 검색 조회
  const searchPlaylist = () => {
    let url =
      preURL.preURL +
      `/search/playlist?sort=${sort}&tag=${tag}&q=${keyword}&page=${pPage}`;
    console.log("url: ", url);
    axios
      .get(url)
      .then((res) => {
        console.log("플레이리스트 검색 조회❕ ", res.data);
        let data = res.data;
        const totalPage = data["totalPageCount"];
        const posts = data["data"];
        setPly(posts);
        setPTotalPage(totalPage);
        let list = [];
        if (totalPage >= 5) list = [1, 2, 3, 4, 5];
        else {
          for (let i = 1; i <= totalPage; i++) list.push(i);
        }
        setPPages(list);
      })
      .catch((err) => {
        console.error("⚠️ 플레이리스트 검색 조회 ⚠️ ", err);
      });
  };

  return (
    <Wrapper>
      <Header />
      <SearchBox>
        <WriteInput value={keyword} onChange={handleChanges} />
        <FontAwesomeIcon
          icon={faCircleXmark}
          style={{ fontSize: "130%" }}
          onClick={() => handleReset()}
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{ fontSize: "130%" }}
          onClick={() => handleSearch()}
        />
      </SearchBox>
      <Link
        to="/reservation"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <RunningBtn>
          <p>지금 달리고 있는 인기 클립은? 바로 달리러 가기!</p>
          <img src={Rabbits} style={{ width: "15%" }} />
        </RunningBtn>
      </Link>
      <StyledDivColumn style={{ width: "80%" }}>
        <ResultBox>
          <StyledDivRow style={{ width: "80%" }}>
            <span style={{ color: "#D9767C" }}>'{keyword}'</span>
            <span>의 검색결과에요!</span>
          </StyledDivRow>
          <SortBox>
            <StyledBtn onClick={onClickSortNewest}>최신순</StyledBtn>
            <p>|</p>
            <StyledBtn onClick={onClickSortLike}>좋아요순</StyledBtn>
          </SortBox>
        </ResultBox>
        {video.length >= 1 && (
          <StyledDivColumn>
            <Category>동영상</Category>
            <VideoList>
              {video.map((v) => {
                console.log(v);
                return <OneVideo video={v} />;
              })}
            </VideoList>
            <Pagination
              pages={vPages}
              setPages={setVPages}
              setPage={setVPage}
              totalPageCount={vTotalPage}
            />
          </StyledDivColumn>
        )}
        {ply.length >= 1 && (
          <StyledDivColumn>
            <Category>플레이리스트</Category>
            <VideoList>
              {ply.map((p) => {
                return <OnePly ply={p} />;
              })}
            </VideoList>
            <Pagination
              pages={pPages}
              setPages={setPPages}
              setPage={setPPage}
              totalPageCount={pTotalPage}
            />
          </StyledDivColumn>
        )}
      </StyledDivColumn>
    </Wrapper>
  );
};

export default Search;
