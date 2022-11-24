import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CountryPage from "./pages/CountryPage";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";

import "./App.scss";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/countries" element={<CountryPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
