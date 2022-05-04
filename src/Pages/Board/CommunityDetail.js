import React, {useCallback, useEffect, useState} from 'react';
import {
  AButton,
  AdditionalBtns, Comment, CommentsListWrapper,
  CommentsWrapper,
  ContentWrapper,
  DetailInfo,
  DetailTitle, Line, NewCommentBox, NewCommentWrapper,
  TitleWrapper,
  Wrapper
} from "../../Style/Community";
import Header from "../../Components/Header";
import StyledBtn from "../../Style/StyledBtn";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from "axios";
import preURL from "../../preURL/preURL";
import Comment_Reply from "../../Assets/Comment_reply.png";
import {useParams} from "react-router-dom";
import useInput from "../../Hooks/useInput";

const CommunityDetail = ({match}) => {

  const [contentInfo, setContentInfo] = useState({
      id: 1, title: "제목이당", content: "내용이당", imageUrls: ["/1", "/2"], createdTime: "2:48", viewCount: 15, likeCount: 30,
    writerId: 10, writerNickname: "배고파",
    isThisUserWriter: true,
    commentCount: 3, comments: commentsList
  });
  const [writerInfo, setWriterInfo] = useState({writerId: contentInfo.writerId, writerNickname: contentInfo.writerNickname});
  const [commentsList, setCommentsList] = useState([
    {id: 1, content: "댓글이당", createdTime: "4:16", writerId: 10, writerNickName: "배고파22", isThisUserWriter: true, isThisBoardWriterCommentWriter: false,
      nestedComments: null},
    {id: 2, content: "댓글2당", createdTime: "4:20", writerId: 11, writerNickName: "배고파23", isThisUserWriter: false, isThisBoardWriterCommentWriter: true,
      nestedComments: null},
  ]);
  const [newComment, onChangeNewComment, setNewComment] = useInput("");
  const [parentCommentId, setParentCommentId] = useState(0);

  const communityBoardId = useParams().id;
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

  const onClickLike = useCallback(() => {
    axios.post(preURL.preURL + `/boards/community/${communityBoardId}/likes`)
        .then((res) => {
          console.log("게시글 좋아요", res.data);
        })
        .catch((err) => {
          console.log("게시글 좋아요 에러", err);
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
          console.log("게시글 신고", res.data);
        })
        .catch((err) => {
          console.log("게시글 신고 에러", err);
        })
  }, []);

  // 댓글 등록
  const onSubmitComment = useCallback(() => {
    axios
        .post(preURL.preURL + `/boards/community/${communityBoardId}/comments`, {
          content: newComment,
          parentCommentId: parentCommentId,
        })
        .then((res) => {
          console.log("댓글 등록", res.data);
        })
        .catch((err) => {
          console.log("댓글 등록 오류", err);
        })
  }, []);

  // 댓글 삭제
  const onClickDeleteComment = useCallback(() => {
    // axios
    //     .delete(preURL.preURL + `/boards/community/${communityBoardId}/comments/${communityCommentId}`)  // communityCommentId
    //     .then((res) => {
    //       console.log("댓글 삭제", res);
    //     })
    //     .catch((err) => {
    //       console.log("댓글 삭제 오류", err);
    //     })
  },[]);

  // 댓글 신고
  const onClickCommentReport = useCallback(() => {
    // axios
    //     .post(preURL.preURL + `/boards/community/${communityBoardId}/comments/${communityCommentId}`)
    //     .then((res) => {
    //       console.log("댓글 신고", res.data);
    //     })
    //     .catch((err) => {
    //       console.log("댓글 신고 에러", err);
    //     })
  },[]);


  // 게시글 이미지
  const imgs = contentInfo.imageUrls.map((imgUrl) => {
    return (
        <img src={imgUrl} />
    )
  });

  // 댓글
  const comments = commentsList.map((comment) => {
    return (
        <div>
          <Comment>
            <Line/>
            <DetailInfo>
              <p style={{fontWeight: 600, color: "#6A3E85"}}>{comment.writerNickName}</p>
              <p>|</p>
              <p>{comment.createdTime}</p>
              <p>|</p>
              {comment.isThisUserWriter?
                  <StyledBtn onClick={onClickDeleteComment}>삭제</StyledBtn>
                  :
                  <StyledBtn onClick={onClickCommentReport}>신고</StyledBtn>}
            </DetailInfo>
            <div id="comment-content">{comment.content}</div>
            <StyledBtn id="comment-btn">답글</StyledBtn>
          </Comment>
          {/*{comment.nestedComments?.map((nestedComment) => {
            return(
                <Comment>
                  <Line/>
                  {Comment_Reply}
                  <DetailInfo>
                    <p style={{fontWeight: 600, color: "#6A3E85"}}>{nestedComment.writerNickName}</p>
                    <p>|</p>
                    <p>{nestedComment.createdTime}</p>
                    <p>|</p>
                    <StyledBtn>신고</StyledBtn>
                  </DetailInfo>
                  <div id="comment-content">{nestedComment.content}</div>
                </Comment>
            )
          })}*/}
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
              <p style={{color: "#D9767C"}}>{contentInfo.likeCount}</p>
            </DetailInfo>
          </TitleWrapper>
          <ContentWrapper>
            <div>{imgs}</div>
            <div>{contentInfo.content}</div>
          </ContentWrapper>
          <AdditionalBtns>
            <AButton style={{background: "#9E8FA8"}} onClick={onClickLike}>좋아요</AButton>
            <AButton style={{background: "#C4C4C4"}} onClick={onClickShare}>공유</AButton>
            <AButton style={{background: "#9E8FA8"}} onClick={onClickReport}>신고하기</AButton>
          </AdditionalBtns>
          <CommentsWrapper>
            <CommentsListWrapper>
              <p>댓글 {contentInfo.commentCount}</p>
              {comments}
              <Line style={{width: "805px"}}/>
            </CommentsListWrapper>
            <NewCommentWrapper>
              {"로그인한 사용자"}
              <NewCommentBox>
                <textarea placeholder="댓글 입력" value={newComment} onChange={onChangeNewComment}/>
                <StyledBtn id="submit-btn" onClick={onSubmitComment}>확인</StyledBtn>
              </NewCommentBox>
            </NewCommentWrapper>
          </CommentsWrapper>
        </Wrapper>
      </div>
  )
}

export default CommunityDetail;