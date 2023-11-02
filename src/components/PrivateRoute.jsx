import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";


//On vérifie si dans le state il y a un token.
// si oui, on peut naviguer vers la page profile car user est authentifié
//sinon on le renvoi sur page login pour s'authentifier
const PrivateRoute = () => {
  const { token } = useSelector((store) => store.user);
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;