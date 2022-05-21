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
import SingleComment from "../../Components/SingleComment";

const CommunityDetail = ({match}) => {

  const [contentInfo, setContentInfo] = useState({
      id: 1, title: "제목이당", content: "내용이당", imageUrls: ["/1", "/2"], createdTime: "2:48", viewCount: 15, likeCount: 30,
    writerId: 10, writerNickname: "배고파",
    isThisUserWriter: true,
    commentCount: 3, comments: commentsList
  });
  const [writerInfo, setWriterInfo] = useState({writerId: contentInfo.writerId, writerNickname: contentInfo.writerNickname});
  const [commentsList, setCommentsList] = useState([
    {id: 12345, content: "댓글이당", createdTime: "4:16", writerId: 10, writerNickName: "배고파22", isThisUserWriter: true, isThisBoardWriterCommentWriter: false,
      nestedComments: [
          {writerNickName: "배고파23", createdTime: "10:26", content: "대댓글이당"},
          {writerNickName: "배고파24", createdTime: "10:30", content: "대댓글2이당"}
      ]},
    {id: 23456, content: "댓글2당", createdTime: "4:20", writerId: 11, writerNickName: "배고파23", isThisUserWriter: false, isThisBoardWriterCommentWriter: true,
      nestedComments: null},
    {id: 98765, content: "댓글3임", createdTime: "4:20", writerId: 11, writerNickName: "배고파23", isThisUserWriter: false, isThisBoardWriterCommentWriter: true,
      nestedComments: null},
  ]);
  const [newComment, onChangeNewComment, setNewComment] = useInput("");
  const [likeCount, setLikeCount] = useState(contentInfo.likeCount);

  const communityBoardId = useParams().id;
  // console.log("communityBoardId: ", communityBoardId);  // communityBoardId 받아오기

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

  // 좋아요 버튼 클릭
  const onClickLike = useCallback(() => {
    axios.post(preURL.preURL + `/boards/community/${communityBoardId}/likes`)
        .then((res) => {
          console.log("게시글 좋아요", res.data);
          setLikeCount(res.data);
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

  // 게시글 삭제
  const onClickDelete = useCallback(() => {
    axios.delete(preURL.preURL + `/boards/community/${communityBoardId}`)
        .then((res) => {
          console.log("게시글 삭제", res);
        })
        .catch((err) => {
          console.log("게시글 삭제 에러", err);
        })
  }, []);

  // 댓글 등록
  const onSubmitComment = useCallback(() => {
    axios
        .post(preURL.preURL + `/boards/community/${communityBoardId}/comments`, {
          content: newComment,
          parentCommentId: 0,
        })
        .then((res) => {
          console.log("댓글 등록", res.data);
          setNewComment("");  // 댓글 내용 초기화
        })
        .catch((err) => {
          console.log("댓글 등록 오류", err);
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
              <p style={{color: "#D9767C"}}>{likeCount}</p>
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
              {commentsList.map((comment) => {
                return <SingleComment comment={comment} communityBoardId={communityBoardId}/>
              })}
              <Line style={{width: "805px"}}/>
            </CommentsListWrapper>
            <NewCommentWrapper>
              {"로그인한 사용자"}
              <NewCommentBox onSubmit={onSubmitComment}>
                <textarea placeholder="댓글 입력" value={newComment} onChange={onChangeNewComment}/>
                <StyledBtn type="submit" id="submit-btn" style={{background: "#9E8FA8"}}>확인</StyledBtn>
              </NewCommentBox>
            </NewCommentWrapper>
          </CommentsWrapper>
        </Wrapper>
      </div>
  )
}

export default CommunityDetail;