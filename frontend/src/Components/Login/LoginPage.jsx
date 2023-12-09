import React, { useState } from 'react';
import '../../Styles/Components/LoginPage.css';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setIsAuthenticated(true); // Connexion réussie
        localStorage.setItem('token', data.token); // Sauvegarde du token dans le stockage local
        navigate(`/profile?id=${data.userId}`); // Redirection vers la page de profil
      } else {
        alert(data.message); // Affiche un message d'erreur
        setIsAuthenticated(false); // Connexion échouée
      }
    } catch (error) {
        alert('Une erreur est survenue lors de la connexion');
        setIsAuthenticated(false); // Gestion des erreurs de connexion
    }
  };

  // Affichage de l'état d'authentification (pour débogage ou affichage utilisateur)
  console.log('Is Authenticated:', isAuthenticated);

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
