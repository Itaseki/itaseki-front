import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";
import {
  faMagnifyingGlass,
  faCaretDown,
  faClose,
} from "@fortawesome/free-solid-svg-icons";

// assets
import Menu_bar from "../Assets/Menu_bar.png";
import Main_logo from "../Assets/Main_logo.png";
import Main_logo_dark from "../Assets/Main_logo_dark.png";
import Basic_profile from "../Assets/Basic_profile.png";
import Menu_Home from "../Assets/Menu_Home.png";

import StyledBtn from "../Style/StyledBtn";
import { Link } from "react-router-dom";
import { StyledDivColumn } from "../Style/StyledDiv";

const Header = ({ darkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [caretOpen, setCaretOpen] = useState(false);

  return (
    <Wrapper>
      <LeftWrapper>
        <MenuBarBtn
          src={Menu_bar}
          alt="메뉴바버튼"
          onClick={() => setMenuOpen(true)}
        />
        <Link to="/">
          {darkMode ? <Logo src={Main_logo_dark} /> : <Logo src={Main_logo} />}
        </Link>
      </LeftWrapper>
      {menuOpen ? (
        <MenuWrapper>
          <StyledBtn onClick={() => setMenuOpen(false)}>
            <FontAwesomeIcon
              icon={faClose}
              style={{
                fontSize: "200%",
                marginTop: 30,
              }}
            />
          </StyledBtn>
          <Link to="/">
            <Logo src={Main_logo} style={{ width: 177, height: 70 }} />
          </Link>
          {/* 달리기 방(페이지)으로 이동 */}
          <Link to="/running">
            <StyledBtn
              style={{
                width: 157,
                height: 40,
                color: "white",
                fontSize: 14,
                fontWeight: "bold",
                backgroundColor: "#000000",
                border: 2,
                borderStyle: "dashed",
                borderRadius: 29,
              }}
            >
              입장하기
            </StyledBtn>
          </Link>
          <div
            style={{
              width: 277,
              height: 0,
              border: 4,
              borderStyle: "solid",
              borderRadius: 25,
            }}
          />
          <img src={Menu_Home} style={{ width: 170, height: 35 }} />
          {[
            { name: "영상 게시판", url: "/videolist" },
            { name: "잡담 게시판", url: "/community" },
            { name: "짤 게시판", url: "/boards" },
            { name: "플레이리스트 게시판", url: "/playlist" },
            { name: "마이페이지", url: "/mypage" },
            { name: "", url: "" },
            { name: "", url: "" },
          ].map((i, index) => {
            return (
              <Link to={i.url}>
                <StyledBtn
                  id={index}
                  style={{ fontSize: 20, fontWeight: "bold", color: "#505050" }}
                >
                  {i.name}
                </StyledBtn>
              </Link>
            );
          })}
        </MenuWrapper>
      ) : (
        <></>
      )}
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
  align-items: center;
`;

const MenuBarBtn = styled(StyledBtn)`
  width: 25px;
  height: 30px;
  background-image: url(${Menu_bar});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const Logo = styled.img`
  width: 185px;
  height: 60px;
`;

const MenuWrapper = styled(StyledDivColumn)`
  background-color: #ffffff;
  height: 100%;
  width: 381px;
  padding-bottom: 20%;
  position: fixed;
  top: 0px;
  left: 0px;
  justify-content: space-around;
  align-items: center;
  z-index: 10;
`;

const MenuList = styled(StyledBtn)`
  color: ${(props) => (props.onClick ? "#E35D12" : "#505050")};
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
