import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from 'react-router-dom';
import { selectCurrentFirstname, resetUserState} from "../../features/User/userSlice.js";
import { logOut, selectCurrendToken } from '../../features/auth/authSlice.js'


    // Si token est present alors on est connecté
    // Si on est connecté alors afficher le prenom de l'utilisateur et le bouton de déconnexion
    // Si on clique sur le le bouton de deconnexion alors on est logOut et les données du user/ auth sont supprimées du store
    

const Header = () => {

    const token = useSelector(selectCurrendToken);
    

    const [isConnected, setIsConnected] = useState(true);

     const firstName = useSelector(selectCurrentFirstname);

     const dispatch = useDispatch();

     const handleLogout = () => {
            setIsConnected(false);
            dispatch(logOut());
            dispatch(resetUserState());
        }

    useEffect(() => {
        if (token) {
            setIsConnected(true);
        } else {
            setIsConnected(false);
        }}, [token]);
    
    return (
        <header>
            <nav className="header-nav">
                <NavLink to="/" className="header-nav-logo">
                    <img
                        className="header-nav-logo-image"
                        src="./argentBankLogo.png"
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </NavLink>
                <div className='header-list-container'>
                    {isConnected ? 
                    (
                        <>
                            <NavLink className="header-nav-item header-nav-profile" to="user">
                            <i className="fa fa-user-circle header-nav-signin-logo" />
                                {firstName}
                            </NavLink>
                            <div className="header-nav-item header-nav-signout" onClick={handleLogout}>
                                <i className="fa-solid fa-right-from-bracket header-nav-signout-logo" />
                                Sign Out
                            </div>
                        </>
                    )
                     : 
                    (
                        <NavLink className="header-nav-item" to="signin">
                            <i className="fa fa-user-circle header-nav-signin-logo" />
                            Sign In
                        </NavLink>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
