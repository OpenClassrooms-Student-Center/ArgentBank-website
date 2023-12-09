import React, { useState } from 'react';
import '../../Styles/Components/Body.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLogIn } from '../redux/reducers/userAuthSlice';

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
      console.log(data); // Add this line to check the response
        
      if (response.ok) {
        dispatch(setLogIn({ token: data.token, userId: data.userId }));
        navigate(`/profile/${data.userId}`);
      }
      
       else {
        alert(data.message); // Display error message
      }
    } catch (error) {
        alert('An error occurred during login');
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
}

export default LoginPage;
