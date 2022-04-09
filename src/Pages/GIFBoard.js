import React, { useEffect, useState } from "react";
import axios from "axios";
import preURL from "../preURL/preURL";
import styled from "styled-components";
import Header from "../Components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCaretRight } from "@fortawesome/free-solid-svg-icons";

// style
import StyledBtn from "../Style/StyledBtn";
// assets
import Best_GIF from "../Assets/Best_GIF.png";
import Temp_gif from "../Assets/Temp_gif.png";

const GIFBoard = () => {
  // 베스트 짤 리스트
  const [bestGIFs, setBestGIFs] = useState([
    { image: Temp_gif, heart: 1 },
    { image: Temp_gif, heart: 1 },
    { image: Temp_gif, heart: 3 },
    { image: Temp_gif, heart: 2 },
    { image: Temp_gif, heart: 5 },
    { image: Temp_gif, heart: 9 },
  ]);
  const [gifs1, setGIFs1] = useState([
    { image: Temp_gif, heart: 1 },
    { image: Temp_gif, heart: 1 },
    { image: Temp_gif, heart: 3 },
    { image: Temp_gif, heart: 2 },
    { image: Temp_gif, heart: 5 },
  ]);
  const [gifs2, setGIFs2] = useState([
    { image: Temp_gif, heart: 1 },
    { image: Temp_gif, heart: 1 },
    { image: Temp_gif, heart: 3 },
    { image: Temp_gif, heart: 2 },
    { image: Temp_gif, heart: 5 },
  ]);
  // 페이지 목록, 가장 마지막 페이지일 때 ▷ 버튼을 클릭하면 페이지 번호+1
  const [pages, setPages] = useState([1, 2, 3, 4, 5]);
  // 현재 페이지
  const [page, setPage] = useState(1);

  useEffect(() => {
    console.log(
      "==========================[GIFBoard]=========================="
    );
  });

  // 베스트짤 조회
  const bestImages = () => {
    axios
      .get(preURL.preURL + "/boards/image/best")
      .then((res) => {
        console.log("❕베스트짤 조회❕ ", res.data);
      })
      .catch((err) => {
        console.log("⚠️ 베스트짤 조회 ⚠️ ", err);
      });
  };

  const bestGIFList = bestGIFs.map((gifs, index) => (
    <div key={index} style={{ marginLeft: 12, marginRight: 12 }}>
      <StyledBtn>
        <img src={gifs.image} style={{ width: 98, height: 86 }} />
      </StyledBtn>
      <MapList>
        <StyledBtn>
          <FontAwesomeIcon
            icon={faHeart}
            style={{ fontSize: "80%", color: "#D9767C", marginRight: "4.32px" }}
          />
        </StyledBtn>
        <p style={{ fontSize: "12px", color: "#D9767C" }}>{gifs.heart}</p>
      </MapList>
    </div>
  ));

  const gifList1 = gifs1.map((gifs, index) => (
    <GIFBox key={index}>
      <StyledBtn>
        <img src={gifs.image} style={{ width: 98, height: 86 }} />
      </StyledBtn>
      <MapList>
        <StyledBtn>
          <FontAwesomeIcon
            icon={faHeart}
            style={{ fontSize: "80%", color: "#D9767C", marginRight: "4.32px" }}
          />
        </StyledBtn>
        <p style={{ fontSize: "12px", color: "#D9767C" }}>{gifs.heart}</p>
      </MapList>
    </GIFBox>
  ));

  const gifList2 = gifs2.map((gifs, index) => (
    <GIFBox key={index}>
      <StyledBtn>
        <img src={gifs.image} style={{ width: 98, height: 86 }} />
      </StyledBtn>
      <MapList>
        <StyledBtn>
          <FontAwesomeIcon
            icon={faHeart}
            style={{ fontSize: "80%", color: "#D9767C", marginRight: "4.32px" }}
          />
        </StyledBtn>
        <p style={{ fontSize: "12px", color: "#D9767C" }}>{gifs.heart}</p>
      </MapList>
    </GIFBox>
  ));

  // 상세 짤 조회
  const image = () => {
    axios
      .get(preURL.preURL + `/boards/image/${1}`) // imageID 넣기
      .then((res) => {
        console.log("❕상세 짤 조회❕ ", res.data);
      })
      .catch((err) => {
        console.log("⚠️ 상세 짤 조회 ⚠️ ", err);
      });
  };
  // 전체 짤 조회
  const allImage = () => {
    axios
      .get(preURL.preURL + "/boards/image")
      .then((res) => {
        console.log("❕전체 짤 조회❕ ", res.data);
      })
      .catch((err) => {
        console.log("⚠️ 전체 짤 조회 ⚠️ ", err);
      });
  };

  const pageNum = pages.map((page) => (
    <StyledBtn style={{ fontSize: "20px", padding: "10.5px" }}>
      {page}
    </StyledBtn>
  ));

  return (
    <div>
      <Header />
      <Wrapper>
        <BestGIFWrapper>
          <BestGIF src={Best_GIF} />
          <ListWrapper>{bestGIFList}</ListWrapper>
        </BestGIFWrapper>
        <div>
          <ListWrapper>{gifList1}</ListWrapper>
          <Line />
          <ListWrapper>{gifList2}</ListWrapper>
          <Line />
        </div>
        <SortBox>
          <StyledBtn
            style={{ fontSize: "10px", color: "#9E8FA8", marginRight: 4 }}
          >
            최신순
          </StyledBtn>
          <p style={{ fontSize: "10px", color: "#9E8FA8", marginRight: 4 }}>
            |
          </p>
          <StyledBtn style={{ fontSize: "10px", color: "#9E8FA8" }}>
            좋아요순
          </StyledBtn>
        </SortBox>
        <PageNums>
          <PageNum>{pageNum}</PageNum>
          <StyledBtn>
            <FontAwesomeIcon
              icon={faCaretRight}
              style={{
                fontSize: "20px",
                color: "#9C9C9C",
                marginLeft: "10.5px",
              }}
              onClick={console.log("되넹")}
            />
          </StyledBtn>
        </PageNums>
      </Wrapper>
    </div>
  );
};

export default GIFBoard;

// const StyledBtn = styled.button`
//   background-color: white;
//   padding: 0;
//   margin: 0;
//   border: none;
//   cursor: pointer;
// `;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BestGIFWrapper = styled.div`
  width: 846px;
  height: 114px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-top: 44px;
  padding-bottom: 27px;
  border-bottom: 1px solid #9c9c9c;
`;

const BestGIF = styled.img`
  width: 88px;
  height: 90px;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const MapList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

const GIFBox = styled.div`
  margin: 31px 47px 12px 47px;
`;

const Line = styled.div`
  border-bottom: 1px solid #9c9c9c;
`;

const SortBox = styled.div`
  width: 950px;
  display: flex;
  justify-content: flex-end;
`;

const PageNums = styled.div`
  width: 221px;
  height: 17px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const PageNum = styled.div`
  display: flex;
  flex-direction: row;
`;
