import { useNavigate } from "react-router-dom";
import { getUserInfo } from "../../services";
import { useDispatch } from 'react-redux';
import { setProfil } from "../../reducers/profilSlice";
import { useEffect, useState } from 'react';
import logo from "../../asset/img/argentBankLogo.png";
import styles from './style/header.module.css';
import compareStorage from "../../middleware/middleware";


function Header(){
  const redirect = () => (navigate("/"));
  const navigate = useNavigate();
  const dispatch= useDispatch();
  const [userName, setUserName] = useState('');
  const token = compareStorage();

  const resetState = () => {
    dispatch(setProfil());
  }
  async function getDatas(){
    await getUserInfo().then(data => {
        setUserName(data.body?.userName); 
      },
      dispatch(setProfil({userName}))
    )};
  

  useEffect(() => {
    if(token !== null){
    getDatas();
    } 
  })

  if (token === null ){
    return(
    <header className={styles.header}>
        <nav className={styles.headerMainNav}>
        <a className={styles.headerMainNavItemLogo} href="./"> 
        <img
          className={styles.headerMainNavItemLogoImage}
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className={styles.srOnly}>Argent Bank</h1>
      </a>
      <div>
        <a className={styles.headerMainNavItem} href="./logIn">
          <i className="fa fa-user-circle"></i>
          Sign In
        </a>
      </div>
    </nav>
    </header>
    )

      }else {
        return (
            <header className={styles.header}>
                <nav className={styles.headerMainNav}>
                <a className={styles.headerMainNavItemLogo} href="./"> 
                <img
                  className={styles.headerMainNavItemLogoImage}
                  src={logo}
                  alt="Argent Bank Logo"
                />
                <h1 className={styles.srOnly}>Argent Bank</h1>
                </a>
                <div>
                  <a className={styles.headerMainNavItem} href="./user">
                  <i className="fa fa-user-circle"></i>
                    {`${userName}`}
                  </a>
                  <a className={styles.headerMainNavItem} href="./" onClick={(e) => {
                    e.preventDefault();
                    sessionStorage.clear();
                    localStorage.clear();
                    resetState();
                    redirect();
                    }}>
                  <i className="fa fa-sign-out"></i>
                    Sign Out
                  </a>
                </div>
              </nav>
            </header>
    )
  }
}

export default Header;