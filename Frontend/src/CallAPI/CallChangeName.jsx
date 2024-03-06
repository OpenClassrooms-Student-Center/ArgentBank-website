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
  })
    .then((response) => {
      if (!response.ok) {
        localStorage.removeItem("idToken");
        localStorage.removeItem("userInfo");
        throw new Error("CallChangeName Error");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

export default CallChangeName;
