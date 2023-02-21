import { Navigate } from "react-router-dom";
import React from "react";


const Protect = ({ user, children }) => {
  if (user) {
    return <Navigate to="/profile" />;
  }

  return children;
};
export default Protect;
