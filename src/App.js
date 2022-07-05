import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
// Start
import Login from "./Pages/Start/Login";
import SignUp from "./Pages/Start/SignUp";
// Board
import GIFBoard from "./Pages/Board/GIFBoard";
import GIFBoardDetail from "./Pages/Board/GIFBoardDetail";

import Community from "./Pages/Board/Community";
import CommunityDetail from "./Pages/Board/CommunityDetail";
// Run
import Reservation from "./Pages/Run/Reservation";
// Member
import MyPage from "./Pages/Member/MyPage";
// Video
import AddNewVideo from "./Pages/Video/AddNewVideo";
import AllVideo from "./Pages/Video/AllVideo";
import VideoDetail from "./Pages/Video/VideoDetail";
import Running from "./Pages/Run/Running";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      {/* Start */}
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      {/* Board */}
      <Route path="/boards" element={<GIFBoard />} />
      <Route path="/boards/:Id" element={<GIFBoardDetail />} />
      <Route path="/community" element={<Community />} />
      <Route path="/community/:id" element={<CommunityDetail />} />
      {/* Run */}
      <Route path="/reservation" element={<Reservation />} />
      <Route path="/running" element={<Running />} />
      {/* Member */}
      <Route path="/mypage" element={<MyPage />} />
      {/* Video */}
      <Route path="/addvideo" element={<AddNewVideo />} />
      <Route path="/videolist" element={<AllVideo />} />
      <Route path="/videolist/:id" element={<VideoDetail />} />
    </Routes>
  );
};

export default App;
