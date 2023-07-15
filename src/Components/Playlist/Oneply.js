import React from "react";
import { useNavigate } from "react-router-dom";
// Style
import styled from "styled-components";
import StyledBtn from "../../Style/StyledBtn";
import { StyledDivRow } from "../../Style/StyledDiv";
import { light } from "../../Style/Color";
// Assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Line_info from "../../Assets/Line_info.png";
import Ply_Count_Icon from "../../Assets/Ply_Count_Icon.png";
import Ply_preview from "../../Assets/Ply_preview.png";

// 플레이리스트 한개
const OnePly = ({ ply, best }) => {
  const navigate = useNavigate();

  return (
    <OnePlyWrapper>
      <PlyContainer onClick={() => navigate(`/playlist/${ply.id}`)}>
        <img id="thumbnail" src={ply.titleImageUrl} alt="썸네일" />
        <img id="cover" src={Ply_preview} alt="썸네일 커버" />
      </PlyContainer>
      <StyledDivRow>
        {best && <Rank>{best}</Rank>}
        <PlyInfo>
          <TopInfo>
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
          </TopInfo>
          <BottomInfo>
            <span>{ply.writerNickname}</span>
            <img id="line" src={Line_info} alt="line" />
            <span id="video-cnt">총 {ply.videoCount}개 영상</span>
          </BottomInfo>
        </PlyInfo>
      </StyledDivRow>
    </OnePlyWrapper>
  );
};

export default OnePly;

const OnePlyWrapper = styled.div`
  margin: 0.5%; // TODO or auto
  //margin: auto;
`;

const PlyContainer = styled.div`
  background-color: gray;
  width: 288px;
  height: 162px;
  border-radius: 10px;
  position: relative;
  cursor: pointer;
  & > #thumbnail {
    width: 288px;
    height: 162px;
    border-radius: 10px;
    position: absolute;
    object-fit: cover;
  }
  & > #cover {
    height: 162px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    position: absolute;
    z-index: 2;
    right: 0;
  }
`;

const Rank = styled.p`
  font-family: "Walter Turncoat";
  font-weight: 400;
  font-size: 31px;
  line-height: 43px;
  letter-spacing: 0.05em;

  margin: 0 5px;

  color: ${light.colors.mainColor};
`;

const PlyInfo = styled.div`
  width: 100%;
`;

// 플레이리스트 하단 정보
const TopInfo = styled.div`
  font-family: "EF_Diary";
  width: 100%;
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
`;

const BottomInfo = styled.div`
  font-size: small;
  font-family: "EF_Diary";
  color: #858585;
  & > #line {
    margin: 0 10px;
  }
  & > #video-cnt {
    color: ${light.colors.reservColor};
  }
`;
