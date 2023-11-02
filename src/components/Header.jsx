import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from 'react'
import Logo from "../img/argentBankLogo.png"
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../Store/features/userSlice";



const Header = () => {

    const { firstName, username } = useSelector((store) => store.user);
    const dispatch = useDispatch();
    console.log(username)


    return (
        <div className="mainNav">
            {/* logo a gauche */}
            <a href="/" className="mainNavLogo">
                <img
                src={Logo}
                alt="Argent Bank Logo"
                className="mainNavLogoImage"/>
                <h1 className="srOnly">Argent Bank</h1>
            </a>
            {/* liens à droite */}
            <div className="nav">
            {!firstName ? (
                <div>
                    <Link className="mainNavItem" to="/login">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </Link>
                </div>
            ) : (
                <div>
                    <Link to="/profile" className="mainNavItem">
                        <i className="fa fa-user-circle"></i>
                        {!username ? firstName : username }
                    </Link>
                    <Link
                        to="/"
                        className="mainNavItem"
                        onClick={() => dispatch(userLogout())}>
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                    </Link>
                </div>)}
            </div>
        </div>
    )
}
export default Header