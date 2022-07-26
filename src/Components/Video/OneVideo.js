import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
// Components
import AddVideoToPlaylistModal from "../Playlist/AddVideoToPlaylistModal";
// Style
import styled from "styled-components";
import StyledBtn from "../../Style/StyledBtn";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
// Assets
import PlayListIcon from "../../Assets/Playlist_mini.png";


const OneVideo = ({video}) => {

  const videoId = video.id;
  const navigate = useNavigate();

  const [playListToggleDisplay, setPlayListToggleDisplay] = useState(false);  // 플레이리스트 모달창 보이기
  const [clickedPlyId, setClickedPlyId] = useState(-1); // 클릭한 플레이리스트 아이콘 id

// 플레이리스트에 추가하기 아이콘 클릭
  const onClickAddToPlaylist = (e) => {
    console.log("플레이리스트에 추가", e);
    const clicked = parseInt(e.target.id);
    setClickedPlyId(clicked);
    setPlayListToggleDisplay(prev => !prev);
  };

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
                    style={{ fontSize: "80%", color: "#D9767C", marginLeft: "auto" }}
                />
              </StyledBtn>
              <span style={{color: "#D9767C"}}>
                {video.likeCount}
              </span>
              <img
                  src={PlayListIcon}
                  alt="플레이리스트에 추가"
                  id={videoId}
                  onClick={onClickAddToPlaylist}
                  style={{marginLeft: "4px", cursor: "pointer"}}/>
              {clickedPlyId === videoId &&   /*클릭한 아이콘과 id가 동일한 모달창에만 적용되도록*/
                  <AddVideoToPlaylistModal
                      videoId={videoId}
                      show={playListToggleDisplay}
                      setShow={setPlayListToggleDisplay}
                  />
              }
            </div>
          </VideoInfo>
          <span style={{fontSize: "small", color: "var(--main-color)"}}>
            {video.writerNickname}
          </span>
        </div>
      </OneVideoWrapper>
  )
};

export default OneVideo;


const OneVideoWrapper = styled.div`
  width: 25%;
`

// 영상 썸네일
const VideoContainer = styled.div`
  width: 240px;
  height: 135px;
  background: gray;
  cursor: pointer;
  & > img{
    width: 240px;
    height: 135px;
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
  }
  & > #info-right {
    display: flex;
    align-items: center;
  }
`