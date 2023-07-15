import React from "react";
import { useNavigate } from "react-router-dom";
// Components
// Style
import styled from "styled-components";
import StyledBtn from "../../Style/StyledBtn";
import { light } from "../../Style/Color";
// Assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const MyVideo = ({ video }) => {
  const videoId = video.id;
  const navigate = useNavigate();

  return (
    <OneVideoWrapper>
      <VideoContainer onClick={() => navigate(`/video/${videoId}`)}>
        <img src={video.thumbnailUrl} alt="썸네일" />
      </VideoContainer>
      <div>
        <VideoInfo>
          <span id="title" onClick={() => navigate(`/video/${videoId}`)}>
            {video.title}
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
            <span>{video.likeCount}</span>
          </div>
        </VideoInfo>
      </div>
    </OneVideoWrapper>
  );
};

export default MyVideo;

const OneVideoWrapper = styled.div`
  padding: 0 5px 10px;
`;

// 영상 썸네일
const VideoContainer = styled.div`
  width: 288px;
  height: 162px;
  cursor: pointer;
  & > img {
    width: 288px;
    height: 162px;
    border-radius: 10px;
    object-fit: cover;
  }
`;

// 영상 썸네일 하단 정보
const VideoInfo = styled.div`
  width: 100%;
  margin: 3px 0;
  display: flex;
  justify-content: space-between;
  & > #title {
    cursor: pointer;
    font-size: 14px;
    line-height: 16px;
  }
  & > #info-right {
    display: flex;
    align-items: center;
    font-size: 12px;
    line-height: 15px;
    color: ${light.colors.mainColor};
  }
`;
