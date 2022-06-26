import React, {useCallback, useEffect, useState} from "react";
import {Comment, DetailInfo, Line, NewCommentBox, ReplyBtn} from "../../Style/Community";
import StyledBtn from "../../Style/StyledBtn";
import axios from "axios";
import preURL from "../../preURL/preURL";
import Comment_reply from "../../Assets/Comment_reply.png";
import useInput from "../../Hooks/useInput";

const SingleComment = ({comment, communityBoardId}) => {
  const [showReplyModal, setShowReplyModal] = useState(false);
  const [newReply, onChangeNewReply, setNewReply] = useInput("");
  const nestedComments = comment.nestedComments;

  // 댓글 삭제
  const onClickDeleteComment = (e) => {
    const communityCommentId = e.target.getAttribute("id");
    console.log("삭제할 댓글 id:" + communityCommentId);
    axios
        .delete(preURL.preURL + `/boards/community/${communityBoardId}/comments/${communityCommentId}`)
        .then((res) => {
          console.log("👍댓글 삭제 성공");
          window.location.reload();
        })
        .catch((err) => {
          console.log("🧨댓글 삭제 에러", err);
        })
  };

  // 댓글 신고
  const onClickCommentReport = (e) => {
    const communityCommentId = e.target.getAttribute("id");
    console.log("신고할 댓글 id: " + communityCommentId);
    axios
        .post(preURL.preURL + `/boards/community/${communityBoardId}/comments/${communityCommentId}/reports`)
        .then((res) => {
          console.log("👍댓글 신고 성공");
          alert("댓글을 신고하였습니다.");
        })
        .catch((err) => {
          console.log("🧨댓글 신고 에러", err);
        })
  };

  // 대댓글 등록 모달 창 띄우기
  const onCreateReplyModal = () => {
    setShowReplyModal(true);
    console.log("대댓글 모달 창 띄우기: " + showReplyModal);
  };

  // 대댓글 등록 모달 창 close
  const onCloseReplyModal = () => {
    setShowReplyModal(false);
    console.log("대댓글 모달 창 닫기: " + showReplyModal);
  };

  // 코드 중복 => 어떻게 해결?
  // 대댓글 등록
  const onSubmitReply = useCallback((e) => {
    axios
        .post(preURL.preURL + `/boards/community/${communityBoardId}/comments`, {
          content: newReply,
          parentCommentId: comment.id,
        })
        .then((res) => {
          console.log("👍대댓글 등록 성공");
          setNewReply("");  // 댓글 내용 초기화
        })
        .catch((err) => {
          console.log("🧨대댓글 등록 에러", err);
        })
  }, [newReply]);

  return (
      <div>
        <Comment>
          <Line/>
          <DetailInfo>
            <p style={{fontWeight: 600, color: "#6A3E85"}}>{comment.writerNickname}</p>
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
              <img src={Comment_reply} style={{width: "15px", height: "19px", padding: "10px", verticalAlign: "middle"}} alt="대댓글"/>
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
        {/*대댓글*/}
        {nestedComments.map((nestedComment) => {
            return(
                <Comment>
                  <Line/>
                  <div style={{display: "flex", flexDirection: "row"}}>
                  <img src={Comment_reply} style={{width: "15px", height: "19px", padding: "10px", verticalAlign: "middle"}} alt="대댓글"/>
                  <DetailInfo style={{marginTop: 0}}>
                    <p style={{fontWeight: 600, color: "#6A3E85"}}>{nestedComment.writerNickname}</p>
                    <p>|</p>
                    <p>{nestedComment.createdTime}</p>
                    <p>|</p>
                    {nestedComment.isThisBoardWriterCommentWriter
                        ? <StyledBtn id={nestedComment.id} onClick={onClickDeleteComment}>삭제</StyledBtn>
                        : <StyledBtn id={nestedComment.id} onClick={onClickCommentReport}>신고</StyledBtn>}
                  </DetailInfo>
                  </div>
                  <div id="comment-content" style={{marginLeft: "40px"}}>{nestedComment.content}</div>
                </Comment>
            )
          })}
      </div>
  )
}

export default SingleComment;