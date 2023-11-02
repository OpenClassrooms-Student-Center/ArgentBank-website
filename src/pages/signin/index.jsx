import React from "react";
import { useRef } from "react";
import useSignInLogic from "../../logics/useSignInLogic.js";

const SignIn = () =>{

  const { handleSubmit, errorMessage } = useSignInLogic();
  const errorRef = useRef(null);

    return(
        <main className="main bg-dark">
            <div className="">
        <main className="main bg-dark">
        <section className="signInContent">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="inputWrapper">
            <label htmlFor="email">Email</label>
            <input 
            type="email"
            id="email"
            required/>
            
          </div>
          <div className="inputWrapper">
            <label htmlFor="password">Password</label>
            <input
            type="password"
            id="password"
            required/>
            
          </div>
          <div className="inputRemember">
            <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
              >Remember me</label>           
          </div>
          
           <button type="submit" className="signInButton" >
            Sign In
           </button>

          <div className="error" ref={errorRef}> 
            {errorMessage}
          </div>
        </form>
      </section>
      </main>
      </div>
        </main>
    )
}

export default SignIn