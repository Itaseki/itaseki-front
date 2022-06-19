import React, {useEffect} from "react";
import {Navigate} from "react-router-dom";
import axios from "axios";

const LoginRedirect = () => {

  //인가코드
  let code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    axios
        .get(`http://localhost:8080/oauth/kakao?code=${code}`)
        .then((res) => {
          console.log(res.data);
          const ACCESS_TOKEN = res.data.searchParams.get("access_token");
          localStorage.setItem("access_token", ACCESS_TOKEN);
          window.alert("환영합니다!");
          return <Navigate replace to="/" />
        })
        .catch((err) => {
          console.log("소셜 로그인 에러", err);
          window.alert("로그인에 실패하였습니다.");
          return <Navigate to="/login"/>
        })
  }, );

}

export default LoginRedirect;