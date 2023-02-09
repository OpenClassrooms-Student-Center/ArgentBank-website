import { useDispatch, useSelector } from "react-redux";
import { body, logout, selectUser } from "../../helpers/features/userSlice";
import { useNavigate, Link } from "react-router-dom";

import "./style.css";
const Sing = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const infos = useSelector(body);
  const name = infos.payload?.user?.body?.body?.firstName;

  function Singout() {
    localStorage.removeItem("token");
    navigate("/");
    dispatch(logout());
  }
  function Singin() {
    navigate("/login");
  }
  if (!user) {
    localStorage.removeItem("token");
  }
  return !user ? (
    <div>
      <button onClick={Singin} className="main-nav-item">
        <i className="fa fa-user-circle"></i>
        Sign In
      </button>
    </div>
  ) : (
    <div className="logout">
      <Link className="nameUser" to="/profile">
        <i className="fa fa-user-circle"></i>
        <p className="name">{name}</p>
      </Link>
      <button onClick={Singout} className="main-nav-item">
        <i className="fa fa-sign-out"></i>
        Sign out
      </button>
    </div>
  );
};

export default Sing;
