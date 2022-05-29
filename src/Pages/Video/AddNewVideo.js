import React from 'react';
import Header from "../../Components/Header";
import {
  AddToPlayList, AddVideoBtn,
  AddVideoForm,
  AutoFrame, HashTag,
  Introduce,
  NewUrlForm,
  PreInform,
  PreInformContent, Round,
  Series
} from "../../Style/AddNewVideo";
import StyledBtn from "../../Style/StyledBtn";
import {useNavigate} from "react-router-dom";

const AddNewVideo = () => {
  const navigate = useNavigate();
  const onSubmitNewVideo = () => {
    console.log("영상 등록하기");
    navigate('/videolist');
  }

  return (
      <div>
        <Header />
        <PreInform>
          <b>영상 등록시 유의사항</b>
          <PreInformContent>
            <span id="content">
              <p>1. 공지사항입니다</p>
              <p>2. 공지사항입니다</p>
            </span>
            <span id="agree">
              <input type="checkbox" />
              <span>동의합니다</span>
            </span>
          </PreInformContent>
        </PreInform>
        <AddVideoForm onSubmit={onSubmitNewVideo}>
          <NewUrlForm>
            <p>URL 입력</p>
            <input type="text"/>
            <StyledBtn type="submit" id="verify-btn">검증</StyledBtn>
          </NewUrlForm>
          <div style={{display: "flex"}}>
            <Series>
              <p>시리즈</p>
              <input type="text" />
              {/*시리즈 선택*/}
              <AutoFrame>시리즈 리스트</AutoFrame>
            </Series>
            <Introduce>
              <p>영상을 간단하게 소개한다면? (20자 이내)</p>
              <input type="text" />
            </Introduce>
          </div>
          <div style={{display: "flex"}}>
            <Round>
              <p>회차</p>
              <input type="text" />
            </Round>
            <HashTag>
              <p>해시태그1 (장르, 상황)</p>
              <input type="text" />
              <AutoFrame>해시태그1 리스트</AutoFrame>
            </HashTag>
            <HashTag>
              <p>해시태그2 (키워드)</p>
              <input type="text" />
            </HashTag>
          </div>
          <AddToPlayList>
            <p>내 플레이리스트에 추가</p>
            <input type="text" />
            <AutoFrame>내 플레이리스트</AutoFrame>
          </AddToPlayList>
          <AddVideoBtn type="submit">등록하기</AddVideoBtn>
        </AddVideoForm>
      </div>
  )
}

export default AddNewVideo;