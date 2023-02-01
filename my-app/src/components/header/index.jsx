import { Link } from "react-router-dom";
import logo from "../../assets/img/argentBankLogo.png";
import Sing from "../sing";
import "./style.css";
 
const Header = () => {
  return (
    <nav className="main-nav">

      <Link className="main-nav-logo"to="/">
        <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo"></img>
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <Sing/>
    </nav>
  );
};

export default Header;