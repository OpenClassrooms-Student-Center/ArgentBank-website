import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [isConnected, setIsConnected] = useState(true);
    const Prenom = "Prenom";

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
                    {isConnected ? (
                        <>
                            <NavLink className="header-nav-item header-nav-profile" to="Profile">
                            <i className="fa fa-user-circle header-nav-signin-logo" />
                                {Prenom}
                            </NavLink>
                            <div className="header-nav-item header-nav-signout" onClick={() => setIsConnected(false)}>
                                <i className="fa-solid fa-right-from-bracket header-nav-signout-logo" />
                                Sign Out
                            </div>
                        </>
                    ) : (
                        <NavLink className="header-nav-item" to="SignIn">
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
