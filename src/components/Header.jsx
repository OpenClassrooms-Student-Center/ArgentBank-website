import React from "react";
import Logo from "../img/argentBankLogo.png"
import UserIcon from "../img/circle-user-solid.svg"
import LogIcon from "../img/right-from-bracket-solid.svg"
import styles from "../style/main.css"

const Header = () => {

    const [connection,setConnection] = React.useState(false)

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
                {connection === true ? <a href="/" className="mainNavItem">
                    <i className="fa fa-user-circle"></i>
                    <span className="">Tony</span>
                </a> : "" }
                {connection === true ? <a href="/signin" className="mainNavItem">
                    <i className="fa fa-sign-out"></i>
                    <span className="">Sign Out</span>
                </a> : <a href="/signin" className="mainNavItem">
                    <i className="fa fa-sign-out"></i>
                    <span className="">Sign In</span>
                </a>}
            </div>
        </div>
    )
}
export default Header