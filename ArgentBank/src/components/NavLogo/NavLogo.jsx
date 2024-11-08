import { NavLink } from "react-router-dom";
import './NavLogo.css';

const NavLogo = () => {
    return (
        <div>
            <NavLink className="main-nav-logo" to="/">
                <img
                    className="main-nav-logo-image"
                    src="./img/argentBankLogo.png"
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
        </div>
    );
};

export default NavLogo;