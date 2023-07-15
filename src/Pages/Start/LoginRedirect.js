import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import preURL from "../../preURL/preURL";

const LoginRedirect = () => {
  const navigate = useNavigate();

  //인가코드
  let code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    axios
      .get(preURL.preURL + `/oauth/kakao?accessCode=${code}`)
      .then((res) => {
        // console.log(res);
        window.sessionStorage.setItem("access-token", res.data);
        window.alert("환영합니다!");
        window.location.replace("/");
      })
      .catch((err) => {
        console.log("소셜 로그인 에러", err);
        window.alert("로그인에 실패하였습니다.");
        navigate("/");
      });
  });
};

export default LoginRedirect;
