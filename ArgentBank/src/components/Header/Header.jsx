import argentBankLogo from "./../../assets/img/argentBankLogo.png";
import { useSelector } from "react-redux";

function Header() {
  const userinfo = useSelector((state) => state.logUser);

  console.log(userinfo);

  return (
    <header id="header">
      <nav className="main-nav">
        <a className="main-nav-logo" href="./">
          <img
            className="main-nav-logo-image"
            src={argentBankLogo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </a>
        {userinfo ? (
          <div>
            <a className="main-nav-item" href="./sign-in">
              <i className="fa fa-user-circle"></i>
              en ligne
            </a>
          </div>
        ) : (
          <div>
            <a className="main-nav-item" href="./sign-in">
              <i className="fa fa-user-circle"></i>
              Sign In
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
