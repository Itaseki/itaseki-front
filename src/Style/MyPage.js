import styled from "styled-components";
import { StyledDivRow } from "./StyledDiv";
import StyledBtn from "./StyledBtn";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 6.25rem auto;
  width: 95%;
`;

// 상단 저장한 플레이리스트로 이동 버튼 영역
export const GotoPlyDiv = styled(StyledDivRow)`
  width: 100%;
  justify-content: flex-end;
  padding: 1.875rem;
  & > button {
    font-family: "EF_Diary";
    font-size: 1.375rem;
    line-height: 2.1875rem;
    letter-spacing: -0.02em;
  }
  & > img {
    width: 3.4375rem;
    margin: 0 0.625rem;
    cursor: pointer;
  }
`;

// 본문 영역
export const BGdiv = styled.div`
  background: #000000;
  border-radius: 3.5rem;

  width: 92%;
  padding: 1.25rem 0.5rem 0.5rem;

  position: relative;

  color: #ffffff;
  font-family: "EF_Diary";
  letter-spacing: -0.02em;

  & > img {
    // 눈 모양 이미지
    position: absolute;
    left: 50%;
    transform: translate(-50%, -95%);

    max-width: 24%;
    height: auto;
  }

  & > div {
    margin-top: 3.125rem;
  }
`;

// 프로필 이미지
export const ImgWrapper = styled.div`
  width: 18%;
  padding-top: 18%;
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
  & > #camera {
    position: absolute;
    bottom: 0;
    right: 0;
  }
  & > label {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    :hover {
      cursor: pointer;
      background-color: rgba(225, 225, 225, 0.2);
    }
  }
`;

// 닉네임, 이메일
export const RightWrapper = styled.div`
  margin-left: 6%;
`;

export const Nickname = styled.p`
  font-size: 2.1875rem;
  line-height: 3.4375rem;
`;

export const Email = styled.p`
  font-size: 1.375rem;
  line-height: 1.625rem;
  text-decoration-line: underline;
`;

// 각 영역 타이틀
export const Title = styled.p`
  font-size: 2.5rem;
  line-height: 2.9375rem;
`;

export const Comments = styled.div`
  width: 45%;
  border-left: 0.1875rem dashed #ffffff;
  padding: 0 0.625rem;
`;

// 탈퇴 버튼
export const Delete = styled(StyledBtn)`
  font-family: "EF_Diary";
  font-size: 0.9375rem;
  line-height: 1.125rem;
  letter-spacing: -0.02em;
  color: #ffffff;
`;
