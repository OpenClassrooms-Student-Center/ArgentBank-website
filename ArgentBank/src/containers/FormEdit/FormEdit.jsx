import Button from "../../components/Button/Button";
import Field from "../../components/Field/Field";
import './FormEdit.css'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'; // Import du hook useSelector
import { getUserProfile, updateUserName } from "../../redux/features/auth/authSlice";


const FormEdit = () => {

    const dispatch = useDispatch();
    const { userId, userProfile, isLoading } = useSelector((state) => state.auth);
    const [userName, setUserName] = useState('');

    // S'assurer que les données du profil sont chargées au montage du composant :
    useEffect(() => {
        dispatch(getUserProfile());
    }, [dispatch]);

    // Mettre à jour le userName quand userProfile change :
    useEffect(() => {
        if (userProfile?.userName) {
            setUserName(userProfile.userName);
        }
    }, [userProfile]);

    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
    };

    const navigate = useNavigate();

    const onCancel = () => {
        navigate(`/user/${userId}`);
    };

    const onSave = async (e) => {
        e.preventDefault();
        try {
            const resultAction = await dispatch(updateUserName({ userName })).unwrap();
            if (resultAction) {
                // Recharger le profil pour s'assurer d'avoir les dernières données
                await dispatch(getUserProfile());
                navigate(`/user/${userId}`);
            }
        } catch (err) {
            console.error('Échec de la mise à jour:', err);
        }
    };

    return (
        <>
            <section className="edit-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Personnal informations</h1>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <form onSubmit={onSave}>
                        <Field
                            id="username"
                            labelText="User Name"
                            value={userName}
                            onChange={handleUserNameChange}
                        />
                        <Field
                            id="FirstName"
                            labelText="First Name"
                            value={userProfile?.firstName || ''}
                            onChange={() => { }}
                            disabled={true}
                        />
                        <Field
                            id="LastName"
                            labelText="Last Name"
                            value={userProfile?.lastName || ''}
                            onChange={() => { }}
                            disabled={true}
                        />
                        <div className="CTA-buttons">
                            <Button
                                buttonText="Save"
                                buttonClass="CTA-button"
                                type="submit"
                            />
                            <Button
                                buttonText="Cancel"
                                buttonClass="CTA-button"
                                onClick={onCancel}
                                type="button"
                            />
                        </div>
                    </form>
                )}
            </section>
        </>
    );
};

export default FormEdit;