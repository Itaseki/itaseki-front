import React from "react";
import { Routes, Route } from "react-router-dom";
import Store from "./_contextAPI/Store";
import Main from "./Pages/Main";
// Start
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
import MySavedPly from "./Pages/Member/MySavedPly";
// Video
import AddNewVideo from "./Pages/Video/AddNewVideo";
import AllVideo from "./Pages/Video/AllVideo";
import VideoDetail from "./Pages/Video/VideoDetail";
// Playlist
import AllPlaylist from "./Pages/Playlist/AllPlaylist";
import PlaylistDetail from "./Pages/Playlist/PlaylistDetail";
import SubscribedPly from "./Pages/Playlist/SubscribedPly";
import NewBoard from "./Pages/Board/NewBoard";
import Search from "./Pages/Search/Search";

import Center from "./Pages/Member/Center";

const App = () => {
  return (
    <Store>
      <Routes basename={process.env.PUBLIC_URL}>
        <Route path="/" element={<Main />} />
        {/* Start */}
        <Route path="/oauth/kakao" element={<LoginRedirect />} />
        {/* Run */}
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/running" element={<Running />} />
        {/* Member */}
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypage/savedPly" element={<MySavedPly />} />
        <Route path="/center" element={<Center />} />
        {/* Search */}
        <Route path="/search" element={<Search />} />
        {/* Video */}
        <Route path="/addvideo" element={<AddNewVideo />} />
        <Route path="/video" element={<AllVideo />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        {/* Playlist */}
        <Route path="/playlist" element={<AllPlaylist />} />
        <Route path="/playlist/:id" element={<PlaylistDetail />} />
        <Route path="/playlist/subscribe" element={<SubscribedPly />} />
        {/* 없어진 게시판 */}
        {/* <Route path="/boards" element={<GIFBoard />} />
          <Route path="/newboard" element={<NewBoard />} />
          <Route path="/boards/:id" element={<GIFBoardDetail />} />
          <Route path="/community" element={<Community />} />
          <Route path="/community/:id" element={<CommunityDetail />} /> */}
      </Routes>
    </Store>
  );
};

export default App;
