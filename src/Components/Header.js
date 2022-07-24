import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import preURL from "../preURL/preURL";
import Token from "./Token";
import styled from "styled-components";
import {
  faMagnifyingGlass,
  faCaretDown,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StyledBtn from "../Style/StyledBtn";
import { StyledDivColumn } from "../Style/StyledDiv";
import {light} from "../Style/Color";
// assets
import Menu_bar from "../Assets/Menu_bar.png";
import Main_logo from "../Assets/Main_logo.png";
import Main_logo_dark from "../Assets/Main_logo_dark.png";
import Basic_profile from "../Assets/Basic_profile.png";
import Menu_Home from "../Assets/Menu_Home.png";

const client_id = process.env.REACT_APP_KAKAO_REST_API_KEY;
const redirect_uri = process.env.REACT_APP_KAKAO_REDIRECT_URI;

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`;


const Header = ({ darkMode }) => {
  const token = Token();

  const [menuOpen, setMenuOpen] = useState(false);
  const [caretOpen, setCaretOpen] = useState(false);
  const [userId, setUserId] = useState(0);
  const [userProfileImg, setUserProfileImg] = useState("data:image/jpeg;base64,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");

  // 사용자 프로필 이미지 받아오기
  useEffect(() => {
    axios
        .get(preURL.preURL + '/main/user',{
          headers: {
            'itasekki': token
          }
        })
        .then((res) => {
          console.log("👍헤더 사용자 프로필 이미지 가져오기 성공 ", res);
          setUserId(res.data['id']);
          setUserProfileImg(res.data['profileUrl']);
        })
        .catch((err) => {
          console.log("🧨헤더 사용자 프로필 이미지 가져오기 실패", err);
        })
  },[]);

  // 로그아웃
  const onLogout = () => {
    let logout = window.confirm("로그아웃 하시겠습니까?");
    if(logout){
      if(!token) {
        alert("사용자가 없습니다.");
        return
      }
      localStorage.removeItem("access_token");
      alert("로그아웃 되었습니다.");
      window.location.reload();
    }
  };


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
          {userProfileImg
              ? <ProfileImg src={userProfileImg} />
              : <ProfileImgDefault />
          }
          <StyledBtn on>
            <FontAwesomeIcon
              icon={faCaretDown}
              style={{ fontSize: "150%", color: "9C9C9C" }}
              onClick={() => setCaretOpen(!caretOpen)}
            />
          </StyledBtn>
        </Profile>
        {caretOpen ? (
            userProfileImg ? (
                <ProfileUl>
                  <Link to="/mypage">
                    <ProfileList>마이페이지</ProfileList>
                  </Link>
                  <ProfileList>플레이리스트</ProfileList>
                  <ProfileList>프로필 설정</ProfileList>
                  <ProfileList onClick={onLogout}>로그아웃</ProfileList>
                </ProfileUl>
            ) : (
                <ProfileUl>
                  <a href={KAKAO_AUTH_URL}>
                    <ProfileList>로그인</ProfileList>
                  </a>
                </ProfileUl>
            )
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

const ProfileImgDefault = styled.div`
  width: 41px;
  height: 41px;
  margin-right: 6px;
  border-radius: 50%;
  background-color: gray;
`

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
