import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import PageGames from "../pages/games.tsx";
import PageMyProfile from "../pages/profile";
import PageUserProfile from "../pages/userProfile/index.tsx";
import PageHome from "../pages/feed.tsx/index.tsx";

const PrivateRouter: React.FC = () => {
  const navegate = useNavigate()
  const token = localStorage.getItem("token");

  if (!token) {
    navegate('/login');
  }

  return (
    <Routes>
      <Route path="/home" element={<PageHome />} />
      <Route path="/games" element={<PageGames />} />
      <Route path="/profile" element={<PageMyProfile />} />
      <Route path="/profile/:username" element={<PageUserProfile />} />
    </Routes>
  )
};

export default PrivateRouter;
