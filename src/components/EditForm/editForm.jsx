import { useState } from "react";
import styles from './style/editForm.module.css';
import PropTypes  from "prop-types";
import { changeTheUserName } from "../../reducers/profilSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectLoading } from "../../utils/selector"

function EditForm({firstName, lastName, submit, defaultUserName}){
    const [userName, setUserName] = useState(defaultUserName);
    const loading = useSelector(selectLoading);
    const dispatch = useDispatch();


 /**
  * Cette fonction fait appel au middleware asyncthunk qui envoie le userName modifié par l'utilisateur à l'API Profil et gère l'état de la requête.
  */
    async function handleChangeUserNameEvent(e){
        e.preventDefault();
        dispatch(changeTheUserName(userName));
        submit();
    }
    return(
        <div className={styles.editFormWrapper}>
            <form className={styles.editForm} onSubmit = {(e) => {handleChangeUserNameEvent(e)}}>
                <h1 className={styles.editFormTitle}>Edit user info</h1>
                <div className={styles.editInputWrapper}>
            <label htmlFor="username">User name:</label>
            <input type="text" id="username" onChange={(e) => setUserName(e.target.value)} value={userName} required/>
        </div>
        <div className={styles.editInputWrapper}>
            <label htmlFor="firstName">First name:</label>
            <input type="text" id="firstName" placeholder={firstName} disabled />
        </div>
        <div className={styles.editInputWrapper}>
            <label htmlFor="lastName">Last name:</label>
            <input type="text" id="lastName" placeholder={lastName} disabled/>
        </div>
        <div className={styles.editButtonWrapper}>
            <button type="submit" className={styles.editButton}>{loading ? "loading..." : "Save"}</button>
            <button className={styles.editButton} onClick={(e) =>{e.preventDefault(); submit()}}>Cancel</button>
        </div>
            </form>
        </div>
    )
}

EditForm.propsTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    submit : PropTypes.func.isRequired,
  }

export default EditForm;