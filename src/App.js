import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
// Start
import Login from "./Pages/Start/Login";
import SignUp from "./Pages/Start/SignUp";
// Board
import GIFBoard from "./Pages/Board/GIFBoard";
// Member
import MyPage from "./Pages/Member/MyPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      {/* Start */}
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      {/* Board */}
      <Route path="/boards" element={<GIFBoard />} />
      {/* Member */}
      <Route path="/mypage" element={<MyPage />} />
    </Routes>
  );
};

export default App;
