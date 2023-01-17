import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import preURL from "../../preURL/preURL";
// Components
import Token from "../../Components/Token";
import Header from "../../Components/Header";
import CommentList from "../../Components/Comment/CommentList";
import {PlaylistHeader} from "./AllPlaylist";
import AddVideoToPlaylistModal from "../../Components/Playlist/AddVideoToPlaylistModal";
import SavePlyModal from "../../Components/Playlist/SavePlyModal";
// Style
import {AButton, AdditionalBtns, DetailInfo, DetailTitle, TitleWrapper, Wrapper} from "../../Style/Community";
import StyledBtn from "../../Style/StyledBtn";
import {light} from "../../Style/Color";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {
  OneVideoInPly,
  PlaylistWrapper,
  PlyVideoInfo,
  VideoContainer,
  VideoNum,
  VideosWrapper
} from "../../Style/Playlist";
// Assets
import Dot3_btn from "../../Assets/Dot3_btn.png";

const PlaylistDetail = () => {
  const plyId = useParams().id;
  const navigate = useNavigate();
  const token = Token();

  const [likeCount, setLikeCount] = useState(0);
  const [playlist, setPlaylist] = useState({
    id: 0,
    title: "",
    createdTime: "",  // localdatetime
    viewCount: 0,
    likeCount: likeCount,
    writerId: 0,
    writerNickname: "",
    isThisUserWriter: false,
    commentCount: 0,
    videos: [
      {id: 0, title: "", videoUploader: "", thumbnailUrl: "", runtime: ""},
      {id: 0, title: "", videoUploader: "", thumbnailUrl: "", runtime: ""},
      {id: 0, title: "", videoUploader: "", thumbnailUrl: "", runtime: ""},

    ],
    comments: [],
  })
  const [savePlyModalDisplay, setSavePlyModalDisplay] = useState(false);


  // 상세 플레이리스트 조회 TODO 토큰
  useEffect(() => {
    axios
        .get(preURL.preURL + `/boards/playlist/${plyId}`, {
          headers: {
            'ITTASEKKI': token
          }
        })
        .then((res) => {
          console.log("👍상세 플레이리스트 조회 성공", res.data);
          setPlaylist(res.data);
          setLikeCount(res.data.likeCount);
        })
        .catch((err) => {
          console.log("🧨상세 플레이리스트 조회 실패", err);
        })
  },[]);


  // 플리 삭제
  const onClickDelete = () => {
    let del = window.confirm("플레이리스트를 삭제하시겠습니까?");
    if(del){
      axios
          .delete(preURL.preURL + `/boards/playlist/${plyId}`,{
            headers: {
              'ITTASEKKI': token
            }
          })
          .then(() => {
            console.log("👍플레이리스트 삭제 성공");
            alert("플레이리스트를 삭제하였습니다.");
            navigate("/playlist");
          })
          .catch((err) => {
            console.log("🧨플레이리스트 삭제 실패", err);
          })
    }
  }

  // 플리 저장하기
  const onClickSave = () => {
    // console.log("플레이리스트 저장하기 모달창");
    if(!token) {
      alert('로그인 후 이용해 주세요.');
      return;
    }
    setSavePlyModalDisplay(prev => !prev);
  }

  // 플리 좋아요
  const onClickLike = () => {
    if(!token) {
      alert('로그인 후 이용해 주세요.');
      return;
    }
    axios
        .post(preURL.preURL + `/boards/playlist/${plyId}/likes`,[], {
          headers: {
            'ITTASEKKI': token
          }
        })
        .then((res) => {
          console.log("👍플리 좋아요 성공");
          setLikeCount(res.data);
        })
        .catch((err) => {
          console.log("🧨플리 좋아요 실패", err);
        })
  }

  // 플리 신고
  const onClickReport = () => {
    if(!token) {
      alert('로그인 후 이용해 주세요.');
      return;
    }
    axios
        .post(preURL.preURL + `/boards/playlist/${plyId}/reports`,[],{
          headers: {
            'ITTASEKKI': token
          }
        })
        .then((res) => {
          console.log("👍플리 신고 성공", res.data);
          const result = res.data;
          // 응답처리 수정 필요
          if(result === "플레이리스트 신고 성공") alert("플레이리스트를 신고하였습니다.");
          else if(result === "해당 사용자가 이미 신고한 플레이리스트") alert("이미 이 플레이리스트를 신고하였습니다.");
          else if(result === "신고 5번 누적으로 삭제"){
            alert("해당 영상은 신고 누적으로 삭제되었습니다.");
            navigate("/playlist");
          }
        })
        .catch((err) => {
          console.log("🧨플리 신고 실패", err);
        })
  }

  // 영상 번호 카운트
  let cnt = 0;

  // 영상 리스트
  const Videos = (playlist.videos).map((video) => {
    const [playListToggleDisplay, setPlayListToggleDisplay] = useState(false);

    // 플레이리스트에 영상 담기
    const onClickAddtoPly = () => {
      // console.log("플레이리스트에 영상 담기 버튼 클릭");
      if(!token) {
        alert('로그인 후 이용해 주세요.');
        return;
      }
      setPlayListToggleDisplay(prev => !prev);
    };

    return (
        <OneVideoInPly>
          <VideoNum>{++cnt}</VideoNum>
          <VideoContainer onClick={()=>navigate(`/videolist/${video.id}`)}>
            <img src={video.thumbnailUrl} alt="썸네일"/>
          </VideoContainer>
          <PlyVideoInfo>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                          <span id="title" onClick={()=>navigate(`/videolist/${video.id}`)}>
                            {video.title}
                          </span>
              <img
                  src={Dot3_btn}
                  alt="플레이리스트에 담기 버튼"
                  onClick={onClickAddtoPly}
              />
              {playListToggleDisplay &&
                  <AddVideoToPlaylistModal
                      videoId={video.id}
                      show={playListToggleDisplay}
                      setShow={setPlayListToggleDisplay}
                  />
              }
            </div>
            <span>{video.videoUploader}</span>
            <span>{video.runtime}</span>
          </PlyVideoInfo>
        </OneVideoInPly>
    )
  })


  return (
      <div>
        <Header />
        <PlaylistHeader />
        <Wrapper>
          <TitleWrapper>
            <DetailTitle>
              {playlist.title}
              {playlist.isThisUserWriter
                  ? <StyledBtn id="del" onClick={onClickDelete}>삭제</StyledBtn>
                  : null}
            </DetailTitle>
            <DetailInfo>
              <p style={{color: light.colors.mainColor}}>{playlist.writerNickname}</p>
              <p>|</p>
              <p>{playlist.createdTime}</p>
              <p>|</p>
              <p>조회 {playlist.viewCount}</p>
              <p>|</p>
              <FontAwesomeIcon
                  icon={faHeart}
                  style={{color: light.colors.mainColor}}
              />
              <p style={{color: light.colors.mainColor}}>{likeCount}</p>
            </DetailInfo>
          </TitleWrapper>
          <PlaylistWrapper>
            <div id="line" />
            <VideosWrapper>
              {Videos}
            </VideosWrapper>
          </PlaylistWrapper>
          <AdditionalBtns style={{alignItems: "flex-end"}}>
            <SavePlyModal plyId={plyId} show={savePlyModalDisplay} setShow={setSavePlyModalDisplay} />
            <AButton onClick={onClickSave}>저장하기</AButton>
            <AButton style={{borderWidth: "4px"}} onClick={onClickLike}>좋아요</AButton>
            <AButton onClick={onClickReport}>신고하기</AButton>
          </AdditionalBtns>
          <CommentList commentCount={playlist.commentCount} commentList={playlist.comments} board={"video"} boardId={plyId} />
        </Wrapper>
      </div>
  )

}

export default PlaylistDetail;