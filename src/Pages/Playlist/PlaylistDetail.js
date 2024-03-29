import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import preURL from "../../preURL/preURL";
// Components
import Token from "../../Components/Token";
import Header from "../../Components/Header";
import CommentList from "../../Components/Comment/CommentList";
import AddVideoToPlaylistModal from "../../Components/Playlist/AddVideoToPlaylistModal";
import SavePlyModal from "../../Components/Playlist/SavePlyModal";
import {timeStamp} from "../../Components/TimeStamp";
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
import {StyledDivRow} from "../../Style/StyledDiv";

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


  // 상세 플레이리스트 조회
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
    const report = window.confirm('이 플레이리스트를 신고하시겠습니까?');
    if(!report) return;
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
  const [playListToggleDisplay, setPlayListToggleDisplay] = useState(false);
  const [clickedVideoId, setClickedVideoId] = useState(-1);
  const Videos = (playlist.videos).map((video, id) => {
    // 플레이리스트에 영상 담기
    const onClickAddtoPly = () => {
      // console.log("플레이리스트에 영상 담기 버튼 클릭");
      if(!token) {
        alert('로그인 후 이용해 주세요.');
        return;
      }
      setClickedVideoId(id);
      setPlayListToggleDisplay(prev => !prev);
    };

    return (
        <OneVideoInPly>
          <VideoNum>{++cnt}</VideoNum>
          <VideoContainer onClick={()=>navigate(`/video/${video.id}`)}>
            <img src={video.thumbnailUrl} alt="썸네일"/>
          </VideoContainer>
          <PlyVideoInfo>
            <StyledDivRow>
              <span id="title" onClick={()=>navigate(`/video/${video.id}`)}>
                {video.title}
              </span>
              <img
                  src={Dot3_btn}
                  alt="플레이리스트에 담기 버튼"
                  onClick={onClickAddtoPly}
              />
              {clickedVideoId === id &&
                  <AddVideoToPlaylistModal
                      videoId={video.id}
                      show={playListToggleDisplay}
                      setShow={setPlayListToggleDisplay}
                  />
              }
            </StyledDivRow>
            <span>{video.videoUploader}</span>
            <span>{video.runtime}</span>
          </PlyVideoInfo>
        </OneVideoInPly>
    )
  })


  return (
      <>
        <Header />
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
              <p>{timeStamp(playlist.createdTime)}</p>
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
          <AdditionalBtns>
            <SavePlyModal plyId={plyId} show={savePlyModalDisplay} setShow={setSavePlyModalDisplay} />
            <AButton onClick={onClickSave}>저장하기</AButton>
            <AButton onClick={onClickLike}>좋아요</AButton>
            <AButton onClick={onClickReport}>신고하기</AButton>
          </AdditionalBtns>
          <CommentList commentCount={playlist.commentCount} commentList={playlist.comments} board="playlist" boardId={plyId} />
        </Wrapper>
      </>
  )

}

export default PlaylistDetail;