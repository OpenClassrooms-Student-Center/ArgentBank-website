import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import CallChangeName from "./../../CallAPI/CallChangeName.jsx";

function User() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user);
  const [showInput, setShowInput] = useState(false);

  const editButtonClick = () => {
    setShowInput(true);
  };

  const okButtonClick = () => {
    setShowInput(false);
    const inputValue = document.getElementById("inputChangeName").value;
    CallChangeName(inputValue, userData.token);
    dispatch({ type: "changeUsername", payload: { userName: inputValue } });
    console.log(userData);
  };

  useEffect(() => {
    if (!userData.isLogged) {
      navigate("/sign-in");
    }
  }, [userData.isLogged, navigate]);

  if (userData.isLogged) {
    return (
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {`${userData.userinfo[0].firstName} ${userData.userinfo[0].lastName}`}
          </h1>
          <button onClick={editButtonClick} className="edit-button">
            Edit Name
          </button>
          {showInput && (
            <>
              <input id="inputChangeName" type="text" />{" "}
              <button onClick={okButtonClick}>Ok</button>
            </>
          )}
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
    );
  } else {
    return null;
  }
}

export default User;
