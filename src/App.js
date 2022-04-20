import React from 'react';
import {Routes, Route} from "react-router-dom";
import Main from "./Pages/Main";
import Login from "./Pages/Start/Login";
import SignUp from "./Pages/Start/SignUp";
import Community from "./Pages/Board/Community";
import LoginRedirect from "./Pages/Start/LoginRedirect";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Main/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/community" element={<Community/>} />
      <Route path="/oauth/kakao" element={<LoginRedirect/>} />
    </Routes>
  );
}

export default App;
