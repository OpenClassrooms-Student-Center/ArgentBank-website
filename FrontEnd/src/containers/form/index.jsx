import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import { body } from "../../features/userSlice";


const From = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorUser, setErrorUser] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  async function log(e) {
    e.preventDefault();
    //empty
    if (email.length === 0 || password.length === 0) {
      setError(true);
      function msgdelet() {
        setError(false);
      }
      setTimeout(msgdelet, 30000);
    }
    let item = { email, password };

    let result = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    if (result.status === 200) {
      localStorage.setItem("token", result.body.token);
      navigate("/profile");
      dispatch(
        login({
          user: item,
        })
      );

      let token = localStorage.getItem("token");
let requete = await fetch(
    "http://localhost:3001/api/v1/user/profile",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        accept: "application/json",
      }})
      requete = await requete.json();
     
      if (requete.status === 200) {
// console.log(requete.body.firstName)
// console.log(requete.body)
dispatch(
  body({
    body: requete.body
  })
); 
// requete()
      }
     

    } else {
      setErrorUser(true);
      setEmail("");
      setPassword("");
      function deletError() {
        setErrorUser(false);
      }
      setTimeout(deletError, 30000);
    }
  }

  return (
    <form>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="password"
        />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      {error ? (
        <p className="error">
          Error:Email and password cannot be null or empty
        </p>
      ) : (
        ""
      )}
      {!error && errorUser ? (
        <p className="error">Error in username or password</p>
      ) : (
        ""
      )}
      <button type="submit" className="sign-in-button" onClick={log}>
        Sign In
      </button>
    </form>
  );
};

export default From;
