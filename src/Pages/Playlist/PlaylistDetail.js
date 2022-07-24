import React, {useState} from "react";
import {useParams} from "react-router-dom";
import Header from "../../Components/Header";
import {AButton, AdditionalBtns, DetailInfo, DetailTitle, TitleWrapper, Wrapper} from "../../Style/Community";
import StyledBtn from "../../Style/StyledBtn";
import {light} from "../../Style/Color";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {AInfo, IFrame, Infos, TitleUploader, VideoDetailInfo, VideoWrapper} from "../../Style/Video";
import YoutubeIframe from "../../Components/Video/YoutubeIframe";
import CommentList from "../../Components/Comment/CommentList";
import {
  OneVideoInPly,
  PlaylistWrapper,
  PlyVideoInfo,
  VideoContainer,
  VideoNum,
  VideosWrapper
} from "../../Style/Playlist";
import Dot3_btn from "../../Assets/Dot3_btn.png";

const PlaylistDetail = () => {
  const plyId = useParams().id;

  const [likeCount, setLikeCount] = useState(0);
  const [playlist, setPlaylist] = useState({
    id: 0,
    title: "플리 제목",
    createdTime: "3:50",  // localdatetime
    viewCount: 0,
    likeCount: likeCount,
    writerId: 0,
    writerNickname: "작성자 닉네임",
    isThisUserWriter: false,
    commentCount: 0,
    videos: [
      {id: 1, title: "영상1", videoUploader: "영상 업로더", thumbnailUrl: "url", runtime: "재생 시간"},
      {id: 2, title: "영상2", videoUploader: "영상 업로더", thumbnailUrl: "url", runtime: "재생 시간"},
      {id: 3, title: "영상3", videoUploader: "영상 업로더", thumbnailUrl: "url", runtime: "재생 시간"},

    ],
    comments: [],
  })

  // 플리 삭제
  const onClickDelete = () => {

  }

  // 플리 좋아요
  const onClickLike = () => {

  }

  // 플리 신고
  const onClickReport = () => {

  }

  // 영상 번호 카운트
  let cnt = 0;

  return (
      <div>
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
                    <OneVideoInPly>
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