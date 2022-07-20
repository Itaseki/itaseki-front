import React, { useState } from "react";
import {
  AutoFrame,
  MakeNewPlyBtn,
  NewPlyInput,
  OneSelectItemWrapper,
  OneVideoWrapper,
  SwitchBtnLabel,
  ToggleScrollWrapper,
  VideoContainer,
  VideoInfo,
  XButton,
} from "../../Style/Video";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import StyledBtn from "../../Style/StyledBtn";
import preURL from "../../preURL/preURL";
import axios from "axios";
import PlayListIcon from "../../Assets/Playlist_mini.png";
import { Link } from "react-router-dom";
import useInput from "../../Hooks/useInput";
import PlaylistToggle from "../PlaylistToggle";

// 각 비디오
const OneVideo = (video) => {
  const [playListToggleDisplay, setPlayListToggleDisplay] = useState(false); // 플레이리스트 모달창 보이기
  const [playListList, setPlayListList] = useState([]); // 받아온 내 플레이리스트 목록
  const [clickedPlyId, setClickedPlyId] = useState(-1); // 클릭한 플레이리스트 아이콘 id
  /* 등록 처리 필요 */
  const [playList, setPlayList] = useState([]);
  const [selectedPlayListId, setSelectedPlayListId] = useState([]);

  const videoId = video.id;

  // 플레이리스트에 추가하기 아이콘 클릭
  const onClickAddToPlaylist = (e) => {
    console.log("플레이리스트에 추가", e);
    const clicked = parseInt(e.target.id);
    setClickedPlyId(clicked);
    setPlaylistToggleDisplay((prev) => !prev);
  };

  let videolistURL = `/videolist/${videoId}`;
  return (
    <OneVideoWrapper>
      <Link to={videolistURL}>
        <VideoContainer>
          <img
            src={video.thumbnailUrl}
            alt="썸네일"
            style={{ width: "240px", height: "135px" }}
          />
        </VideoContainer>
      </Link>
      <div>
        <VideoInfo>
          <Link to={videolistURL}>
            <span id="title">{video.title}</span>
          </Link>
          <div id="info-right">
            <StyledBtn>
              <FontAwesomeIcon
                icon={faHeart}
                style={{
                  fontSize: "80%",
                  color: "#D9767C",
                  marginLeft: "auto",
                }}
              />
            </StyledBtn>
            <span style={{ color: "#D9767C" }}>{video.likeCount}</span>
            <img
              src={PlayListIcon}
              alt="플레이리스트에 추가"
              id={videoId}
              onClick={onClickAddToPlaylist}
              style={{ marginLeft: "4px", cursor: "pointer" }}
            />
            {clickedPlyId ===
              videoId /*클릭한 아이콘과 id가 동일한 모달창에만 적용되도록*/ && (
              <PlaylistToggle
                show={playListToggleDisplay}
                setShow={setPlayListToggleDisplay}
                playListList={playListList}
                playList={playList}
                setPlayList={setPlayList}
                selectedPlayListId={selectedPlayListId}
                setSelectedPlayListId={setSelectedPlayListId}
              />
            )}
          </div>
        </VideoInfo>
        <span style={{ fontSize: "small", color: "var(--main-color)" }}>
          {video.writerNickname}
        </span>
      </div>
    </OneVideoWrapper>
  );
};

export default OneVideo;
