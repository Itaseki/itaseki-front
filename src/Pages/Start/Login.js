import React  from 'react';
import kakaoImg from "../../Assets/kakao_login_large_wide.png";
import styled from "styled-components";

const Login = () => {

  const client_id = process.env.REACT_APP_KAKAO_REST_API_KEY;
  const redirect_uri = process.env.REACT_APP_KAKAO_REDIRECT_URI;

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`;

  return (
    <div id="login-container">
      <Header>Login</Header>
      <KakaoLoginBtn href={KAKAO_AUTH_URL}>  {/*Link로 변경?*/}
        <img src={kakaoImg} />
      </KakaoLoginBtn>
    </div>
  )
}

export default Login;

const Header = styled.header`
  text-align: center;
  font-weight: 700;
  font-size: 48px;
  letter-spacing: -0.75px;
  margin-top: 50px;
  margin-bottom: 50px;
`

const KakaoLoginBtn = styled.a`
  display: block;
  width: 600px;
  margin: 100px auto;
  &:hover{
    cursor: pointer;
  }
`