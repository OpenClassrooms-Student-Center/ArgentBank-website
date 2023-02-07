import "./style.css";
import {  useSelector } from "react-redux";
import { body } from "../../helpers/features/userSlice";
const NameUser = () => {
 
  const infos = useSelector(body);
  const name = infos.payload?.user?.body?.body?.firstName
  const lastName= infos.payload?.user?.body?.body?.lastName
  
 
  return (
    
    <div className="header">
    <h1>Welcome back<br />{name} {lastName}!</h1>
    <button className="edit-button">Edit Name</button>
  </div>
  );
};

export default NameUser;