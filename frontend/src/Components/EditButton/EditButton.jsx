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
  const [newFirstName, setNewFirstName] = useState("");
const [newLastName, setNewLastName] = useState("");

  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (!newFirstName.trim() || !newLastName.trim()) {
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
      body: JSON.stringify({ firstName: newFirstName, lastName: newLastName }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to update username.");
      }
      return response.json();
    })
    .then(data => {
      dispatch(setEditProfile({ firstName: newFirstName, lastName: newLastName }));
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
          value={newFirstName}
          onChange={(e) => setNewFirstName(e.target.value)}
          placeholder="Enter new first name"
        />
        <input
          type="text"
          value={newLastName}
          onChange={(e) => setNewLastName(e.target.value)}
          placeholder="Enter new last name"
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
