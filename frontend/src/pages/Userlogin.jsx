import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../reducer/UserSlice";
import { useLoginMutation } from "../components/api";
import Footer from "../components/Footer";
import Header from "../components/Header";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, { isLoading, isError, error }] = useLoginMutation();
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      const { email, password, rememberMe } = JSON.parse(storedData);
      setEmail(email);
      setPassword(password);
      setRememberMe(rememberMe);
    }
  }, []);
  useEffect(() => {
    if (rememberMe) {
      localStorage.setItem(
        "userData",
        JSON.stringify({ email, password, rememberMe })
      );
    } else {
      localStorage.removeItem("userData");
    }
  }, [email, password, rememberMe]);

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password });
      console.log("Réponse complète de l'API :", response.data);

      const { token, userName, firstName, lastName, userId } =
        response.data.body;
      dispatch(setUser({ userId, token, userName, firstName, lastName }));

      sessionStorage.setItem(
        "user",
        JSON.stringify({ userId, userName, firstName, lastName, token })
      );
      if (response.data.body && response.data.body.token) {
        window.sessionStorage.setItem("token", response.data.body.token);
        navigate("/user");
      }
    } catch (error) {
      console.error("Identifiant ou mots de passe incorrect"); // Handle login errors appropriately
      console.log(error);
    }
  };

  return (
    <>
      <Header
        connexion="main-nav-item display-flex "
        deconnexion="main-nav-item display-none"
      />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Connexion</h1>
          <form onSubmit={handleSignIn}>
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-remember">
              <input
                type="checkbox"
                id="remember-me"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember-me">Se souvenir de moi</label>
            </div>
            <button
              className="sign-in-button"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Chargement..." : "Connexion"}
            </button>
            {isError && (
              <p className="error-message">
                {error.message || "Identifiant ou mots de passe incorrect"}
              </p>
            )}
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default SignIn;
