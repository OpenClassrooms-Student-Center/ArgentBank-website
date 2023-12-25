import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEditProfile } from "../../redux/reducers/profileSlice";
import Button from "../Button/Button";
import "../../Styles/Components/EditButton.css";
import TextInput from "../TextInput/TextInput";

function EditButton({ onProfileUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newUserName, setNewUserName] = useState(""); // État pour le userName
  const [error, setError] = useState("");

  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (!newUserName.trim()) {
      setError("Username cannot be empty.");
      return;
    }

    // Appel API pour mise à jour
    fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ userName: newUserName }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to update username.");
      }
      return response.json();
    })
    .then(data => {
      dispatch(setEditProfile({ userName: newUserName }));
      onProfileUpdate({ userName: newUserName }); // Mise à jour du profil
      setIsEditing(false);
      setError("");
    })
    .catch(error => {
      console.error("Error:", error);
      setError("Error updating username.");
    });
  };

  return (
    <div className="edit-button-container">
      {isEditing ? (
        <>
          <TextInput
            type="text"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
            placeholder="Enter new username"
            label="Username"
            id="user-name"
          />
          {error && <p className="error-message">{error}</p>}
          <Button className="edit-button" onClick={handleEdit}>Save</Button>
        </>
      ) : (
        <Button className="edit-button" onClick={() => setIsEditing(true)}>Edit Username</Button>
      )}
    </div>
  );
}

export default EditButton;
