import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
// Start
import Login from "./Pages/Start/Login";
import SignUp from "./Pages/Start/SignUp";
// Board
import GIFBoard from "./Pages/Board/GIFBoard";
import Community from "./Pages/Board/Community";
import CommunityDetail from "./Pages/Board/CommunityDetail";
// Member
import MyPage from "./Pages/Member/MyPage";
import AddNewVideo from "./Pages/Video/AddNewVideo";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      {/* Start */}
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      {/* Board */}
      <Route path="/boards" element={<GIFBoard />} />
      <Route path="/community" element={<Community />} />
      <Route path="/community/:id" element={<CommunityDetail />} />
      {/* Member */}
      <Route path="/mypage" element={<MyPage />} />
      {/* Video */}
      <Route path="/addvideo" element={<AddNewVideo />} />
    </Routes>
  );
};

export default App;
