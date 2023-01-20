import React from "react";

const Token = () => {

  return sessionStorage.getItem('access-token');

}

export default Token;