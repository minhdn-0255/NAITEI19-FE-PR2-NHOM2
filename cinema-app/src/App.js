import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FilmPage from "./pages/FilmPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/listfilm" element={<FilmPage />}></Route>
    </Routes>
  );
}

export default App;
