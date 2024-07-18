import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import argentBankLogo from '../../img/argentBankLogo.png'
import { useDispatch, useSelector } from 'react-redux'
import { getAuthConnected, logout } from '../../Action/authslice'
import { emptyUserData, getUserData } from '../../Action/User/userslice'

export default function Header() {
    const dispatch = useDispatch()
    const firstName = useSelector(getUserData).firstName
    const connected = useSelector(getAuthConnected)

    const handleLogOut = () => {
        dispatch(logout())
        dispatch(emptyUserData())
    }

    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img
                    className="main-nav-logo-image"
                    src={argentBankLogo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                {!connected && ( 
                    <NavLink className="main-nav-item" to="/login">
                        <i className="fa fa-user-circle" aria-hidden="true"></i>
                        Sign In
                    </NavLink>
                )}
                 {connected && (
                    <>
                        <NavLink className="main-nav-item" to="/profile">
                            <i className="fa fa-user-circle"></i>
                            {/* {firstName} */}
                        </NavLink>
                        <NavLink
                            className="main-nav-item"
                            to="/"
                            onClick={handleLogOut}
                        >
                            <i
                                className="fa fa-sign-out"
                                aria-hidden="true"
                            ></i>
                            Sign out
                        </NavLink>
                    </>
                )}
            </div>
        </nav>
    )
}

