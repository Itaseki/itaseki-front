import React, { useEffect, useState } from "react";
import axios from "axios";
import preURL from "../../preURL/preURL";
import styled from "styled-components";
import Header from "../../Components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { WithContext as ReactTags } from "react-tag-input";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Pagination from "../../Components/Pagination";

// style
import StyledBtn from "../../Style/StyledBtn";
import WriteBtn from "../../Style/WriteBtn";
import WriteWord from "../../Style/WriteWord";
import { light } from "../../Style/Color";

// assets
import Best_GIF from "../../Assets/Best_GIF.png";
import Temp_gif from "../../Assets/Temp_gif.png";
import { Link } from "react-router-dom";
import { StyledDiv, StyledDivColumn } from "../../Style/StyledDiv";

const GIFBoard = () => {
  const mainOrange = light.colors.mainColor;

  // 베스트 짤 리스트
  const [bestGIFs, setBestGIFs] = useState([
    { id: 1, imageUrl: Temp_gif, heart: 1 },
    { id: 1, imageUrl: Temp_gif, heart: 1 },
    { id: 1, imageUrl: Temp_gif, heart: 3 },
    { id: 1, imageUrl: Temp_gif, heart: 2 },
    { id: 1, imageUrl: Temp_gif, heart: 5 },
    { id: 1, imageUrl: Temp_gif, heart: 9 },
  ]);
  // 전체 짤 (2줄로 나눔)
  const [gifs1, setGIFs1] = useState([
    { id: 1, imageUrl: Temp_gif, heart: 1 },
    { id: 1, imageUrl: Temp_gif, heart: 1 },
    { id: 1, imageUrl: Temp_gif, heart: 3 },
    { id: 1, imageUrl: Temp_gif, heart: 2 },
    { id: 1, imageUrl: Temp_gif, heart: 5 },
  ]);
  const [gifs2, setGIFs2] = useState([
    { id: 1, imageUrl: Temp_gif, heart: 1 },
    { id: 1, imageUrl: Temp_gif, heart: 1 },
    { id: 1, imageUrl: Temp_gif, heart: 3 },
    { id: 1, imageUrl: Temp_gif, heart: 2 },
    { id: 1, imageUrl: Temp_gif, heart: 5 },
  ]);
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState([1, 2, 3, 4, 5]);
  // 정렬 기준
  const [sort1, setSort1] = useState("likeCount,DESC");
  const [sort2, setSort2] = useState("id,DESC");

  // 새 짤글 쓰기 ---------------------------------------------------
  // 새 짤글 쓰기 모달
  const [show, setShow] = useState(false);

  let [tags, setTags] = useState([]);
  if (tags.length >= 4) {
    tags.length = 3;
  }
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
          <p style={{ fontSize: "12px", color: "#D9767C" }}>{gifs.heart}</p>
        </MapList>
      </div>
    );
  });

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
            {gifs.heart}
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
            {gifs.heart}
          </p>
        </MapList>
      </GIFBox>
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
        let gif1 = res.data.imageBoardsResponses.slice(0, 4);
        let gif2 = res.data.imageBoardsResponses.slice(4);
        setGIFs1(gif1);
        setGIFs2(gif2);
      })
      .catch((err) => {
        console.log("⚠️ 전체 짤 조회 ⚠️ ", err);
      });
  };

  // response body 추가 아직 안 함(토큰 필요)
  const onAddNewPost = () => {
    console.log("❕저장 버튼❕");
    axios
      .post(preURL.preURL + `/boards/image`)
      .then((res) => {
        console.log("❕새 짤 등록❕ ", res.data);
      })
      .catch((err) => {
        console.log("⚠️ 새 짤 등록 ⚠️ ", err);
      });
  };

  // Modal
  const handleChange = ({ target: { value } }) => setTitle(value);

  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag) => {
    setTags([...tags, tag]);
  };

  const handleTagClick = (index) => {
    console.log("The tag at index " + index + " was clicked");
  };

  // 사진 받아오기
  const onLoadfile = (e) => {
    const file = e.target.files;
    console.log("파일명 ", file);
    setFiles(file);

    let reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onloadend = () => {
      const previewImgUrl = reader.result;

      if (previewImgUrl) {
        setPreviewImg(previewImgUrl);
      }
    };

    setPhoto(true);
  };

  return (
    <div>
      <Header />
      <WriteBtn onClick={() => setShow(true)}>
        <WriteWord>새 짤글 쓰기</WriteWord>
      </WriteBtn>
      <Wrapper>
        {show ? (
          <Modal>
            <div
              style={{
                width: 792,
                height: 58,
                backgroundColor: "white",
                borderRadius: 14,
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <input
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
              />
            </div>
            <div style={{ alignSelf: "flex-start", marginLeft: "6.3%" }}>
              <ReactTags
                tags={tags}
                delimiters={delimiters}
                handleDelete={handleDelete}
                handleAddition={handleAddition}
                handleTagClick={handleTagClick}
                inputFieldPosition="inline"
                autocomplete
              />
            </div>
            <div
              style={{
                marginTop: "1%",
                display: "flex",
                flexDirection: "row",
                alignSelf: "flex-start",
                marginLeft: "6%",
              }}
            >
              <div
                style={{
                  backgroundColor: "white",
                  width: 184,
                  height: 168,
                  borderRadius: 14,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <form>
                  <input
                    type="file"
                    id="image"
                    accept="img/*"
                    onChange={onLoadfile}
                    style={{ display: "none" }}
                  />
                  <label for="image">
                    <FontAwesomeIcon
                      for="image"
                      icon={faPlus}
                      style={{ fontSize: "150%", color: "9C9C9C" }}
                    />
                  </label>
                </form>
              </div>
              {photo ? (
                <img
                  src={previewImg}
                  alt="img"
                  style={{
                    width: 184,
                    height: 168,
                    borderRadius: 14,
                    marginLeft: 10,
                  }}
                />
              ) : (
                <></>
              )}
            </div>
            <StyledBtn
              type="submit"
              style={{
                backgroundColor: "#6B5F73",
                borderRadius: 14,
                width: 792,
                height: 58,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "5%",
              }}
              onClick={() => onAddNewPost()}
            >
              <p style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>
                확인
              </p>
            </StyledBtn>
          </Modal>
        ) : (
          <></>
        )}
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
  border-bottom: 3px dashed #000000;
`;

const BestGIF = styled.img`
  width: 242.2px;
  height: 239.4px;
  position: relative;
  top: -27px;
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
  margin: 31px 40px 12px 40px;
`;

const Line = styled.div`
  width: 843px;
  border-bottom: 3px dashed #000000;
`;

const Sort2Box = styled.div`
  width: 950px;
  display: flex;
  justify-content: flex-end;
`;

// 새 글 쓰기 모달
const Modal = styled.div`
  background-color: #e5e5e5;
  position: fixed;
  bottom: 0;
  height: 70vh;
  width: 115vh;
  z-index: 100;
  display: flex;
  flex-direction: column;
  padding: 38px;
  padding-left: 5%;
  align-items: center;
`;
