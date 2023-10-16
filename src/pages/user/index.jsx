import useProfileLogic from "../../hocks/useProfileLogic";
import Account from "../../components/Account";
import accountData from "../../data/dataAccount"
import { useState } from "react";



function Profile() {
    const { firstName, lastName, handleSaveProfileData } = useProfileLogic();
    const [isEditing, setIsEditing] = useState(false);
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
                        <input
                            type="text"
                            className="edit-input"
                            placeholder={`${firstName}`}
                            name="firstName"
                        />
                        <input
                            type="text"
                            className="edit-input"
                            placeholder={`${lastName}`}
                            name="lastName"
                        />
                        <div>
                            <button className="modify-button" type="submit">
                                Save
                            </button>
                            <button
                                className="modify-button"
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