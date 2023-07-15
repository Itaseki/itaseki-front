import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import preURL from "../../preURL/preURL";
import Header from "../../Components/Header";
import Pagination from "../../Components/Pagination";
// Style
import StyledBtn from "../../Style/StyledBtn";
import WriteBtn from "../../Style/WriteBtn";
import WriteWord from "../../Style/WriteWord";
import { light } from "../../Style/Color";
// Assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Best_GIF from "../../Assets/Best_GIF.png";

import { StyledDivColumn } from "../../Style/StyledDiv";
import {
  BestGIF,
  BestGIFWrapper,
  GIFBox,
  Line,
  ListWrapper,
  MapList,
  Sort2Box,
  Wrapper,
} from "../../Style/GIFBoard";
import { GifTest } from "../../TestData/BoardTestData";

const GIFBoard = () => {
  const mainOrange = light.colors.mainColor;

  // 베스트 짤 리스트
  const [bestGIFs, setBestGIFs] = useState(GifTest);
  // 전체 짤 (2줄로 나눔)
  const [gifs1, setGIFs1] = useState(GifTest);
  const [gifs2, setGIFs2] = useState(GifTest);

  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState([1, 2, 3, 4, 5]);
  // 정렬 기준
  const [sort1, setSort1] = useState("id,DESC");
  const [sort2, setSort2] = useState("id,DESC");

  // 새 짤 이미지
  const [photo, setPhoto] = useState(false);
  const [files, setFiles] = useState("");
  const [previewImg, setPreviewImg] = useState(null);
  const [title, setTitle] = useState("");

  const KeyCodes = {
    comma: 188,
    enter: 13,
  };

  const delimiters = [KeyCodes.comma, KeyCodes.enter];
  useEffect(() => {
    console.log(
      "==========================[GIFBoard]=========================="
    );
    bestImages();
    allImage();
  }, []);

  // 베스트짤 조회, response data 가공 필요
  const bestImages = () => {
    axios
      .get(preURL.preURL + "/boards/image/best")
      .then((res) => {
        console.log("❕베스트짤 조회❕ ", res.data);
        setBestGIFs(res.data);
      })
      .catch((err) => {
        console.error("⚠️ 베스트짤 조회 ⚠️ ", err);
      });
  };

  const bestGIFList = bestGIFs.map((gifs, index) => {
    let url = `/boards/:${gifs.id}`;
    return (
      <div key={index} style={{ marginLeft: 12, marginRight: 12 }}>
        <Link to={url}>
          <StyledBtn>
            <img
              src={gifs.imageUrl}
              alt="베스트짤 썸네일"
              style={{ width: 98, height: 86 }}
            />
          </StyledBtn>
        </Link>
        <MapList>
          <StyledBtn>
            <FontAwesomeIcon
              icon={faHeart}
              style={{
                fontSize: "80%",
                color: "#D9767C",
                marginRight: "4.32px",
              }}
            />
          </StyledBtn>
          <p style={{ fontSize: "12px", color: "#D9767C" }}>{gifs.likeCount}</p>
        </MapList>
      </div>
    );
  });

  // 전체 짤 조회, response data 가공 필요
  const allImage = () => {
    let url = `/boards/image?page=${page}&sort=${sort1}&sort=${sort2}&q=`;
    console.log(url);
    axios
      .get(preURL.preURL + url)
      .then((res) => {
        console.log("❕전체 짤 조회❕ ", res.data);
        setTotalPage(res.data.totalPageCount);
        let gif1 = res.data.imageBoardsResponses.slice(0, 5);
        let gif2 = res.data.imageBoardsResponses.slice(5);
        setGIFs1(gif1);
        setGIFs2(gif2);
      })
      .catch((err) => {
        console.log("⚠️ 전체 짤 조회 ⚠️ ", err);
      });
  };

  const gifList1 = gifs1.map((gifs, index) => {
    let url = `/boards/:${gifs.id}`;
    return (
      <GIFBox key={index}>
        <Link to={url}>
          <StyledBtn>
            <img
              src={gifs.imageUrl}
              alt="짤 썸네일"
              style={{ width: 98, height: 86 }}
            />
          </StyledBtn>
        </Link>
        <MapList>
          <StyledBtn>
            <FontAwesomeIcon
              icon={faHeart}
              style={{
                fontSize: "80%",
                color: `${mainOrange}`,
                marginRight: "4.32px",
              }}
            />
          </StyledBtn>
          <p style={{ fontSize: "12px", color: `${mainOrange}` }}>
            {gifs.likeCount}
          </p>
        </MapList>
      </GIFBox>
    );
  });

  const gifList2 = gifs2.map((gifs, index) => {
    let url = `/boards/:${gifs.id}`;
    return (
      <GIFBox key={index}>
        <Link to={url}>
          <StyledBtn>
            <img
              src={gifs.imageUrl}
              alt="짤 썸네일"
              style={{ width: 98, height: 86 }}
            />
          </StyledBtn>
        </Link>
        <MapList>
          <StyledBtn>
            <FontAwesomeIcon
              icon={faHeart}
              style={{
                fontSize: "80%",
                color: `${mainOrange}`,
                marginRight: "4.32px",
              }}
            />
          </StyledBtn>
          <p style={{ fontSize: "12px", color: `${mainOrange}` }}>
            {gifs.likeCount}
          </p>
        </MapList>
      </GIFBox>
    );
  });

  return (
    <div>
      <Header />
      <Link to="/newboard">
        <WriteBtn>
          <WriteWord>새 짤글 쓰기</WriteWord>
        </WriteBtn>
      </Link>
      <Wrapper>
        <BestGIFWrapper>
          <BestGIF src={Best_GIF} />
          <ListWrapper>{bestGIFList}</ListWrapper>
        </BestGIFWrapper>
        <StyledDivColumn style={{ alignItems: "center" }}>
          <ListWrapper>{gifList1}</ListWrapper>
          <Line />
          <ListWrapper>{gifList2}</ListWrapper>
          <Line />
        </StyledDivColumn>
        <Sort2Box>
          <StyledBtn
            style={{ fontSize: "10px", color: "#9E8FA8", marginRight: 4 }}
            onClick={() => setSort2("id,DESC")}
          >
            최신순
          </StyledBtn>
          <p style={{ fontSize: "10px", color: "#9E8FA8", marginRight: 4 }}>
            |
          </p>
          <StyledBtn
            style={{ fontSize: "10px", color: "#9E8FA8" }}
            onClick={() => setSort2("likeCount,DESC")}
          >
            좋아요순
          </StyledBtn>
        </Sort2Box>
        <Pagination
          pages={pages}
          setPages={setPages}
          setPage={setPage}
          totalPageCount={totalPage}
        />
      </Wrapper>
    </div>
  );
};

export default GIFBoard;
