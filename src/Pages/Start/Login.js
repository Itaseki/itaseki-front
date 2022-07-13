import React, { useCallback } from 'react';
import kakaoImg from "../../Assets/kakao_login_large_wide.png";
import axios from "axios";
import { Header, KakaoLoginBtn } from "../../Style/Login";

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