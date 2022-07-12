import React, {useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import preURL from "../../preURL/preURL";

const LoginRedirect = () => {

  const navigate = useNavigate();

  //인가코드
  let code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    axios
        .get(`http://localhost:8080/oauth/kakao?code=${code}`)
        .then((res) => {
          console.log(res.data);
          const ACCESS_TOKEN = res.data.searchParams.get("ITASEKKI");
          localStorage.setItem("access_token", ACCESS_TOKEN);
          window.alert("환영합니다!");
          navigate('/');
        })
        .catch((err) => {
          console.log("소셜 로그인 에러", err);
          window.alert("로그인에 실패하였습니다.");
          navigate('/login');
        })
  }, );

}

export default LoginRedirect;