import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import React, { useState, useEffect } from "react";

import { Login } from "./pages/login/login";
import Board from "./components/board/board";
import { LoginProvider } from "./components/loginContext/loginContext";
import Dashboard from "./pages/dashboard/dashboard";
import { ModalProvider } from "./components/modal/modalContext";
import Profile from "./pages/profile/profile";
function App() {
  useEffect(() => {
    if (document.documentElement.classList.add("dark")) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, []);
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <LoginProvider>
              <ModalProvider>
                <Login />
              </ModalProvider>
            </LoginProvider>
          }
        />
        <Route path="/" element={<Board />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
