import React, {useCallback, useState} from "react";
import useInput from "../../Hooks/useInput";
import axios from "axios";
import preURL from "../../preURL/preURL";
import Token from "../Token";
import {timeStamp} from "../TimeStamp";
// STyle
import {
  Comment, CommentReplyImg,
  DetailInfo, EnterBtn, ExitReplybtn,
  Line,
  NewCommentBox, NewCommentInput, NewCommentWrapper, PlaceholderImg,
  ReplyBtn
} from "../../Style/Community";
import StyledBtn from "../../Style/StyledBtn";
// Assets
import Comment_reply from "../../Assets/Comment_reply.png";
import Enter from "../../Assets/Enter_Comment.png";
import Exit_reply from "../../Assets/Exit_reply.png";

const SingleComment = ({comment, board, boardId}) => {
  const token = Token();

  const [showReplyModal, setShowReplyModal] = useState(false);
  const [newReply, onChangeNewReply, setNewReply] = useInput("");
  const nestedComments = comment.nestedComments;

  // 댓글 삭제
  const onClickDeleteComment = (e) => {
    const commentId = e.target.getAttribute("id");
    console.log("삭제할 댓글 id:" + commentId);
    const del = window.confirm('이 댓글을 삭제하시겠습니까?');
    if(!del) return;
    axios
        .delete(preURL.preURL + `/boards/${board}/${boardId}/comments/${commentId}`,{
          headers: {
            'ITTASEKKI': token
          }
        })
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
    if(!token) {
      alert('로그인 후 이용해 주세요.');
      return;
    }
    const commentId = e.target.getAttribute("id");
    console.log("신고할 댓글 id: " + commentId);
    const report = window.confirm('이 댓글을 신고하시겠습니까?');
    if(!report) return;
    axios
        .post(preURL.preURL + `/boards/${board}/${boardId}/comments/${commentId}/reports`,{},{
          headers: {
            'ITTASEKKI': token
          }
        })
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

  // TODO 코드 중복 => 어떻게 해결?
  // 대댓글 등록
  const onSubmitReply = useCallback((e) => {
    if(!token) {
      alert('로그인 후 이용해 주세요.');
      return;
    }
    axios
        .post(preURL.preURL + `/boards/${board}/${boardId}/comments`, {
          content: newReply,
          parentCommentId: comment.id,
        },{
          headers: {
            'ITTASEKKI': token
          }
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
            <p style={{fontWeight: "bold"}}>{comment.writerNickname}</p>
            <p>|</p>
            <p>{timeStamp(comment.createdTime)}</p>
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
              <NewCommentWrapper style={{margin: "10px", flexDirection: "row"}}>
                <CommentReplyImg src={Comment_reply} alt="대댓글"/>
                <div>
                  <p id="nickname">
                    {"로그인한 사용자"}
                  </p>
                  <NewCommentBox onSubmit={onSubmitReply}>
                    <NewCommentInput
                        value={newReply}
                        onChange={onChangeNewReply}
                        style={{width: "650px"}}
                        placeholder="| 댓글 남기기"
                   />
                    <ExitReplybtn src={Exit_reply} alt="대댓글 창 닫기" onClick={onCloseReplyModal}/>
                    <EnterBtn type="image" src={Enter} alt="댓글 제출"/>
                  </NewCommentBox>
                </div>
              </NewCommentWrapper>
            </div>
        }
        {/*대댓글*/}
        {nestedComments.map((nestedComment) => {
            return(
                <Comment>
                  <Line/>
                  <div style={{display: "flex", flexDirection: "row"}}>
                  <CommentReplyImg src={Comment_reply} alt="대댓글"/>
                  <DetailInfo style={{marginTop: 0}}>
                    <p style={{fontWeight: "bold"}}>{nestedComment.writerNickname}</p>
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