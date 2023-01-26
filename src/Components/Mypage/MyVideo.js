import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
// Components
// Style
import styled from "styled-components";
import StyledBtn from "../../Style/StyledBtn";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {light} from "../../Style/Color";
// Assets

const MyVideo = ({video}) => {
  const videoId = video.id;
  const navigate = useNavigate();


  return (
      <OneVideoWrapper>
        <VideoContainer onClick={()=>navigate(`/videolist/${videoId}`)}>
          <img src={video.thumbnailUrl} alt="썸네일" />
        </VideoContainer>
        <div>
          <VideoInfo>
            <span id="title" onClick={()=>navigate(`/videolist/${videoId}`)}>
              {video.title}
            </span>
            <div id="info-right">
              <StyledBtn>
                <FontAwesomeIcon
                    icon={faHeart}
                    style={{
                      fontSize: "80%",
                      color: light.colors.mainColor,
                      marginLeft: "auto" }}
                />
              </StyledBtn>
              <span>
                {video.likeCount}
              </span>
            </div>
          </VideoInfo>
        </div>
      </OneVideoWrapper>
  )
};

export default MyVideo;


const OneVideoWrapper = styled.div`
  padding: 0 5px 10px;
`

// 영상 썸네일
const VideoContainer = styled.div`
  width: 240px;
  height: 135px;
  cursor: pointer;
  & > img{
    width: 240px;
    height: 135px;
    border-radius: 10px;
    object-fit: cover;
  }
`

// 영상 썸네일 하단 정보
const VideoInfo = styled.div`
  width: 240px;
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
`