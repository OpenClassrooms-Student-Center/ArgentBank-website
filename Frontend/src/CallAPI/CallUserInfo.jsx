import { API } from "./API.jsx";

export function CallUserInfo(token, setUserInfo) {
  const urlProfile = `${API}/profile`;
  fetch(`${urlProfile}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      setUserInfo([data.body]);
    })
    .catch((error) => console.error("Error:", error));
}
export default CallUserInfo;
