import Account from "../../components/Account/account";
import EditForm from "../../components/EditForm/editForm";
import styles from './style/user.module.css';
import indexStyles from '../../index.module.css';
import headerStyles from '../../components/Header/style/header.module.css';
import { useEffect, useState  } from 'react';
import { useNavigate} from "react-router-dom";
import compareStorage from "../../utils/compareStorage";
import { getUser} from "../../reducers/profilSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectFirstName, selectLastName, selectUserName } from "../../utils/selector";


function User(){
  const navigate = useNavigate();
  const firstName = useSelector(selectFirstName);
  const lastName = useSelector(selectLastName);
  const userName = useSelector(selectUserName);
  const [edit, setEdit] = useState(false);
  const token = compareStorage();
  const dispatch = useDispatch();

  useEffect(() => {
    if(token === null){
      navigate('/logIn');
    }
    else if(firstName === null){
    dispatch(getUser());
    } 
  },[]);

  /**
  * Cette fonction modifie l'état edit de notre page afin d'afficher ou de cacher le formulaire de modification du userName.
  */
    function handleSubmit(){
      setEdit(!edit);
    }
  

    return(
      <div className={styles.user}>
         <main className={indexStyles.bgDark}>
          {!edit ?
            <div className={styles.headerUser}>
               <h1>Welcome back<br />{`${firstName} ${lastName}`} !</h1>
                <button className={styles.editButton} onClick={e => {e.preventDefault(); handleSubmit();}}>Edit Name</button>
            </div> :
            <EditForm firstName={firstName} lastName={lastName} defaultUserName={userName} submit= {handleSubmit}/>}
            <h2 className={headerStyles.srOnly}>Accounts</h2>
            <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance" />
            <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />
            <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance" />
         </main>
      </div>
      ) 
    }

export default User;