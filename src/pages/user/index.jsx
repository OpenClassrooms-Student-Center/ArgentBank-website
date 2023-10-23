import useProfileLogic from "../../logics/useProfileLogic";
import Account from "../../components/Account";
import accountData from "../../data/dataAccount"
import { useState } from "react";
import { useSelector } from "react-redux";



function Profile() {
    const { firstName, lastName, userName, handleSaveProfileData } = useProfileLogic();
    const [isEditing, setIsEditing] = useState(false);
    const userNameP=useSelector(state => state.user.username)
    const handleEditClick = () => {
        setIsEditing(true);
    };
    const handleCancelClick = () => {
        setIsEditing(false);
    };

    return (
        <main className="main bg-dark">
            <div className="header">
                {!isEditing ? (
                    <>
                        <h1>
                            Welcome back
                            <br />
                            {`${firstName} ${lastName}`}
                        </h1>
                        <button
                            className="edit-button"
                            onClick={handleEditClick}>
                            Edit Name
                        </button>
                    </>
                ) : (
                    <form
                        onSubmit={(e) =>
                            handleSaveProfileData(e, setIsEditing)
                        }>
                        <h1>Welcome back</h1>
                        <div className="inputs-container">
                            <div>
                                <label htmlFor="userName">UserName : </label>
                                <input
                                    type="text"
                                    className="edit-input2"
                                    placeholder={`${userNameP}`}
                                    name="userName"
                                    id="userName"
                                />
                            </div>
                            <div>
                                <label htmlFor="FirstName">FirstName : </label>
                                <input
                                    type="text"
                                    className="edit-input3"
                                    placeholder={`${firstName}`}
                                    name="FirstName"
                                    readOnly
                                />
                            </div>
                            <div>
                                <label htmlFor="LastName">LastName : </label>
                                <input
                                    type="text"
                                    className="edit-input3"
                                    placeholder={`${lastName}`}
                                    name="LastName"
                                    readOnly
                                />
                            </div>
                        
                        </div>
                        <div>
                            <button className="edit-button2" type="submit">
                                Save
                            </button>
                            <button
                                className="edit-button2"
                                type="button"
                                onClick={handleCancelClick}>
                                Cancel
                            </button>
                        </div>
                    </form>
                )}
            </div>
            <h2 className="sr-only">Accounts</h2>
            {accountData.map((data) => (
                <Account
                    key={data.id}
                    title={data.title}
                    amount={data.amount}
                    description={data.description}
                />
            ))}
        </main>
    );
}

export default Profile;