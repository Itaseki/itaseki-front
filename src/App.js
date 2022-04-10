import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import GIFBoard from "./Pages/GIFBoard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/boards" element={<GIFBoard />} />
    </Routes>
  );
};

export default App;
