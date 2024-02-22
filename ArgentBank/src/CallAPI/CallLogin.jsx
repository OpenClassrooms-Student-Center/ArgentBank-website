import { API } from "./API.jsx";
// import { useDispatch } from "react-redux";
// import { logUser } from "./../redux.js";
// import { useEffect, useState } from "react";
export async function CallLogin(username, password, setIdToken, setUserInfo) {
  //   const dispatch = useDispatch();
  const urlLogin = `${API}/login`;
  const urlProfile = `${API}/profile`;
  //   const [idToken, setIdToken] = useState("");
  //   const [userInfo, setUserInfo] = useState([]);
  console.log(username, password);

  //   useEffect(() => {
  //     if (idToken && userInfo.length > 0) {
  //       console.log("idToken:", idToken);
  //       console.log("userInfo:", userInfo);
  //     }
  //   }, [idToken, userInfo]);

  fetch(`${urlLogin}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: username,
      password: password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(data.body.token);
      const token = data.body.token;
      setIdToken(token);
      //   dispatch(logUser({ token: token }));
      return fetch(`${urlProfile}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(data.body);
      setUserInfo([data.body]);
    })
    .catch((error) => console.error("Error:", error));
}

export default CallLogin;
