import React, {useCallback, useState} from "react";
import axios from "axios";
import preURL from "../../preURL/preURL";
import useInput from "../../Hooks/useInput";
// Components
import SingleComment from "./SingleComment";
// Style
import {
  CommentHeader,
  CommentsListWrapper,
  CommentsWrapper, EnterBtn,
  Line,
  NewCommentBox, NewCommentInput,
  NewCommentWrapper, PlaceholderImg
} from "../../Style/Community";
// Assets
import Enter from "../../Assets/Enter_Comment.png";


const CommentList = ({commentCount, commentList, board, boardId}) => {
  const [newComment, onChangeNewComment, setNewComment] = useInput("");

  // 댓글 등록
  const onSubmitComment = useCallback(() => {
    console.log("새로운 댓글: " + newComment);
    axios
        .post(preURL.preURL + `/boards/${board}/${boardId}/comments`, {
          content: newComment,
          parentCommentId: 0,
        })
        .then((res) => {
          console.log("👍댓글 등록 성공");
          setNewComment("");  // 댓글 내용 초기화
        })
        .catch((err) => {
          console.log("🧨댓글 등록 에러", err);
        })
  }, [newComment]);

  return (
      <CommentsWrapper>
        <CommentsListWrapper>
          <CommentHeader>
            <span>댓글</span>&nbsp;
            <span id="count">{commentCount}</span>
          </CommentHeader>
          {commentList.map((comment) => (
              <SingleComment comment={comment} board={board} boardId={boardId}/>
          ))}
          <Line style={{width: "805px"}}/>
        </CommentsListWrapper>
        <NewCommentWrapper>
          <p id="nickname">
            {"로그인한 사용자"}
          </p>
          <NewCommentBox onSubmit={onSubmitComment}>
            <NewCommentInput
                value={newComment}
                onChange={onChangeNewComment}
                placeholder="| 댓글 남기기"/>
            <EnterBtn type="image" src={Enter} alt="댓글 제출"/>
          </NewCommentBox>
        </NewCommentWrapper>
      </CommentsWrapper>
  )
};

export default CommentList;