import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import preURL from "../preURL/preURL";
import Token from "./Token";

// Style
import "../Style/Font.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import StyledBtn from "../Style/StyledBtn";
import { StyledDivRow } from "../Style/StyledDiv";
import { light } from "../Style/Color";
// Assets
import Main_logo from "../Assets/Main_logo.png";
import Main_logo_dark from "../Assets/Main_logo_dark.png";
import { StyledLink } from "../Style/StyledLink";

// 카카오 소셜 로그인
const client_id = process.env.REACT_APP_KAKAO_REST_API_KEY;
const redirect_uri = process.env.REACT_APP_KAKAO_REDIRECT_URI;

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`;

const Header = ({ darkMode }) => {
  const token = Token();

  const [caretOpen, setCaretOpen] = useState(false);
  const [userId, setUserId] = useState(0);
  const [userNickname, setUserNickname] = useState("");
  const [userProfileImg, setUserProfileImg] = useState("");

  // 사용자 프로필 이미지 받아오기
  useEffect(() => {
    if (!token) return; // 임시 처리 - 수정 필요
    axios
      .get(preURL.preURL + "/main/user", {
        headers: {
          itasekki: token,
        },
      })
      .then((res) => {
        console.log("👍헤더 사용자 프로필 이미지 가져오기 성공 ", res);
        setUserId(res.data["id"]);
        setUserProfileImg(res.data["profileUrl"]);
        setUserNickname(res.data["nickname"]);
      })
      .catch((err) => {
        console.log("🧨헤더 사용자 프로필 이미지 가져오기 실패", err);
      });
  }, []);

  // 로그아웃
  const onLogout = () => {
    let logout = window.confirm("로그아웃 하시겠습니까?");
    if (logout) {
      if (!token) {
        alert("사용자가 없습니다.");
        return;
      }
      localStorage.removeItem("access_token");
      alert("로그아웃 되었습니다.");
      window.location.reload();
    }
  };

  // 탈퇴하기
  const onLeave = () => {
    const content =
      "[회원 탈퇴]\n " +
      "탈퇴 시 유의사항을 확인 바랍니다.\n\n " +
      "- 계정 연동 시 연동이 해제됩니다.\n" +
      "- 사이트 내에 작성한 게시글, 댓글 등은 삭제되지 않으며, ‘알 수 없음’으로 회원 정보가 수정되어 작성 내용이 유지됩니다.\n" +
      "- 회원 탈퇴 시 사이트 내 등록된 대부분의 게시글 확인·수정·삭제 등이 일체 불가하며 이를 유의하시어 탈퇴 바랍니다.\n\n" +
      "위 탈퇴 유의사항을 확인하고 이에 동의한다면 '확인'을, 동의하지 않는다면 '취소'를 눌러주세요.";

    let leave = window.confirm(content);
    if (leave) {
      localStorage.removeItem("access_token");
      alert("탈퇴가 완료되었습니다.\n함께 달리며 즐거웠습니다:)");
      window.location.reload();
    } else {
      alert("탈퇴하기를 취소하였습니다.");
      window.location.reload();
    }
  };

  return (
    <Wrapper style={{ heigth: 96, padding: "3%" }}>
      <LeftWrapper>
        <Link to="/">
          {darkMode ? <Logo src={Main_logo_dark} /> : <Logo src={Main_logo} />}
        </Link>
      </LeftWrapper>
      <RightWrapper>
        {/* 카테고리 링크 */}
        <StyledDivRow style={{ width: 540, justifyContent: "space-between" }}>
          <StyledLink to="/videolist">
            <Category>영상</Category>
          </StyledLink>
          <StyledLink to="/playlist">
            <Category>플레이리스트</Category>
          </StyledLink>
          <StyledLink to="/running">
            <Category>달리기</Category>
          </StyledLink>
          <StyledLink to="/">
            <Category>고객센터</Category>
          </StyledLink>
        </StyledDivRow>
        <Link to="/search">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ fontSize: "150%", color: "black", marginLeft: 50 }}
          />
        </Link>
        <Profile>
          {userProfileImg ? (
            <ProfileImg src={userProfileImg} />
          ) : (
            <ProfileImgDefault />
          )}
          <StyledBtn on>
            <FontAwesomeIcon
              icon={faCaretDown}
              style={{ fontSize: "150%" }}
              onClick={() => setCaretOpen(!caretOpen)}
            />
          </StyledBtn>
        </Profile>
        {caretOpen &&
          (userProfileImg ? (
            <ProfileUl>
              <Link to="/mypage">
                <ProfileList>마이페이지</ProfileList>
              </Link>
              <ProfileList>플레이리스트</ProfileList>
              <ProfileList>프로필 설정</ProfileList>
              <ProfileList onClick={onLogout}>로그아웃</ProfileList>
              <ProfileList onClick={onLeave}>탈퇴하기</ProfileList>
            </ProfileUl>
          ) : (
            <ProfileUl>
              <a href={KAKAO_AUTH_URL}>
                <ProfileList>로그인</ProfileList>
              </a>
            </ProfileUl>
          ))}
      </RightWrapper>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2%;
  padding-left: 2%;
  padding-right: 2%;
  margin: 0;
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Logo = styled.img`
  width: 241px;
  height: 56px;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1%;
`;

const Category = styled.span`
  font-family: EF_Diary;
  font-size: 25;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 21px;
`;

const ProfileImgDefault = styled.div`
  width: 41px;
  height: 41px;
  margin-right: 6px;
  border-radius: 50%;
  background-color: gray;
`;

const ProfileImg = styled.img`
  width: 41px;
  height: 41px;
  margin-right: 6px;
  border-radius: 50%;
`;

const ProfileUl = styled.ul`
  background-color: white;
  z-index: 10;
  position: fixed;
  top: 90px;
  right: 40px;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  border: 5px dashed black;
  border-radius: 30px;
`;

const ProfileList = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;
  color: ${light.colors.mainColor};
  font-size: 16px;
  font-weight: bold;
  align-self: flex-start;
  padding-right: 40px;
  margin: 12px 25px 12px 25px;
`;
