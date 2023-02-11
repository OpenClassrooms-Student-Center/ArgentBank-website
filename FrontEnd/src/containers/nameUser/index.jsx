import "./style.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { body } from "../../helpers/features/userSlice";
import Modal from "../modal"; 
const NameUser = ()=> {
  const infos = useSelector(body);
  let userNameDefault = infos.payload?.user?.body?.body?.userName;
  const [open, setOpen] = useState(false);
 

  function edit(e) {
    e.preventDefault();
    setOpen(true);
  }

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {`${userNameDefault}  ! `}
      </h1>

      <button onClick={edit} className="edit-button">
        Edit Name
      </button>
      {open ? <Modal closeModal={setOpen} /> : ""}
    </div>
  );
};

export default NameUser;
