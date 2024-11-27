import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Index from "../../pages/Index";
import Userlogin from "../../pages/Userlogin";
import User from "../../pages/User";
import PropTypes from "prop-types";
import { selectToken } from "../../reducer/UserSlice";

const Router = () => {
  const token = useSelector(selectToken);
  const ProtectedRoute = ({ element }) => {
    console.log("Token in ProtectedRoute:", token);
    return token ? element : <Navigate to="/user" replace={true} />;
  };

  ProtectedRoute.propTypes = {
    element: PropTypes.element.isRequired,
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Userlogin />} />
        <Route path="/user" element={<ProtectedRoute element={<User />} />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
