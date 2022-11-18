import React, { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePlayer from "../pages/Player/Home";
import LandingPage from "../pages/Player/LandingPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePlayer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
