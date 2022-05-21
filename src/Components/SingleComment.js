import React, {useCallback, useState} from "react";
import {Comment, DetailInfo, Line, NewCommentBox, ReplyBtn} from "../Style/Community";
import StyledBtn from "../Style/StyledBtn";
import axios from "axios";
import {preURL} from "../preURL/preURL";
import Comment_reply from "../Assets/Comment_reply.jpg";
import useInput from "../Hooks/useInput";

const SingleComment = ({comment, communityBoardId}) => {
  const [showReplyModal, setShowReplyModal] = useState(false);
  const [newReply, onChangeNewReply, setNewReply] = useInput("");

  // 댓글 삭제
  const onClickDeleteComment = useCallback((e) => {
    console.log(e);
    const communityCommentId = e.target.getAttribute("id");
    console.log("삭제할 댓글 id:" + communityCommentId);
    axios
        .delete(preURL.preURL + `/boards/community/${communityBoardId}/comments/${communityCommentId}`)  // communityCommentId
        .then((res) => {
          console.log("👍댓글 삭제 성공");
        })
        .catch((err) => {
          console.log("🧨댓글 삭제 에러", err);
        })
  },[]);

  // 댓글 신고
  const onClickCommentReport = useCallback((e) => {
    const communityCommentId = e.target.getAttribute("id");
    console.log(communityCommentId);
    axios
        .post(preURL.preURL + `/boards/community/${communityBoardId}/comments/${communityCommentId}`)
        .then((res) => {
          console.log("👍댓글 신고 성공");
        })
        .catch((err) => {
          console.log("🧨댓글 신고 에러", err);
        })
  },[]);

  // 대댓글 등록 모달 창 띄우기
  const onCreateReplyModal = () => {
    setShowReplyModal(true);
    console.log("대댓글 모달 창 띄우기: " + showReplyModal);
  };

  // 대댓글 등록 모달 창 clsoe
  const onCloseReplyModal = () => {
    setShowReplyModal(false);
    console.log("대댓글 모달 창 닫기: " + showReplyModal);
  };

  // 코드 중복 => 어떻게 해결?
  // 대댓글 등록
  const onSubmitReply = useCallback(() => {
    axios
        .post(preURL.preURL + `/boards/community/${communityBoardId}/comments`, {
          content: newReply,
          parentCommentId: comment.id,
        })
        .then((res) => {
          console.log("👍댓글 등록 성공");
          setNewReply("");  // 댓글 내용 초기화
        })
        .catch((err) => {
          console.log("🧨댓글 등록 에러", err);
        })
  }, []);

  return (
      <div>
        <Comment>
          <Line/>
          <DetailInfo>
            <p style={{fontWeight: 600, color: "#6A3E85"}}>{comment.writerNickName}</p>
            <p>|</p>
            <p>{comment.createdTime}</p>
            <p>|</p>
            {comment.isThisUserWriter
                ? <StyledBtn id={comment.id} onClick={onClickDeleteComment}>삭제</StyledBtn>
                : <StyledBtn id={comment.id} onClick={onClickCommentReport}>신고</StyledBtn>}
          </DetailInfo>
          <div id="comment-content">{comment.content}</div>
          <ReplyBtn
              id={comment.id}
              onClick={onCreateReplyModal}
          >
            답글
          </ReplyBtn>
        </Comment>
        {/*대댓글 모달창*/}
        {showReplyModal &&
            <div>
              <Line/>
              <img src={Comment_reply} style={{padding: "10px", verticalAlign: "middle"}} alt="대댓글"/>
              <span>로그인한 사용자</span>
              <NewCommentBox onSubmit={onSubmitReply}>
                <textarea placeholder="댓글 입력" style={{width: "761px", marginLeft: "20px"}} value={newReply} onChange={onChangeNewReply}/>
                <div style={{flexDirection: "row", alignSelf: "self-end"}}>
                  <StyledBtn type="submit" id="submit-btn" style={{background: "#9E8FA8"}}>확인</StyledBtn>
                  <StyledBtn id="submit-btn" style={{background: "#C4C4C4"}} onClick={onCloseReplyModal}>취소</StyledBtn>
                </div>
              </NewCommentBox>
            </div>
        }
        {/*{comment.nestedComments?.map((nestedComment) => {
            return(
                <Comment>
                  <Line/>
                  <img src={Comment_reply} alt="대댓글"/>
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
}

export default SingleComment;