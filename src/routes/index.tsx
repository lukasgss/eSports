import React, { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/Player/LandingPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
