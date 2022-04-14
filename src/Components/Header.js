import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";
import {
  faBars,
  faMagnifyingGlass,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

// assets
import Main_logo from "../Assets/Main_logo.png";
import Basic_profile from "../Assets/Basic_profile.png";

import StyledBtn from "../Style/StyledBtn";
import { Link } from "react-router-dom";

const Header = () => {
  const [caretOpen, setCaretOpen] = useState(false);

  return (
    <Wrapper>
      <LeftWrapper>
        <FontAwesomeIcon
          icon={faBars}
          style={{ fontSize: "150%", paddingRight: "5%", color: "9C9C9C" }}
        />
        <Logo src={Main_logo} />
      </LeftWrapper>
      <RightWrapper>
        {/* <NewWriting>
          <p
            style={{
              color: "#532A6B",
              backgroundColor: "#F3E1EC",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 5,
              width: 161,
              borderRadius: 50,
              fontWeight: "bold",
              margin: 0,
            }}
          >
            새 게시글 쓰기
          </p>
        </NewWriting> */}
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{ fontSize: "150%", color: "9C9C9C" }}
        />
        <Profile>
          <ProfileImg src={Basic_profile} />
          <StyledBtn on>
            <FontAwesomeIcon
              icon={faCaretDown}
              style={{ fontSize: "150%", color: "9C9C9C" }}
              onClick={() => setCaretOpen(!caretOpen)}
            />
          </StyledBtn>
        </Profile>
        {caretOpen ? (
          <ProfileUl>
            <Link to="/mypage">
              <ProfileList>마이페이지</ProfileList>
            </Link>
            <ProfileList>플레이리스트</ProfileList>
            <ProfileList>프로필 설정</ProfileList>
            <ProfileList>로그아웃</ProfileList>
          </ProfileUl>
        ) : (
          <></>
        )}
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
  // Header 아래 여백은 23px
  padding: 2%;
  padding-left: 2%;
  padding-right: 2%;
  margin: 0;
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Logo = styled.img`
  width: 185px;
  height: 60px;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1%;
`;

// const NewWriting = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

const Profile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 21px;
`;

const ProfileImg = styled.img`
  width: 41px;
  height: 41px;
  margin-right: 6px;
`;

const ProfileUl = styled.ul`
  background-color: #fafafa;
  z-index: 10;
  position: fixed;
  top: 90px;
  right: 40px;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

const ProfileList = styled.button`
  background-color: #fafafa;
  border: none;
  cursor: pointer;
  color: #532a6b;
  font-size: 16px;
  font-weight: bold;
  align-self: flex-start;
  padding-right: 40px;
  margin: 12px 25px 12px 25px;
`;
