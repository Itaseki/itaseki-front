import {CommentsListWrapper, CommentsWrapper, Line, NewCommentBox, NewCommentWrapper} from "../../Style/Community";
import SingleComment from "./SingleComment";
import StyledBtn from "../../Style/StyledBtn";
import React, {useCallback} from "react";
import axios from "axios";
import preURL from "../../preURL/preURL";
import useInput from "../../Hooks/useInput";


const CommentList = ({contentInfo, commentList, communityBoardId}) => {
  const [newComment, onChangeNewComment, setNewComment] = useInput("");

  // 댓글 등록
  const onSubmitComment = useCallback(() => {
    console.log("새로운 댓글: " + newComment);
    axios
        .post(preURL.preURL + `/boards/community/${communityBoardId}/comments`, {
          content: newComment,
          parentCommentId: 0,
        })
        .then((res) => {
          console.log("👍댓글 등록 성공");
          setNewComment("");  // 댓글 내용 초기화
        })
        .catch((err) => {
          console.log("🧨댓글 등록 에러", err);
          console.log(`/boards/community/${communityBoardId}/comments`);
        })
  }, [newComment]);

  return (
      <CommentsWrapper>
        <CommentsListWrapper>
          <p>댓글 {contentInfo.commentCount}</p>
          {commentList.map((comment) => (
              <SingleComment comment={comment} communityBoardId={communityBoardId}/>
          ))}
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
  )
};

export default CommentList;