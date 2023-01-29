import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
// Components
import AddVideoToPlaylistModal from "../Playlist/AddVideoToPlaylistModal";
import Token from "../Token";
// Style
import styled from "styled-components";
import StyledBtn from "../../Style/StyledBtn";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {light} from "../../Style/Color";
// Assets
import PlayListIcon from "../../Assets/Playlist_mini.png";
import {StyledDivRow} from "../../Style/StyledDiv";

const OneVideo = ({video, best}) => {
  const videoId = video.id;
  const navigate = useNavigate();
  const token = Token();

  const [playListToggleDisplay, setPlayListToggleDisplay] = useState(false);  // 플레이리스트 모달창 보이기
  const [clickedPlyId, setClickedPlyId] = useState(-1); // 클릭한 플레이리스트 아이콘 id

  // 플레이리스트에 추가하기 아이콘 클릭
  const onClickAddToPlaylist = (e) => {
    if(!token) {
      alert('로그인 후 이용해 주세요.');
      return;
    }
    console.log("플레이리스트에 추가", e);
    const clicked = parseInt(e.target.id);
    setClickedPlyId(clicked);
    setPlayListToggleDisplay(prev => !prev);
  };

  return (
      <OneVideoWrapper>
        <VideoContainer onClick={()=>navigate(`/video/${videoId}`)}>
          <img src={video.thumbnailUrl} alt="썸네일" />
        </VideoContainer>
        <StyledDivRow>
          {best &&
            <Rank>{best}</Rank>
          }
          <VideoInfo>
            <TopInfo>
            <span id="title" onClick={()=>navigate(`/video/${videoId}`)}>
              {video.title}
            </span>
              <div id="info-right">
                <StyledBtn>
                  <FontAwesomeIcon
                      icon={faHeart}
                      style={{ fontSize: "80%", color: light.colors.mainColor, marginLeft: "auto" }}
                  />
                </StyledBtn>
                <span style={{color: light.colors.mainColor}}>
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
            </TopInfo>
            <WriterInfo>
              {video.writerNickname}
            </WriterInfo>
          </VideoInfo>
        </StyledDivRow>
      </OneVideoWrapper>
  )
};

export default OneVideo;


const OneVideoWrapper = styled.div`
  margin: 0.5%; // TODO or auto
  //margin: auto;
`

// 영상 썸네일
const VideoContainer = styled.div`
  background-color: gray;
  width: 288px;
  height: 162px;
  border-radius: 10px;
  cursor: pointer;
  & > img {
    width: 288px;
    height: 162px;
    border-radius: 10px;
    object-fit: cover;
  }
`

const Rank = styled.p`
  font-family: 'Walter Turncoat';
  font-weight: 400;
  font-size: 31px;
  line-height: 43px;
  letter-spacing: 0.05em;
  
  margin: 0 5px;

  color: ${light.colors.mainColor};
`

const VideoInfo = styled.div`
  width: 100%;
`

// 영상 썸네일 하단 정보
const TopInfo = styled.div`
  font-family: 'EF_Diary';
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
`

const WriterInfo = styled.span`
  font-size: small;
  font-family: 'EF_Diary';
  color: #858585;
`