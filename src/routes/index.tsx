import React, { BrowserRouter, Routes, Route } from "react-router-dom";
import Campeonatos from "../pages/Player/Campeonatos";
import Comunicados from "../pages/Player/Comunicados";
import FaseInscricao from "../pages/Player/FaseInscricao";
import HomePlayer from "../pages/Player/Home";
import Inscricoes from "../pages/Player/Inscricoes";
import Portal from "../pages/Player/Portal";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portal />} />
        <Route path="/home" element={<HomePlayer />} />
        <Route path="/campeonatos" element={<Campeonatos />} />
        <Route path="/comunicados" element={<Comunicados />} />
        <Route path="/inscricoes" element={<Inscricoes />} />
        <Route path="/realizar-inscricoes" element={<FaseInscricao />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
