import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = () => {
  let token = localStorage.getItem("token");
  
  if (!token) {
    token = sessionStorage.getItem("token");
  }

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;