import React from "react";
import {Navigate, Route} from "react-router-dom";

const LoginRedirect = () => {

  const jsonLocalStorage = {
    setItem: (key, value) => {
      localStorage.setItem(key, JSON.stringify(value));
    },
    getItem: (key) => {
      return JSON.parse(localStorage.getItem(key));
    },
  };

  const params = new URLSearchParams(window.location.search);
  let token = params.get("token");
  console.log("token: ", token);

  if (token) {
    jsonLocalStorage.setItem('Authorization', token);
  }

  return <Navigate replace to="/" />

}

export default LoginRedirect;