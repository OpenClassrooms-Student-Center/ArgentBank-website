// import { Link } from "react-router-dom";
import { useState } from "react";
import "./style.css";

const From = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function singin(e) {
    e.preventDefault();

    let item = { email, password };
    let result = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
      // body:item
    });
    result = await result.json();
    console.log(result.body.token);
    localStorage.setItem("token", result.body.token);
  }
  return (
    <form>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="password"
        />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button type="submit" className="sign-in-button" onClick={singin}>
        Sign In
      </button>
    </form>
  );
};

export default From;
