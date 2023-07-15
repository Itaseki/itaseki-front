import axios from "axios";
import React, { useEffect, useState } from "react";
import { WithContext as ReactTags } from "react-tag-input";
import styled from "styled-components";
import Header from "../../Components/Header";
import preURL from "../../preURL/preURL";
import StyledBtn from "../../Style/StyledBtn";

import {
  StyledDiv,
  StyledDivColumn,
  StyledDivRow,
} from "../../Style/StyledDiv";

import Board_Enter from "../../Assets/Board_Enter.png";
import "../../Style/NewBoard.css";

const NewBoard = () => {
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
    console.log(tags);
  }, [tags]);

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

    console.log(reader);
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

  const onAddNewPost = () => {
    const formData = new FormData();
    formData.append("imageUrl", files);
    let imageBoardDto = JSON.stringify({
      imageBoardTitle: title,
      hashtags: tags,
    });

    formData.append("imageBoardDto", imageBoardDto);
    console.log(
      "url :",
      preURL.preURL + `/boards/image`,
      "보내는 data :",
      formData
    );
    let config = {
      headers: {
        "Content-Type": `application/x-www-form-urlencoded`,
      },
    };

    // 임시
    alert("새 짤이 등록되었습니다!");
    document.location.href = "/boards";
    axios
      .post(preURL.preURL + `/boards/image`, formData, config)
      .then((res) => {
        console.log("❕새 짤 등록❕ ", res.data);
      })
      .catch((err) => {
        console.log("⚠️ 새 짤 등록 ⚠️ ", err);
      });
  };

  return (
    <>
      <Header />
      <MainContainer>
        <InputTitle
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
          placeholder="제목을 입력하세요."
        />
        <StyledDivRow
          style={{
            alignItems: "center",
            alignSelf: "flex-start",
            marginLeft: "6.3%",
            marginTop: 20,
          }}
        >
          <ReactTags
            tags={tags}
            delimiters={delimiters}
            handleDelete={handleDelete}
            handleAddition={handleAddition}
            handleTagClick={handleTagClick}
            inputFieldPosition="inline"
            placeholder="해시태그 (최대 3개)"
            autocomplete
            style={{
              width: 146,
              height: 58,
              opacity: 0.65,
              border: "5px dashed #000000",
              borderRadius: 29,
              display: "flex",
              alignItems: "center",
            }}
          />
        </StyledDivRow>
        <div
          style={{
            marginTop: "1%",
            display: "flex",
            flexDirection: "row",
            alignSelf: "flex-start",
            marginLeft: "6%",
          }}
        >
          <StyledDiv
            style={{
              width: 730,
              justifyContent: "center",
              margin: 10,
            }}
          >
            {photo ? (
              <img
                src={previewImg}
                alt="img"
                style={{
                  width: 206,
                  height: 206,
                  borderRadius: 29,
                  marginLeft: 10,
                }}
              />
            ) : (
              <div
                style={{
                  backgroundColor: "white",
                  width: 206,
                  height: 206,
                  border: "5px dashed #000000",
                  borderRadius: 29,
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
                    style={{
                      display: "none",
                    }}
                  />
                  <label
                    for="image"
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                    }}
                  >
                    눌러서 짤 등록하기
                  </label>
                </form>
              </div>
            )}
          </StyledDiv>
        </div>
        <StyledBtn
          type="submit"
          style={{
            borderRadius: 14,
            width: 756,
            height: 81.03,
            backgroundImage: `url(${Board_Enter})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "5%",
          }}
          onClick={() => onAddNewPost()}
        />
      </MainContainer>
    </>
  );
};

export default NewBoard;

const MainContainer = styled(StyledDivColumn)`
  align-items: center;
  position: absolute;
  width: 795px;
  height: 525px;
  left: 303px;
  top: 138px;
  bottom: 0;
  background-color: none;
  border: 6px dashed rgba(0, 0, 0, 0.27);
  border-radius: 50px;
  padding: 50px 20px 50px 20px;
`;

const InputTitle = styled.input`
  width: 657px;
  height: 69px;
  opacity: 0.65;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid #000000;
  border-radius: 22px;
  font-size: 32px;
  padding-left: 25px;
  font-weight: bold;
`;
