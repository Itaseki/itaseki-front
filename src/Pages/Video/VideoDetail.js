import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import preURL from "../../preURL/preURL";
// Style
import {
  AButton,
  AdditionalBtns,
  DetailInfo,
  DetailTitle,
  TitleWrapper,
  Wrapper
} from "../../Style/Community";
import StyledBtn from "../../Style/StyledBtn";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {AInfo, IFrame, Infos, TitleUploader, VideoDetailInfo, VideoWrapper} from "../../Style/Video";
import {light} from "../../Style/Color";
// Components
import Header from "../../Components/Header";
import CommentList from "../../Components/Comment/CommentList";
import YoutubeIframe from "../../Components/Video/YoutubeIframe";

const VideoDetail = () => {
  const videoId = useParams().id;
  const navigate = useNavigate();
  const [video, setVideo] = useState({
    id: 0,
    description: "",
    videoTitle: "",
    url: "",
    videoUploader: "",
    series: "",
    episode: 0,
    hashtags: [],
    createdTime: "",
    viewCount: 0,
    likeCount: 0,
    writerId: 0,
    writerNickname: "",
    isThisUserWriter: false,
    comments: [],
  });
  const comments = video.comments;
  const [likeCount, setLikeCount] = useState(0);

  // 상세 영상글 조회
  useEffect(() => {
    axios
        .get(preURL.preURL + `/boards/video/${videoId}`)
        .then((res) => {
          console.log("👍상세 영상글 조회 성공", res.data);
          setVideo(res.data);
          setLikeCount(res.data['likeCount']);
        })
        .catch((err) => {
          console.log("🧨상세 영상글 조회 실패", err);
        })
  },[]);

  // 좋아요 버튼 클릭
  const onClickLike = () => {
    axios
        .post(preURL.preURL + `/boards/video/${videoId}/likes`)
        .then((res) => {
          console.log("👍영상글 좋아요 성공");
          setLikeCount(res.data);
        })
        .catch((err) => {
          console.log("🧨영상글 좋아요 실패", err);
        })
  };

  // 영상글 신고
  const onClickReport = () => {
    axios
        .post(preURL.preURL + `/boards/video/${videoId}/reports`)
        .then((res) => {
          const result = res.data
          console.log("👍영상글 신고 성공", result);
          if(result === "영상 신고 성공"){
            alert("영상을 신고하였습니다.");
          }
          else if(result === "해당 사용자가 이미 신고한 영상"){
            alert("이미 이 영상을 신고하였습니다.");
          }
          else if(result === "신고 5번 누적으로 삭제"){
            alert("해당 영상은 신고 누적으로 삭제되었습니다.");
            navigate("/videolist");
          }
        })
        .catch((err) => {
          console.log("🧨영상글 신고 실패", err);
        })
  };

  // 게시글 삭제
  const onClickDelete = () => {
    let del = window.confirm("영상을 삭제하시겠습니까?");
    if(del){
      axios
          .delete(preURL.preURL + `/boards/video/${videoId}`)
          .then(() => {
            console.log("👍영상글 삭제 성공");
            alert("영상을 삭제하였습니다.");
            navigate("/videolist");
          })
          .catch((err) => {
            console.log("🧨영상글 삭제 실패", err);
            alert("영상 삭제를 실패하였습니다.");
          })
    }
  };

  return (
      <div>
        <Header />
        <Wrapper>
          <TitleWrapper>
            <DetailTitle>
              {video.description}
              {video.isThisUserWriter
                  ? <StyledBtn id="del" onClick={onClickDelete}>삭제</StyledBtn>
                  : null}
            </DetailTitle>
            <DetailInfo>
              <p style={{color: light.colors.mainColor}}>{video.writerNickname}</p>
              <p>|</p>
              <p>{video.createdTime}</p>
              <p>|</p>
              <p>조회 {video.viewCount}</p>
              <p>|</p>
              <FontAwesomeIcon
                  icon={faHeart}
                  style={{color: "#D9767C"}}
              />
              <p style={{color: "#D9767C"}}>{likeCount}</p>
            </DetailInfo>
          </TitleWrapper>
          <VideoWrapper>
            <TitleUploader>
              <div id="title" title={video.videoTitle}>
                {(video.videoTitle.length < 15) ? video.videoTitle : video.videoTitle.substring(0, 15)+" .."}
              </div>
              <div id="uploader">{video.videoUploader}</div>
            </TitleUploader>
            <IFrame>
              <YoutubeIframe url={video.url} width="720" height="405"/>
            </IFrame>
            <a href={video.url} target="_blank" style={{color: "gray"}}>{video.url}</a>
          </VideoWrapper>
          <VideoDetailInfo>
            <p id="head">영상 정보</p>
            <div style={{display: "flex", flexDirection: "row"}}>
              <div id="line1"/>
              <Infos>
                <AInfo>
                  <div id="key">시리즈</div>
                  <div id="value">{video.series}</div>
                </AInfo>
                <div id="line2"/>
                <AInfo>
                  <div id="key">회차</div>
                  <div id="value">{video.episode}{video.episode? "회" : ""}</div>
                </AInfo>
                <div id="line2"/>
                <AInfo>
                  <div id="key">해시태그</div>
                  {video.hashtags.map((tag) => {
                    return (
                        <div id="tag">{tag}</div>
                    )
                  })}
                </AInfo>
              </Infos>
            </div>
          </VideoDetailInfo>
          <AdditionalBtns>
            <AButton onClick={() => navigate("/reservation")}>달리기 예약</AButton>
            <AButton style={{borderWidth: "4px"}} onClick={onClickLike}>좋아요</AButton>
            <AButton onClick={onClickReport}>신고하기</AButton>
          </AdditionalBtns>
          <CommentList commentCount={video.commentCount} commentList={comments} board={"video"} boardId={videoId} />
        </Wrapper>
      </div>
  )
};

export default VideoDetail;