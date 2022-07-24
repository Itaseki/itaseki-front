import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
// Start
import Login from "./Pages/Start/Login";
import LoginRedirect from "./Pages/Start/LoginRedirect";
// Board
import GIFBoard from "./Pages/Board/GIFBoard";
import GIFBoardDetail from "./Pages/Board/GIFBoardDetail";
import Community from "./Pages/Board/Community";
import CommunityDetail from "./Pages/Board/CommunityDetail";
// Run
import Reservation from "./Pages/Run/Reservation";
import Running from "./Pages/Run/Running";
// Member
import MyPage from "./Pages/Member/MyPage";
// Video
import AddNewVideo from "./Pages/Video/AddNewVideo";
import AllVideo from "./Pages/Video/AllVideo";
import VideoDetail from "./Pages/Video/VideoDetail";
// Playlist
import AllPlaylist from "./Pages/Playlist/AllPlaylist";
import PlaylistDetail from "./Pages/Playlist/PlaylistDetail";
import SubscribedPly from "./Pages/Playlist/SubscribedPly";
import NewBoard from "./Pages/Board/NewBoard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      {/* Start */}
      <Route path="/login" element={<Login />} />
      <Route path="/oauth/kakao" element={<LoginRedirect />} />
      {/* Board */}
      <Route path="/boards" element={<GIFBoard />} />
      <Route path="/newboard" element={<NewBoard />} />
      <Route path="/boards/:id" element={<GIFBoardDetail />} />
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
      {/* Playlist */}
      <Route path="/playlist" element={<AllPlaylist />} />
      <Route path="/playlist/:id" element={<PlaylistDetail />} />
      <Route path="/playlist/subscribe" element={<SubscribedPly />} />
    </Routes>
  );
};

export default App;
