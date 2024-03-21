import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { body } from "../../helpers/features/userSlice";
import { useDispatch } from "react-redux";
import "./style.css";

const EditUser = ({ closeModal }) => {
  const infos = useSelector(body);
  let userNameDefault = infos.payload?.user?.body?.body?.userName;
  let firstName = infos.payload?.user?.body?.body?.firstName;
  let lastName = infos.payload?.user?.body?.body?.lastName;
  const [userName, setUserName] = useState(userNameDefault);
  let token = localStorage.getItem("token");
  const dispatch = useDispatch();
 
  async function Update(e) {
    e.preventDefault();
    let editName = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        accept: "application/json",
      },
      body: JSON.stringify({ userName: userName }),
    });

    editName = await editName.json();

    if (editName.status === 200) {
      dispatch(
        body({
          body: editName.body,
        })
      );
    }

    closeModal(false);
  }

  return (
    <div className="editUser">
      <h2 className="title">Edit User info</h2>
      <form>
        <div className="inputuser">
          <label>User name:</label>
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div className="inputuser">
          <label>First name: </label>
          <input value={firstName} readOnly />
        </div>
        <div className="inputuser">
          <label>Last name:</label>
          <input value={lastName} readOnly />
        </div>
        <div className="btn">
          <button className="sign-in-button" onClick={Update}>
            Save
          </button>
          <button className="sign-in-button" onClick={() => closeModal(false)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
