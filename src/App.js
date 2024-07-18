import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


import Footer from "../src/Components/Footer/footer";
import Header from "../src/Components/Header/header";

import Home from "../src/Pages/Home/home";
import Login from "../src/Pages/Login/login";
import Profile from "../src/Pages/Profile/profile";
import Error from "../src/Pages/Error/error";

import "../src/css/main.css";

export default function App() {
  const isConnected = useSelector((state) => state.auth.isConnected);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route
          path="profile"
          element={isConnected ? <Profile /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}
