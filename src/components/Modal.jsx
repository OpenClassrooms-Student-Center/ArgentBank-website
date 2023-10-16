import React,{useState} from "react";

import Error from '../components/Error'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {loginUser} from '../Store/UserSlice'




const Modal= ()=>{
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {loading, error} = useSelector((state)=>state.user)

  const submitForm = (data) => {
    console.log(data)
  }

  const dispatch = useDispatch()
  const navigate = useNavigate

  const handleLoginEvent=(e)=>{
    e.preventDefault();
    let userCredentials={
      email, password
    }
    dispatch(loginUser(userCredentials)).then((result)=>{
      if(result.payload){
        setEmail('')
        setPassword('')
        navigate('/')
        sessionStorage.setItem("token", token)
      }
    })


  }

    return(
      <div className="">
        <main className="main bg-dark">
        <section className="signInContent">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleLoginEvent}>
          {error &&<Error>{error}</Error>}
          <div className="inputWrapper">
            <label htmlFor="email">Email</label>
            <input 
            type="text"
            id="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required/>
            
          </div>
          <div className="inputWrapper">
            <label htmlFor="password">Password</label>
            <input
            type="password"
            id="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required/>
            
          </div>
          <div className="inputRemember">
            <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
              >Remember me</label>
            
          </div>
          
           <button type="submit" className="signInButton" disabled={loading}>
            {loading ? 'Loading...' : 'Login'}
           </button>
           {error&&(
              <div role='alert' style={{ color: '#ffffff',padding:'1rem', textAlign: 'center', margin: '0.5rem 0', backgroundColor:"rgba(255, 0, 0, 0.4)"}}>
              {error}
            </div>
           )}
          
        </form>
      </section>
      </main>
      </div>
    )
}
export default Modal