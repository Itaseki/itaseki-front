import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import Login from "./Pages/Start/Login";
import SignUp from "./Pages/Start/SignUp";
import GIFBoard from "./Pages/Board/GIFBoard";
import Community from "./Pages/Board/Community";
import CommunityDetail from "./Pages/Board/CommunityDetail";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/boards" element={<GIFBoard />} />
      <Route path="/community" element={<Community />} />
      <Route path="/community/:id" element={<CommunityDetail />} />
    </Routes>
  );
};

export default App;
