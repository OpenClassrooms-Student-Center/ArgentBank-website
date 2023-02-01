

import { Link } from "react-router-dom";
 import "./style.css";
const Sing = () => {
  return (
    <div>
    <Link className="main-nav-item" to="/sing-in">
      <i className="fa fa-user-circle"></i>
      Sign In
    </Link>
    </div>
  );
};

export default Sing;