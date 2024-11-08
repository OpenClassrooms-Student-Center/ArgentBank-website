import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const location = useLocation();

  return isAuthenticated ? (<Outlet />) : (<Navigate to="/signin" state={{ from: location }} replace />);
};

export default ProtectedRoute;