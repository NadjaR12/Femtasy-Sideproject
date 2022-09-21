import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
