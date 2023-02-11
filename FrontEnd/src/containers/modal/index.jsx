import React from "react";
import { useState } from "react";

import { useSelector } from "react-redux";
import { body } from "../../helpers/features/userSlice";
import { useDispatch } from "react-redux";
import "./style.css";
const Modal = ({ closeModal }) => {
  const infos = useSelector(body);
  let userNameDefault = infos.payload?.user?.body?.body?.userName;
  const [userName, setUserName] = useState(userNameDefault);
  let token = localStorage.getItem("token");
  const dispatch = useDispatch();
  async function Update() {
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
    <aside className="modal">
      <div className="modal_container">
        <button className="modalX" onClick={() => closeModal(false)}>
          x
        </button>
        <p className="modal-text"> Change your userName</p>

        <input
          className="modal-input"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <button className="modal-btn" onClick={Update}>
          Update
        </button>
      </div>
    </aside>
  );
};

export default Modal;
