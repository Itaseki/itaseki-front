import React, {useCallback, useEffect, useState} from 'react';
import {
  AButton,
  AdditionalBtns, Comment, CommentsListWrapper,
  CommentsWrapper,
  ContentWrapper,
  DetailInfo,
  DetailTitle, Line, NewCommentBox, NewCommentWrapper, ReplyBtn,
  TitleWrapper,
  Wrapper
} from "../../Style/Community";
import Header from "../../Components/Header";
import StyledBtn from "../../Style/StyledBtn";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from "axios";
import preURL from "../../preURL/preURL";
import {useParams} from "react-router-dom";
import useInput from "../../Hooks/useInput";
import SingleComment from "../../Components/Comment/SingleComment";
import CommentList from "../../Components/Comment/CommentList";

const CommunityDetail = () => {

  const [contentInfo, setContentInfo] = useState({
      id: 1, title: "제목이당", content: "내용이당", imageUrls: ["/1", "/2"], createdTime: "2:48", viewCount: 15, likeCount: 30,
    writerId: 10, writerNickname: "배고파",
    isThisUserWriter: true,
    commentCount: 3, comments: [
      /*{id: 12345, content: "댓글이당", createdTime: "4:16", writerId: 10, writerNickName: "배고파22", isThisUserWriter: true, isThisBoardWriterCommentWriter: false,
        nestedComments: [
          {id: 23456, content: "대댓글이얌", createdTime: "4:20", writerId: 11, writerNickName: "배고파23", isThisUserWriter: false, isThisBoardWriterCommentWriter: true}
        ]},
      {id: 23456, content: "댓글2당", createdTime: "4:20", writerId: 11, writerNickName: "배고파23", isThisUserWriter: false, isThisBoardWriterCommentWriter: true,
        nestedComments: null},
      {id: 98765, content: "댓글3임", createdTime: "4:20", writerId: 11, writerNickName: "배고파23", isThisUserWriter: false, isThisBoardWriterCommentWriter: true,
        nestedComments: null},*/
    ]
  });
  const [likeCount, setLikeCount] = useState();
  const commentsList = contentInfo.comments;
  const communityBoardId = useParams().id;
  // console.log("communityBoardId: ", communityBoardId);  // communityBoardId 받아오기

  // 상세 게시글 조회
  useEffect(() => {
    axios.get(preURL.preURL + `/boards/community/${communityBoardId}`)
        .then((res) => {
          console.log("👍상세 게시글 조회 성공", res);
          setContentInfo(res.data);
          setLikeCount(res.data["likeCount"]);
        })
        .catch((err) => {
          console.log("🧨상세 게시글 조회 실패", err);
        })
  },[]);

  // 좋아요 버튼 클릭
  const onClickLike = useCallback(() => {
    axios.post(preURL.preURL + `/boards/community/${communityBoardId}/likes`)
        .then((res) => {
          console.log("👍게시글 좋아요 성공");
          setLikeCount(res.data);
        })
        .catch((err) => {
          console.log("🧨게시글 좋아요 에러", err);
        })
  }, []);

  const onClickShare = useCallback(() => {
    console.log("공유 버튼 클릭");
  }, []);

  // 게시글 신고
  const onClickReport = useCallback(() => {
    axios
        .post(preURL.preURL + `/boards/community/${communityBoardId}/reports`)
        .then((res) => {
          console.log("👍게시글 신고 성공");
        })
        .catch((err) => {
          console.log("🧨게시글 신고 에러", err);
        })
  }, []);

  // 게시글 삭제
  const onClickDelete = useCallback(() => {
    axios
        .delete(preURL.preURL + `/boards/community/${communityBoardId}`)
        .then((res) => {
          console.log("👍게시글 삭제 성공");
          alert("게시글을 삭제하였습니다.");
          return window.location.href = "/community"
        })
        .catch((err) => {
          console.log("🧨게시글 삭제 에러", err);
        })
  }, []);

  // 게시글 이미지
  const imgs = contentInfo.imageUrls.map((imgUrl) => {
    return (
        <img src={imgUrl} alt="사진"/>
    )
  });


  return (
      <div>
        <Header />
        <Wrapper>
          <TitleWrapper>
            <DetailTitle>
              {contentInfo.title}
              {contentInfo.isThisUserWriter
                  ? <StyledBtn id="del" onClick={onClickDelete}>삭제</StyledBtn>
                  : null}
            </DetailTitle>
            <DetailInfo>
              <p>{contentInfo.writerNickname}</p>
              <p>|</p>
              <p>{contentInfo.createdTime}</p>
              <p>|</p>
              <p>{contentInfo.viewCount}</p>
              <p>|</p>
              <FontAwesomeIcon
                  icon={faHeart}
                  style={{color: "#D9767C"}}
              />
              <p style={{color: "#D9767C"}}>{likeCount}</p>
            </DetailInfo>
          </TitleWrapper>
          <ContentWrapper>
            <div>{imgs}</div>
            <div>{contentInfo.content}</div>
          </ContentWrapper>
          <AdditionalBtns>
            <AButton style={{background: "#9E8FA8"}} onClick={onClickLike}>좋아요</AButton>
            <AButton style={{background: "#C4C4C4"}} onClick={onClickReport}>신고하기</AButton>
          </AdditionalBtns>
          <CommentList contentInfo={contentInfo} commentList={commentsList} board={"community"} boardId={communityBoardId} />
        </Wrapper>
      </div>
  )
}

export default CommunityDetail;