import React from "react";
import { useNavigate } from "react-router-dom";
// Style
import styled from "styled-components";
import StyledBtn from "../../Style/StyledBtn";
import { light } from "../../Style/Color";
// Assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Ply_preview from "../../Assets/Ply_preview.png";

// 플레이리스트 한개
const MyPly = ({ ply }) => {
  const navigate = useNavigate();

  return (
    <OnePlyWrapper>
      <PlyContainer onClick={() => navigate(`/playlist/${ply.id}`)}>
        <img id="thumbnail" src={ply.titleImageUrl} alt="썸네일" />
        <img id="cover" src={Ply_preview} alt="썸네일 커버" />
      </PlyContainer>
      <div>
        <PlyInfo>
          <span id="title" onClick={() => navigate(`/playlist/${ply.id}`)}>
            {ply.title}
          </span>
          {ply.isPublic !== null && (
            <SwitchBtn>{ply.isPublic === true ? "공개" : "비공개"}</SwitchBtn>
          )}
          <div id="info-right">
            <StyledBtn>
              <FontAwesomeIcon
                icon={faHeart}
                style={{
                  fontSize: "80%",
                  color: light.colors.mainColor,
                  marginLeft: "auto",
                }}
              />
            </StyledBtn>
            <span>{ply.likeCount}</span>
          </div>
        </PlyInfo>
      </div>
    </OnePlyWrapper>
  );
};

export default MyPly;

const OnePlyWrapper = styled.div`
  padding: 0 5px 10px;
`;

const PlyContainer = styled.div`
  width: 288px;
  height: 162px;
  position: relative;
  cursor: pointer;
  & > #thumbnail {
    width: 288px;
    height: 162px;
    position: absolute;
    border-radius: 10px;
    object-fit: cover;
  }
  & > #cover {
    position: absolute;
    z-index: 2;
    right: 0;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

// 플레이리스트 하단 정보
const PlyInfo = styled.div`
  width: 100%;
  margin: 3px 0;
  display: flex;
  justify-content: space-between;
  & #title {
    cursor: pointer;
    font-size: 14px;
    line-height: 16px;
  }
  & #info-right {
    display: flex;
    align-items: center;
    font-size: 12px;
    line-height: 15px;
    color: ${light.colors.mainColor};
  }
`;

// 공개/비공개 버튼
const SwitchBtn = styled(StyledBtn)`
  font-family: "EF_Diary";
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.02em;

  color: #ffffff;
`;
