import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { timeStamp } from "../TimeStamp";

const MyComment = ({ comment }) => {
  const navigate = useNavigate();

  return (
    <Wrapper
      onClick={() => navigate(`/${comment.boardType}/${comment.boardId}`)}
    >
      <Content>{comment.content}</Content>
      <Info>{comment.boardTitle}</Info>
      <Info> | </Info>
      <Info>{timeStamp(comment.createdTime)}</Info>
    </Wrapper>
  );
};

export default MyComment;

const Wrapper = styled.div`
  cursor: pointer;
`;

const Content = styled.p`
  font-size: 18px;
  line-height: 20px;
  margin-bottom: 0;
`;

const Info = styled.span`
  font-size: 12px;
  line-height: 14px;
`;
