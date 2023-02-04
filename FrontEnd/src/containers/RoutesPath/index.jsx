import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home";
import Login from "../../pages/login";
import NotFound from "../notFound";
import User from "../../pages/user";
const RoutesPath = () => {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
};
export default RoutesPath;
