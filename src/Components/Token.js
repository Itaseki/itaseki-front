import React from "react";

const Token = () => {   // TODO 토큰 처리 방법 변경

  return localStorage.getItem('access_token');

}

export default Token;