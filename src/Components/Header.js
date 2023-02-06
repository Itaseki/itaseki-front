import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { preURL } from "../preURL/preURL";
import { UserContext } from "../_contextAPI/UserContext";
// Component
import Token from "./Token";
// Style
import styled from "styled-components";
import "../Style/Font.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import StyledBtn from "../Style/StyledBtn";
import { StyledDivRow } from "../Style/StyledDiv";
import { StyledLink } from "../Style/StyledLink";
import { light } from "../Style/Color";
// Assets
import Main_logo from "../Assets/Main_logo.png";
import Main_logo_dark from "../Assets/Main_logo_dark.png";
import User_default_img from "../Assets/User_default_img.png";

// 카카오 소셜 로그인
const client_id = process.env.REACT_APP_KAKAO_REST_API_KEY;
const redirect_uri = process.env.REACT_APP_KAKAO_REDIRECT_URI;
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`;

const Header = ({ darkMode }) => {
  const navigate = useNavigate();
  const token = Token();

  const [user, setUser] = useContext(UserContext);
  const [caretOpen, setCaretOpen] = useState(false);

  // 유저 정보 확인
  // useEffect(() => {
  //   console.log("user: ", user);
  // },[user]);

  // 로그아웃
  const onLogout = () => {
    let logout = window.confirm("로그아웃 하시겠습니까?");
    if (logout) {
      axios
        .patch(preURL + `/user/${user.id}/edit`, [], {
          headers: {
            ITTASEKKI: token,
          },
        })
        .then((res) => {
          console.log("👍로그아웃 성공", res);
          sessionStorage.removeItem("access-token");
          window.location.replace("/");
          alert("로그아웃 되었습니다.");
        })
        .catch((err) => {
          console.log("🧨로그아웃 실패", err);
          alert("로그아웃 실패");
        });
    }
  };

  return (
    <Wrapper>
      <LeftWrapper>
        <Link to="/">
          {darkMode ? <Logo src={Main_logo_dark} /> : <Logo src={Main_logo} />}
        </Link>
      </LeftWrapper>
      <RightWrapper>
        {/* 카테고리 링크 */}
        <StyledDivRow style={{ width: 540, justifyContent: "space-between" }}>
          <StyledLink to="/video">
            <Category color="#D2C195">영상</Category>
          </StyledLink>
          <StyledLink to="/playlist">
            <Category color="#9F8BAC">플레이리스트</Category>
          </StyledLink>
          <StyledLink to="/reservation">
            <Category color="#D8969A">달리기</Category>
          </StyledLink>
          <StyledLink to="/center">
            <Category color="#8086BF">고객센터</Category>
          </StyledLink>
        </StyledDivRow>
        <Link to="/search">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ fontSize: "150%", color: "black", marginLeft: 50 }}
          />
        </Link>
        <Profile>
          {token ? (
            <>
              <ProfileImg
                src={user.profileUrl ? user.profileUrl : User_default_img}
              />
              <StyledBtn>
                <FontAwesomeIcon
                  icon={faCaretDown}
                  style={{ fontSize: "150%", color: "9C9C9C" }}
                  onClick={() => setCaretOpen(!caretOpen)}
                />
              </StyledBtn>
            </>
          ) : (
            <a href={KAKAO_AUTH_URL}>
              <LoginBtn>로그인</LoginBtn>
            </a>
          )}
        </Profile>
        {caretOpen ? (
          <ProfileUl>
            <ProfileList onClick={() => navigate("/mypage")}>
              마이페이지
            </ProfileList>
            <ProfileList onClick={() => navigate("/mypage/savedPly")}>
              저장 플레이리스트
            </ProfileList>
            <ProfileList onClick={onLogout}>로그아웃</ProfileList>
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
  padding: 2% 3% 2% 3%;
  margin: 0;
  height: 6%;
  width: 94%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
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
  font-size: 25px;
  :hover {
    color: ${(props) => props.color};
  }
`;

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
  border-radius: 50%;
`;

const ProfileUl = styled.ul`
  box-sizing: border-box;

  position: fixed;
  top: 100px; // TODO 대강
  right: 40px;

  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 12.5px 25px;
  z-index: 10;

  background: ${light.colors.backgroundColor};
  border: 1px solid #000000;
  box-shadow: 5px -5px 0px #000000;
  border-radius: 30px;
`;

const LoginBtn = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: none;
  font-family: EF_Diary;
  font-size: 25px;
  cursor: pointer;
`;

const ProfileList = styled(StyledBtn)`
  width: 140px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "EF_Diary";
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.02em;

  margin: 12.5px 0;
  padding: 0.5px;
  border: none;

  cursor: pointer;

  :hover {
    box-sizing: border-box;

    background: rgba(160, 160, 160, 0.5);
    border: 1px solid #000000;
    box-shadow: 3px 3px 0px #94928e;

    color: #ffffff;
  }
`;
