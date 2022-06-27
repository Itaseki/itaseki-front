import React, {useCallback, useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import Header from "../../Components/Header";
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
import CommentList from "../../Components/Comment/CommentList";
import preURL from "../../preURL/preURL";
import {AInfo, IFrame, Infos, TitleUploader, VideoInfo, VideoWrapper} from "../../Style/Video";
import {hover} from "@testing-library/user-event/dist/hover";

const VideoDetail = () => {
  const videoId = useParams().id;
  const [video, setVideo] = useState({
    id: 0,
    description: "라스 꿀잼편",
    videoTitle: "라스 234회",
    url: "http://라스",
    videoUploader: "mbc예능",
    series: "라디오스타",
    episode: 234,
    hashtags: ["토크", "유잼"],
    createdTime: "3:50",
    viewCount: 15,
    likeCount: 3,
    writerId: 9876,
    writerNickname: "me",
    isThisUserWriter: false,
    comments: [],
  });
  const comments = video.comments;

  // 상세 영상글 조회
  useEffect(() => {
    axios
        .get(preURL.preURL + `/boards/video/${videoId}`)
        .then((res) => {
          console.log("👍상세 영상글 조회 성공", res.data);
          setVideo(res.data);
        })
        .catch((err) => {
          console.log("🧨상세 영상글 조회 실패", err);
        })
  },[]);

  // 좋아요 버튼 클릭
  const onClickLike = useCallback(() => {

  }, []);

  // 게시글 신고
  const onClickReport = useCallback(() => {

  }, []);

  // 게시글 삭제
  const onClickDelete = useCallback(() => {

  }, []);

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
              <p>{video.writerNickname}</p>
              <p>|</p>
              <p>{video.createdTime}</p>
              <p>|</p>
              <p>{"조회 "}{video.viewCount}</p>
              <p>|</p>
              <FontAwesomeIcon
                  icon={faHeart}
                  style={{color: "#D9767C"}}
              />
              <p style={{color: "#D9767C"}}>{video.likeCount}</p>
            </DetailInfo>
          </TitleWrapper>
          <VideoWrapper>
            <TitleUploader>
              <div id="title">{video.videoTitle}</div>
              <div id="uploader">{video.videoUploader}</div>
            </TitleUploader>
            <IFrame>{"영상 iframe"}</IFrame>
            <a href={video.url} target="_blank" style={{color: "gray"}}>{video.url}</a>
          </VideoWrapper>
          <VideoInfo>
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
          </VideoInfo>
          <AdditionalBtns>
            <AButton style={{background: "var(--sub-color)"}}>달리기 예약</AButton>
            <AButton style={{background: "var(--main-color)"}} onClick={onClickLike}>좋아요</AButton>
            <AButton style={{background: "var(--sub-color)"}} onClick={onClickReport}>신고하기</AButton>
          </AdditionalBtns>
          {"댓글"}
        </Wrapper>
      </div>
  )
};

export default VideoDetail;