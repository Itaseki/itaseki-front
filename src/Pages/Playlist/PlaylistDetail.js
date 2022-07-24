import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import preURL from "../../preURL/preURL";
// Components
import Token from "../../Components/Token";
import Header from "../../Components/Header";
import CommentList from "../../Components/Comment/CommentList";
// Style
import {AButton, AdditionalBtns, DetailInfo, DetailTitle, TitleWrapper, Wrapper} from "../../Style/Community";
import StyledBtn from "../../Style/StyledBtn";
import {light} from "../../Style/Color";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {
  OneVideoInPly,
  PlaylistWrapper,
  PlyVideoInfo, TopBtns,
  VideoContainer,
  VideoNum,
  VideosWrapper
} from "../../Style/Playlist";
// Assets
import Dot3_btn from "../../Assets/Dot3_btn.png";
import Stored_Ply from "../../Assets/Stored_Ply.png";
import Add_New_Ply from "../../Assets/Add_New_Ply.png";



const PlaylistDetail = () => {
  const token = Token();
  const navigate = useNavigate();

  const plyId = useParams().id;

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


  // 상세 플레이리스트 조회
  useEffect(() => {
    axios
        .get(preURL.preURL + `/boards/playlist/${plyId}`, {
          headers: {
            'itasekki': token
          }
        })
        .then((res) => {
          console.log("👍상세 플레이리스트 조회 성공", res.data);
          setPlaylist(res.data);
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
              'itasekki': token
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

  // 플리 좋아요
  const onClickLike = () => {
    axios
        .post(preURL.preURL + `/boards/playlist/${plyId}/likes`,[], {
          headers: {
            'itasekki': token
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
    axios
        .post(preURL.preURL + `/boards/playlist/${plyId}/reports`,[],{
          headers: {
            'itasekki': token
          }
        })
        .then((res) => {
          console.log("👍플리 신고 성공", res.data);
          const result = res.data;
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

  return (
      <div>
        <Header />
        <TopBtns>
          <Link to="/playlist/subscribe">
            <img src={Stored_Ply} alt="구독 플레이리스트 보기" />
          </Link>
          <img src={Add_New_Ply} alt="새 플레이리스트 만들기" />
        </TopBtns>
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
                  style={{color: "#D9767C"}}
              />
              <p style={{color: "#D9767C"}}>{likeCount}</p>
            </DetailInfo>
          </TitleWrapper>
          <PlaylistWrapper>
            <div id="line" />
            <VideosWrapper>
              {(playlist.videos).map((video) => {
                return (
                    <OneVideoInPly onClick={()=>navigate(`/videolist/${video.id}`)}>
                      <VideoNum>{++cnt}</VideoNum>
                      <VideoContainer>
                        <img src={video.thumbnailUrl} alt="썸네일"/>
                      </VideoContainer>
                      <PlyVideoInfo>
                        <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                          <span id="title">{video.title}</span>
                          <img src={Dot3_btn} alt="플레이리스트에 담기 버튼" />
                        </div>
                        <span>{video.videoUploader}</span>
                        <span>{video.runtime}</span>
                      </PlyVideoInfo>
                    </OneVideoInPly>
                )
              })}
            </VideosWrapper>
          </PlaylistWrapper>
          <AdditionalBtns>
            <AButton>저장하기</AButton>
            <AButton style={{borderWidth: "4px"}} onClick={onClickLike}>좋아요</AButton>
            <AButton onClick={onClickReport}>신고하기</AButton>
          </AdditionalBtns>
          <CommentList commentCount={playlist.commentCount} commentList={playlist.comments} board={"video"} boardId={plyId} />
        </Wrapper>
      </div>
  )

}

export default PlaylistDetail;