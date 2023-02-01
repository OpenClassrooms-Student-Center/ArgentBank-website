import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home";
import Singin from "../../pages/singin";
import NotFound from "../notFound";
import User from "../../pages/user";
const RoutesPath = () => {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/sing-in" element={<Singin />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
};
export default RoutesPath;
