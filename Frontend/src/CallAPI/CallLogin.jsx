import { API } from "./API.jsx";
import CallUserInfo from "./CallUserInfo.jsx";

export async function CallLogin(
  username,
  password,
  setIdToken,
  setUserInfo,
  setResponseCode
) {
  const urlLogin = `${API}/login`;

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
      try {
        setResponseCode(data.status);
        const token = data.body.token;
        setIdToken(token);
        CallUserInfo(token, setUserInfo);
      } catch (error) {
        setResponseCode(data.status);
      }
    });
}

export default CallLogin;
