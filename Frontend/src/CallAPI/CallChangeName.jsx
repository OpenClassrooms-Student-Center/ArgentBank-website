import { API } from "./API.jsx";

export async function CallChangeName(userName, token) {
  const urlProfile = `${API}/profile`;
  return fetch(urlProfile, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      userName: userName,
    }),
  }).then((response) => response.json());
}

export default CallChangeName;
