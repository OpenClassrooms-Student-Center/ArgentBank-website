import "./style.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { body } from "../../helpers/features/userSlice";
const NameUser = () => {
  const infos = useSelector(body);
  let userNameDefault = infos.payload?.user?.body?.body?.userName;
  // const [userName, setUserName] = useState(userNameDefault);
  let token = localStorage.getItem("token");
 
  async function edit(e) {
    e.preventDefault();
    let editName = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        accept: "application/json",
      },
      body:( JSON.stringify( ))
    });
    editName = await editName.json();
    console.log(editName);
  }

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />{`${userNameDefault}  ! `}
      </h1>
      {/* <input
        value={`${userName}  ! `}
        onChange={(e) => setUserName(e.target.value)}
      >
       
      </input> */}
      <button onClick={edit} className="edit-button">
        Edit Name
      </button>
    </div>
  );
};

export default NameUser;
