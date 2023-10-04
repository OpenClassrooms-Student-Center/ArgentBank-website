import React from "react";
import styles from "../style/main.css"
import Button from "./Button";

const Modal = () => {
    return(
      <body className="">
        <main class="main bg-dark">
        <section className="signInContent">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className="inputWrapper">
            <label for="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="inputWrapper">
            <label for="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="inputRemember">
            <input type="checkbox" id="remember-me" /><label for="remember-me"
              >Remember me</label>
            
          </div>
          
           <button className="signInButton">Sign In</button>
          
        </form>
      </section>
      </main>
      </body>
    )
}
export default Modal