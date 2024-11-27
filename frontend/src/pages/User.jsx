import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateUsername } from "../reducer/UserSlice";
import Header from "../components/Header";
import { setUser } from "../reducer/UserSlice";
import Footer from "../components/Footer";
import api from "../components/api";
import Transaction from "../components/Transaction";

const User = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      dispatch(setUser(user));
    }
  }, [dispatch]);
  const { data, isLoading: isProfileLoading } = api.useGetProfileQuery();
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateProfile, { data: updatedProfile }] =
    api.useUpdateProfileMutation();
  const userId = data?.body.id;
  const lastName = data?.body.lastName;
  const firstName = data?.body.firstName;
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (data) {
      setUserName(data.body.userName);
    }
  }, [data]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newUsername, setNewUsername] = useState(
    isProfileLoading ? "" : data?.body.userName || ""
  );
  // useEffect(() => {}, [updatedProfile]);

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleUpdateUsername = async (newUsername) => {
    setIsUpdating(true); // Indique que la mise à jour est en cours

    try {
      const response = await updateProfile({ userName: newUsername });

      // Extraire les données de la réponse
      const updatedUserName = response?.data?.userName;

      // Mettre à jour l'état du composant avec le nouveau nom d'utilisateur
      dispatch(
        updateUsername({ userId: userId, newUsername: updatedUserName })
      );
      setNewUsername(updatedUserName);
      setIsModalOpen(false);
      // Afficher un message de succès
      alert("Votre nom d'utilisateur a été mis à jour avec succès.");
    } catch (error) {
      // Gérer les erreurs
      console.error(
        "Erreur lors de la mise à jour du nom d'utilisateur:",
        error
      );
      alert(
        "Une erreur s'est produite lors de la mise à jour de votre nom d'utilisateur."
      );
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <>
      <Header
        connexion="main-nav-item display-none "
        deconnexion="main-nav-item display-flex cursor"
        name={userName}
      />
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {firstName} {lastName}
          </h1>
          <button className="edit-button" onClick={handleEditClick}>
            Edit Name
          </button>
          {isModalOpen && (
            <div className="modal">
              <div className="modal-content">
                <label htmlFor="new-username">New Username:</label>
                <input
                  type="text"
                  id="new-username"
                  value={newUsername}
                  onChange={(e) => {
                    setNewUsername(e.target.value);
                    // console.log("Nouvelle valeur saisie:", e.target.value); // Pour déboguer
                  }}
                />
                <button onClick={() => handleUpdateUsername(newUsername)}>
                  Save
                </button>
                 <button onClick={handleCloseModal}>Cancel</button>
              </div>
            </div>
          )}
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Transaction
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
        />
        <Transaction
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          description="Available Balance"
        />
        <Transaction
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          description="Current Balance"
        />
      </main>
      <Footer />
    </>
  );
};

export default User;
