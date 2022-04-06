import React, {useCallback} from 'react';
import kakaoImg from "../constants/kakao_login_large_wide.png";
import axios from "axios";
import {Header, KakaoLoginBtn} from "../styles/Login";

const Login = () => {

  const signIn = useCallback(() => {
    axios.get('http://localhost:3050/oauth2/authorization/kakao?redirect_uri=http://localhost:3000/oauth/redirect')
        .then((res) => {
          // ?
          console.log(res.data);
        })
  },[])

  return (
   <div id="login-container">
     <Header>Login</Header>
     <KakaoLoginBtn onClick={signIn}>
       <img src={kakaoImg}/>
     </KakaoLoginBtn>
   </div>
  )
}

export default Login;