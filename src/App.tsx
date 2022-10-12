import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";

import "./App.scss";
import StoryDetailPage from "./pages/DetailPage";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/:storyId" element={<StoryDetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
