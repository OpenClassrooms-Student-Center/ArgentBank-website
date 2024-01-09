import { useSelector } from 'react-redux';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { selectCurrendToken } from './authSlice';


const RequireAuth = () => {

    const token = useSelector(selectCurrendToken);
    const location = useLocation();

    return (
        token ?
            <Outlet /> :
            <Navigate to='/signin' state={{ from: location }}  replace/>
    );
};

export default RequireAuth;