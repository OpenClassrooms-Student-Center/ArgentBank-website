import { API } from "./API.jsx";

export function CallUserInfo(token, setUserInfo, navigate) {
  const urlProfile = `${API}/profile`;
  fetch(`${urlProfile}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        localStorage.removeItem("idToken");
        localStorage.removeItem("userInfo");
        navigate("/");
        throw new Error("Token error");
      }
      return response.json();
    })
    .then((data) => {
      setUserInfo([data.body]);
    })
    .catch((error) => console.error("Error:", error));
}
export default CallUserInfo;
