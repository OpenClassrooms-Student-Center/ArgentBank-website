import { useDispatch, useSelector} from 'react-redux'
import { useEffect, useState} from "react";
// REDUX
import { useUserQuery} from '../features/User/UserApiSlice.js'
import { selectCurrentFirstname, selectCurrentLastname, selectCurrentUsername, setUserInfo } from "../features/User/userSlice.js";
import FormUserName from '../components/FormUserName/FormUserName.jsx';


const User = () => {

    const dispatch = useDispatch();
    const { data: user } = useUserQuery();
    const firstname = useSelector(selectCurrentFirstname);
    const lastname = useSelector(selectCurrentLastname);
    const username = useSelector(selectCurrentUsername);

    const [editIsOpen, setEditIsOpen] = useState(false);

    useEffect(() => {
        if (user) {
          dispatch(setUserInfo(user.body));
        }
      }, [user]);


    return (
        <main className="user main bg-dark">
            <div className="header">
                {editIsOpen ? (
                    <FormUserName isOpen={editIsOpen} setIsOpen={setEditIsOpen}/>
                ) : (
                    <>
                        <h1>Welcome back<br />{lastname} {username? (username):(firstname)} !</h1>
                        <button className="edit-button" onClick={()=>setEditIsOpen(true)}>Edit Name</button>
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
};

export default User;