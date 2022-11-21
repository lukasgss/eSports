import React, { BrowserRouter, Routes, Route } from "react-router-dom";
import Campeonatos from "../pages/Player/Campeonatos";
import Comunicados from "../pages/Player/Comunicados";
import HomePlayer from "../pages/Player/Home";
import LandingPage from "../pages/Player/LandingPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePlayer />} />
        <Route path="/campeonatos" element={<Campeonatos />} />
        <Route path="/comunicados" element={<Comunicados />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
