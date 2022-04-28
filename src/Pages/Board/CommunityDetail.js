import React, {useEffect, useState} from 'react';
import {
  AButton,
  AdditionalBtns,
  CommentsWrapper,
  ContentWrapper,
  DetailInfo,
  DetailTitle,
  TitleWrapper,
  Wrapper
} from "../../Style/Community";
import Header from "../../Components/Header";
import StyledBtn from "../../Style/StyledBtn";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from "axios";
import preURL from "../../preURL/preURL";

const CommunityDetail = ({communityBoardId}) => {

  const [contentInfo, setContentInfo] = useState({
      id: 1, title: "제목이당", content: "내용이당", imageUrls: ["/1", "/2"], createdTime: "2:48", viewCount: 15, likeCount: 30,
    writerId: 10, writerNickname: "배고파",
    isThisUserWriter: true, isThisBoardLikedByUser: false,
    commentCount: 3, comments: commentsList
  });
  const [writerInfo, setWriterInfo] = useState({writerId: contentInfo.writerId, writerNickname: contentInfo.writerNickname});
  const [userInfo, setUserInfo] = useState({isThisUserWriter: contentInfo.isThisUserWriter, isThisBoardLikedByUser: contentInfo.isThisBoardLikedByUser});
  const [commentsInfo, setCommentsInfo] = useState({commentCount: contentInfo.commentCount, comments: contentInfo.comments});
  const [commentsList, setCommentsList] = useState([
    {id: 1, content: "댓글이당", createdTime: "4:16", writerId: 10, writerNickName: "배고파22", isThisUserWriter: true, isThisBoardWriterCommentWriter: false,
      nestedComments: ["대댓글1?", "대댓글2?"]},
    {id: 2, content: "댓글2당", createdTime: "4:16", writerId: 11, writerNickName: "배고파23", isThisUserWriter: false, isThisBoardWriterCommentWriter: true,
      nestedComments: ["대댓글1?", "대댓글2?"]}
  ]);
  console.log("communityBoardId: ", communityBoardId);  // communityBoardId 받아오기

  useEffect(() => {
    axios.get(preURL.preURL + `/boards/community/${communityBoardId}`)
        .then((res) => {
          console.log("상세 게시물 조회");
          setContentInfo(res.data);
        })
        .catch((err) => {
          console.log(err);
        })
  });

  const imgs = contentInfo.imageUrls.map((imgUrl) => {
    return (
        <img src={imgUrl} />
    )
  });

  const comments = commentsList.map((comment) => {
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
          {comment.writerNickName}
          {comment.createdTime}
          <button>신고 </button>
          {comment.content }
          <button>답글 </button>
          {comment.nestedComments.map((nestedComment) => {
            return(
                <div style={{display: "flex", flexDirection: "column"}}>
                  {nestedComment}
                  <button>신고 </button>
                  <button>답글 </button>
                </div>
            )
          })};
        </div>
    )
  })

  return (
      <div>
        <Header />
        <Wrapper>
          <TitleWrapper>
            <DetailTitle>{contentInfo.title}</DetailTitle>
            <DetailInfo>
              <p>{writerInfo.writerId}</p>
              <p>|</p>
              <p>{contentInfo.createdTime}</p>
              <p>|</p>
              <p>{contentInfo.viewCount}</p>
              <p>|</p>
              <FontAwesomeIcon
                  icon={faHeart}
                  style={{color: "#D9767C"}}
              />
              <p>{contentInfo.likeCount}</p>
            </DetailInfo>
          </TitleWrapper>
          <ContentWrapper>
            <div>{imgs}</div>
            <div>{contentInfo.content}</div>
          </ContentWrapper>
          <AdditionalBtns>
            <AButton style={{background: "#9E8FA8"}}>좋아요</AButton>
            <AButton style={{background: "#C4C4C4"}}>공유</AButton>
            <AButton style={{background: "#9E8FA8"}}>신고하기</AButton>
          </AdditionalBtns>
          <CommentsWrapper>
            <div>댓글 {commentsInfo.commentCount}</div>
            {comments}
            {"로그인한 사용자\n"}
            {"댓글 작성"}
          </CommentsWrapper>
        </Wrapper>
      </div>
  )
}

export default CommunityDetail;