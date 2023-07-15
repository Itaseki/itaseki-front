import React, { useContext, useState } from "react";
import axios from "axios";
import preURL from "../../preURL/preURL";
import Token from "../Token";

import useInput from "../../Hooks/useInput";
import { UserContext } from "../../_contextAPI/UserContext";
import { timeStamp } from "../TimeStamp";
// Style
import {
  Comment,
  CommentReplyImg,
  DetailInfo,
  EnterBtn,
  Line,
  NewCommentBox,
  NewCommentInput,
  NewCommentWrapper,
  ReplyBtn,
} from "../../Style/Community";
import StyledBtn from "../../Style/StyledBtn";
// Assets
import Comment_reply from "../../Assets/Comment_reply.png";

const SingleComment = ({ comment, board, boardId }) => {
  const token = Token();

  const [user, setUser] = useContext(UserContext);
  const [showReplyModal, setShowReplyModal] = useState(false);
  const [newReply, onChangeNewReply, setNewReply] = useInput("");
  const nestedComments = comment.nestedComments;

  // 댓글 삭제
  const onClickDeleteComment = (e) => {
    const commentId = e.target.getAttribute("id");
    console.log("삭제할 댓글 id:" + commentId);
    const del = window.confirm("이 댓글을 삭제하시겠습니까?");
    if (!del) return;
    axios
      .delete(
        preURL.preURL + `/boards/${board}/${boardId}/comments/${commentId}`,
        {
          headers: {
            ITTASEKKI: token,
          },
        }
      )
      .then((res) => {
        console.log("👍댓글 삭제 성공");
        window.location.reload();
      })
      .catch((err) => {
        console.log("🧨댓글 삭제 에러", err);
      });
  };

  // 댓글 신고
  const onClickCommentReport = (e) => {
    if (!token) {
      alert("로그인 후 이용해 주세요.");
      return;
    }
    const commentId = e.target.getAttribute("id");
    console.log("신고할 댓글 id: " + commentId);
    const report = window.confirm("이 댓글을 신고하시겠습니까?");
    if (!report) return;
    axios
      .post(
        preURL.preURL +
          `/boards/${board}/${boardId}/comments/${commentId}/reports`,
        {},
        {
          headers: {
            ITTASEKKI: token,
          },
        }
      )
      .then((res) => {
        console.log("👍댓글 신고 성공");
        alert("댓글을 신고하였습니다.");
      })
      .catch((err) => {
        console.log("🧨댓글 신고 에러", err);
      });
  };

  // TODO 코드 중복 => 어떻게 해결?
  // 대댓글 등록
  const onSubmitReply = () => {
    if (!token) {
      alert("로그인 후 이용해 주세요.");
      return;
    }
    axios
      .post(
        preURL.preURL + `/boards/${board}/${boardId}/comments`,
        {
          content: newReply,
          parentCommentId: comment.id,
        },
        {
          headers: {
            ITTASEKKI: token,
          },
        }
      )
      .then((res) => {
        console.log("👍대댓글 등록 성공");
        setNewReply(""); // 댓글 내용 초기화
      })
      .catch((err) => {
        console.log("🧨대댓글 등록 에러", err);
      });
  };

  return (
    <div>
      <Comment>
        <Line />
        <DetailInfo>
          <p>{comment.writerNickname}</p>
          <p>|</p>
          <p>{timeStamp(comment.createdTime)}</p>
          <p>|</p>
          {comment.isThisUserWriter ? (
            <StyledBtn id={comment.id} onClick={onClickDeleteComment}>
              삭제
            </StyledBtn>
          ) : (
            <StyledBtn id={comment.id} onClick={onClickCommentReport}>
              신고
            </StyledBtn>
          )}
        </DetailInfo>
        <div id="comment-content">{comment.content}</div>
        <ReplyBtn
          id={comment.id}
          onClick={() => setShowReplyModal((prev) => !prev)}
        >
          답글
        </ReplyBtn>
      </Comment>
      {/*대댓글 모달창*/}
      {showReplyModal && (
        <div>
          <Line />
          <NewCommentWrapper style={{ margin: "10px", flexDirection: "row" }}>
            <CommentReplyImg src={Comment_reply} alt="대댓글" />
            <div>
              <p id="nickname">{user.nickname}</p>
              <NewCommentBox onSubmit={onSubmitReply}>
                <NewCommentInput
                  value={newReply}
                  onChange={onChangeNewReply}
                  style={{ width: "710px" }}
                  placeholder="| 댓글 남기기"
                />
                <EnterBtn type="submit">등록</EnterBtn>
              </NewCommentBox>
            </div>
          </NewCommentWrapper>
        </div>
      )}
      {/*대댓글*/}
      {nestedComments.map((nestedComment) => {
        return (
          <Comment>
            <Line />
            <div style={{ display: "flex", flexDirection: "row" }}>
              <CommentReplyImg src={Comment_reply} alt="대댓글" />
              <DetailInfo style={{ marginTop: 0 }}>
                <p style={{ fontWeight: "bold" }}>
                  {nestedComment.writerNickname}
                </p>
                <p>|</p>
                <p>{timeStamp(nestedComment.createdTime)}</p>
                <p>|</p>
                {nestedComment.isThisUserWriter ? (
                  <StyledBtn
                    id={nestedComment.id}
                    onClick={onClickDeleteComment}
                  >
                    삭제
                  </StyledBtn>
                ) : (
                  <StyledBtn
                    id={nestedComment.id}
                    onClick={onClickCommentReport}
                  >
                    신고
                  </StyledBtn>
                )}
              </DetailInfo>
            </div>
            <div id="comment-content" style={{ marginLeft: "40px" }}>
              {nestedComment.content}
            </div>
          </Comment>
        );
      })}
    </div>
  );
};

export default SingleComment;
