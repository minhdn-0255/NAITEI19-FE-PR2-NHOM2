import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FilmPage from "./pages/FilmPage";
import FilmDetailPage from "./pages/FilmDetail"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/movie-list" element={<FilmPage />}></Route>
      <Route path="/detail" element={<FilmDetailPage />}></Route>
    </Routes>
  );
}

export default App;
