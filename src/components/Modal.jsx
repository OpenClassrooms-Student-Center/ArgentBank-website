import React from "react";
import styles from "../style/main.css"
import { useNavigate } from "react-router-dom";
import { loginUser } from '../actions/user.action';
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react'; 



function Modal(){
  const navigate= useNavigate()
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSignIn = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password, navigate));
  };

    return(
      <div className="">
        <main className="main bg-dark">
        <section className="signInContent">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSignIn}>
          <div className="inputWrapper">
            <label htmlFor="email">Username</label>
            <input type="text" id="email" onChange={(e) => setEmail(e.target.value)} required/>
            
          </div>
          <div className="inputWrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} required/>
            
          </div>
          <div className="inputRemember">
            <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
              >Remember me</label>
            
          </div>
          
           <button type="submit" className="signInButton">Sign In</button>
          
        </form>
      </section>
      </main>
      </div>
    )
}
export default Modal