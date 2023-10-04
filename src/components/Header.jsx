import React from "react";
import Logo from "../img/argentBankLogo.png"
import UserIcon from "../img/circle-user-solid.svg"
import LogIcon from "../img/right-from-bracket-solid.svg"
import styles from "../style/main.css"

const Header = () => {
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
                <a href="/" className="mainNavItem">
                    <i class="fa fa-user-circle"></i>
                    <span className="">Tony</span>
                </a>
                <a href="/signin" className="mainNavItem">
                    <i class="fa fa-sign-out"></i>
                    <span className="">Sign Out</span>
                </a>
            </div>
        </div>
    )
}
export default Header