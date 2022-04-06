import React from 'react';
import {Routes, Route} from "react-router-dom";
import Main from "./Pages/Main";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Community from "./Pages/Community";
import LoginRedirect from "./Pages/LoginRedirect";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Main/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/community" element={<Community/>} />
      <Route path="/oauth/redirect" element={<LoginRedirect/>} />
    </Routes>
  );
}

export default App;
