import React from 'react';
import {CommentsWrapper, ContentWrapper, DetailInfo, DetailTitle, TitleWrapper, Wrapper} from "../../Style/Community";
import Header from "../../Components/Header";
import StyledBtn from "../../Style/StyledBtn";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const CommunityDetail = () => {

  return (
      <div>
        <Header />
        <Wrapper>
          <TitleWrapper>
            <DetailTitle>제목</DetailTitle>
            <FontAwesomeIcon
                icon={faHeart}
                style={{color: "#D9767C"}}
            />
            <DetailInfo>
              <p>작성자</p>
              <p>|</p>
              <p>작성시간</p>
              <p>|</p>
              <p>조회수</p>
            </DetailInfo>
          </TitleWrapper>
          <ContentWrapper>
            <img src="/"/>
            <div>내용</div>
          </ContentWrapper>
          <div>
            <button>좋아요</button>
            <button>공유</button>
            <button>신고하기</button>
          </div>
          <CommentsWrapper>
            댓글
          </CommentsWrapper>
        </Wrapper>
      </div>
  )
}

export default CommunityDetail;