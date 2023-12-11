// EditButton.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEditProfile } from "../../redux/reducers/profileSlice";
import Button from "../Button/Button";
import "../../Styles/Components/EditButton.css";

function EditButton() {
  const [isEditing, setIsEditing] = useState(false);
  const [newUserName, setNewUserName] = useState("");
  const [error, setError] = useState("");

  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (!newUserName.trim()) {
      setError("The username cannot be empty.");
      return;
    }

    // API call to update username
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
      dispatch(setEditProfile(data.userName));
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
          <input
            type="text"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
            placeholder="Enter new username"
          />
          {error && <p className="error-message">{error}</p>}
          <Button onClick={handleEdit}>Save</Button>
        </>
      ) : (
        <Button onClick={() => setIsEditing(true)}>Edit UserName</Button>
      )}
    </div>
  );
}

export default EditButton;
