import React, {useCallback} from 'react';
import kakaoImg from "../../Assets/kakao_login_large_wide.png";
import axios from "axios";
import {Header, KakaoLoginBtn} from "../../Style/Login";

const Login = () => {

  const client_id = "53ab9d9beaf347ecc3d5779342ef3562";
  const redirect_uri = "http://localhost:3000/oauth/kakao";

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`;

  return (
   <div id="login-container">
     <Header>Login</Header>
     <KakaoLoginBtn href={KAKAO_AUTH_URL}>  {/*Link로 변경?*/}
         <img src={kakaoImg}/>
     </KakaoLoginBtn>
   </div>
  )
}

export default Login;