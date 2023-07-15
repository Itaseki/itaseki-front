import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import preURL from "../../preURL/preURL";
// Components
import Header from "../../Components/Header";
import CommentList from "../../Components/Comment/CommentList";
// Style
import {
  AButton,
  AdditionalBtns,
  ContentImg,
  ContentWrapper,
  DetailInfo,
  DetailTitle,
  TitleWrapper,
  Wrapper,
} from "../../Style/Community";
import StyledBtn from "../../Style/StyledBtn";
import { light } from "../../Style/Color";
// Assets
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CommunityDetail = () => {
  const [contentInfo, setContentInfo] = useState({
    id: 0,
    title: "",
    content: "",
    imageUrls: [],
    createdTime: "",
    viewCount: 0,
    likeCount: 0,
    writerId: 0,
    writerNickname: "",
    isThisUserWriter: true,
    commentCount: 0,
    comments: [],
  });
  const [likeCount, setLikeCount] = useState();
  const commentsList = contentInfo.comments;
  const communityBoardId = useParams().id;
  // console.log("communityBoardId: ", communityBoardId);  // communityBoardId 받아오기

  // 상세 게시글 조회
  useEffect(() => {
    axios
      .get(preURL.preURL + `/boards/community/${communityBoardId}`)
      .then((res) => {
        console.log("👍상세 게시글 조회 성공", res);
        setContentInfo(res.data);
        setLikeCount(res.data["likeCount"]);
      })
      .catch((err) => {
        console.log("🧨상세 게시글 조회 실패", err);
      });
  }, []);

  // 좋아요 버튼 클릭
  const onClickLike = useCallback(() => {
    axios
      .post(preURL.preURL + `/boards/community/${communityBoardId}/likes`)
      .then((res) => {
        console.log("👍게시글 좋아요 성공");
        setLikeCount(res.data);
        alert("게시글을 좋아했습니다.");
      })
      .catch((err) => {
        console.log("🧨게시글 좋아요 에러", err);
      });
  }, []);

  // 게시글 신고
  const onClickReport = useCallback(() => {
    axios
      .post(preURL.preURL + `/boards/community/${communityBoardId}/reports`)
      .then((res) => {
        console.log("👍게시글 신고 성공");
      })
      .catch((err) => {
        console.log("🧨게시글 신고 에러", err);
      });
  }, []);

  // 게시글 삭제
  const onClickDelete = useCallback(() => {
    axios
      .delete(preURL.preURL + `/boards/community/${communityBoardId}`)
      .then((res) => {
        console.log("👍게시글 삭제 성공");
        alert("게시글을 삭제하였습니다.");
        return (window.location.href = "/community");
      })
      .catch((err) => {
        console.log("🧨게시글 삭제 에러", err);
      });
  }, []);

  // 게시글 이미지
  const imgs = contentInfo.imageUrls.map((imgUrl) => {
    return <ContentImg src={imgUrl} alt="사진" />;
  });

  return (
    <div>
      <Header />
      <Wrapper>
        <TitleWrapper>
          <DetailTitle>
            {contentInfo.title}
            {contentInfo.isThisUserWriter ? (
              <StyledBtn id="del" onClick={onClickDelete}>
                삭제
              </StyledBtn>
            ) : null}
          </DetailTitle>
          <DetailInfo>
            <p
              style={{ fontWeight: "bold", color: `${light.colors.mainColor}` }}
            >
              {contentInfo.writerNickname}
            </p>
            <p>|</p>
            <p>{contentInfo.createdTime}</p>
            <p>|</p>
            <p>조회 {contentInfo.viewCount}</p>
            <p>|</p>
            <FontAwesomeIcon
              icon={faHeart}
              style={{ color: `${light.colors.mainColor}` }}
            />
            <p style={{ color: `${light.colors.mainColor}` }}>{likeCount}</p>
          </DetailInfo>
        </TitleWrapper>
        <ContentWrapper>
          <div>{imgs}</div>
          <div>{contentInfo.content}</div>
        </ContentWrapper>
        <AdditionalBtns>
          <AButton onClick={onClickLike}>좋아요</AButton>
          <AButton onClick={onClickReport}>신고하기</AButton>
        </AdditionalBtns>
        <CommentList
          commentCount={contentInfo.commentCount}
          commentList={commentsList}
          board={"community"}
          boardId={communityBoardId}
        />
      </Wrapper>
    </div>
  );
};

export default CommunityDetail;
