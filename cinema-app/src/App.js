import Login from "./components/authorize/login/Login";
import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FilmPage from "./pages/FilmPage";
import EventBus from "./common/EventBus";
import Register from "./components/authorize/register/Register";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  const dispatch = useDispatch();

  const logOut = useCallback(() => {
    dispatch(logOut());
  }, [dispatch]);

  return (
    <Router>
      {}

      <div className="container mt-3">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/listfilm" element={<FilmPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
