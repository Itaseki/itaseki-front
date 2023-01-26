import styled from "styled-components";
import {StyledDivRow} from "./StyledDiv";
import StyledBtn from "./StyledBtn";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px auto;
  width: 95%;
`

// 상단 저장한 플레이리스트로 이동 버튼 영역
export const GotoPlyDiv = styled(StyledDivRow)`
  width: 100%;
  justify-content: flex-end;
  padding: 30px;
  & > button {
    font-family: 'EF_Diary';
    font-size: 22px;
    line-height: 35px;
    letter-spacing: -0.02em;
  }
  & > img {
    width: 55px;
    margin: 0 10px;
    cursor: pointer;
  }
`

// 본문 영역
export const BGdiv = styled.div`
  background: #000000;
  border-radius: 56px;
  
  width: 92%;
  padding: 10% 4% 4%;
  
  position: relative;
  
  color: #FFFFFF;
  font-family: 'EF_Diary';
  letter-spacing: -0.02em;
  
  & > img { // 눈 모양 이미지
    position: absolute;
    left: 50%;
    transform: translate(-50%, -95%);
    
    max-width: 24%;
    height: auto;
  }
  
  & > div {
    margin-top: 50px;
  }
`

// 프로필 이미지
export const ImgWrapper = styled.div`
  width: 18%;
  padding-bottom: 18%;
  margin-left: 25%;
  position: relative;
  
  & > img { 
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
    object-fit: cover;
    border-radius: 50%;
  }
`

// 닉네임, 이메일
export const RightWrapper = styled.div`
  margin-left: 6%;
`

export const Nickname = styled.p`
  font-size: 35px;
  line-height: 49px;
`

export const Email = styled.p`
  font-size: 22px;
  line-height: 26px;
  text-decoration-line: underline;
`

// 각 영역 타이틀
export const Title = styled.p`
  font-size: 30px;
  line-height: 35px;
`

export const Comments = styled.div`
  width: 45%;
  border-left: 3px dashed #FFFFFF;
  padding: 0 2%;
`

// 탈퇴 버튼
export const Delete = styled(StyledBtn)`
  font-family: 'EF_Diary';
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: #FFFFFF;
`

/////////////////// MySavedPly ///////////////////

