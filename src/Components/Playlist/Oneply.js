import React from "react";
import {useNavigate} from "react-router-dom";
// Style
import styled from "styled-components";
import StyledBtn from "../../Style/StyledBtn";
import { light } from "../../Style/Color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
// Assets
import Line_info from "../../Assets/Line_info.png";
import Ply_Count_Icon from "../../Assets/Ply_Count_Icon.png";
import Ply_preview from "../../Assets/Ply_preview.png";

// 플레이리스트 한개
const OnePly = ({ply}) => {
  const colors = light.colors;
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
            <span style={{ color: light.colors.mainColor }}>
              {ply.likeCount}
            </span>
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


const OnePlyWrapper = styled.div`
  width: 25%;
`

const PlyContainer = styled.div`
  background-color: gray;
  width: 240px;
  height: 135px;
  position: relative;
  cursor: pointer;
  & > #thumbnail {
    width: 240px;
    height: 135px;
    position: absolute;
  }
  & > #cover {
    position: absolute;
    z-index: 2;
    right: 0;
  }
`

// 플레이리스트 하단 정보
const PlyInfo = styled.div`
  width: 240px;
  margin: 3px 0;
  display: flex;
  justify-content: space-between;
  & > #title {
    cursor: pointer;
  }
  & > #info-right {
    display: flex;
    align-items: center;
  }
`