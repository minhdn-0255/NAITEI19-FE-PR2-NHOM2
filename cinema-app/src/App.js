import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FilmPage from "./pages/FilmPage";
import FilmDetailPage from "./pages/FilmDetail"
import TicketPage from "./pages/Ticket";
import TicketDetailPage from "./pages/TicketDetail";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/movie-list" element={<FilmPage />}></Route>
      <Route path="/detail" element={<FilmDetailPage />}></Route>
      <Route path="/event" element={<TicketPage />}></Route>
      <Route path="/event-detail" element={<TicketDetailPage />}></Route>
    </Routes>
  );
}

export default App;
