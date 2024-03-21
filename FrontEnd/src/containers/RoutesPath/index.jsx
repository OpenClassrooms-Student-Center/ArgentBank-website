import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home";
import Login from "../../pages/login";
import NotFound from "../notFound";
import User from "../../pages/user";
import { useSelector } from "react-redux";
import { selectUser } from "../../helpers/features/userSlice"
import ProtectrdRoute from "../../helpers/protectrdRoute";
import Protect from "../../helpers/protect";


const RoutesPath = () => {
  const user = useSelector(selectUser);

  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/*" element={<NotFound />} />
         <Route path="/login" element={ <Protect  user={user}>  <Login/></Protect> } />  
        <Route path="/profile" element={  <ProtectrdRoute  user={user} > <User/> </ProtectrdRoute>} />
      </Routes>
    </div>
  );
};
export default RoutesPath;
