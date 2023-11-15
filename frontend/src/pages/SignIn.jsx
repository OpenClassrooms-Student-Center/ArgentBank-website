// SignIN.jsx

import React, { useState } from 'react';
import { fetchUserData } from '../actions/UserActions';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Fonction pour gérer les changements dans les champs de saisie
  const handleChange =  (e) => {
    const { name, value } = e.target;
    // Mettez à jour le state avec les nouvelles valeurs
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('[SIGNIN]///////////////');
    console.log('[SIGNIN]POST');
    console.log(formData);
    console.log('[SIGNIN]///////////////');
    
    try {
        const apiResponse = await fetchUserData(formData);
        console.log('[SIGNIN]///////////////');
        console.log('[SIGNIN]GET');
        console.log('[SIGNIN]Données renvoyées par l\'API:', apiResponse);
        console.log('[SIGNIN]///////////////');
      } catch (error) {
        console.error('[SIGNIN]Erreur lors de la soumission du formulaire:', error);
      }
    };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon" />
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Email
              <input
                type="text"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button" type="submit">Sign In</button>
        </form>
      </section>
    </main>
  );
};

export default SignIn;
