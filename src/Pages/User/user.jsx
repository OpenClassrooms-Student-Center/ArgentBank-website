import Account from "../../components/Account/account";
import EditForm from "../../components/EditForm/editForm";
import styles from './style/user.module.css';
import indexStyles from '../../index.module.css';
import headerStyles from '../../components/Header/style/header.module.css';
import { useEffect } from 'react';
import { useNavigate} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getUserInfo } from "../../services";
import { setProfil } from "../../reducers/profilSlice";
import { useState } from "react";


function User(){
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [edit, setEdit] = useState(false);
  const token = sessionStorage.getItem('token');
  const locToken = localStorage.getItem('token');
  const navigate = useNavigate();
  


  
   async function getDatas(){
    await getUserInfo().then(data => {
        setEmail(data.body?.email);
        setFirstName(data.body?.firstName);
        setLastName(data.body?.lastName);
        setUserName(data.body?.userName); 
      },
      dispatch(setProfil({email, firstName, lastName, userName}))
    )};
  

  useEffect(() => {
    if(token === null && locToken === null){
      navigate('/logIn');
    }
     getDatas(); 
    
  })

    return(
      <div className={styles.user}>
         <main className={indexStyles.bgDark}>
          {!edit ?
            <div className={styles.headerUser}>
               <h1>Welcome back<br />{`${firstName} ${lastName}`} !</h1>
                <button className={styles.editButton} onClick={e => {e.preventDefault(); setEdit(!edit)}}>Edit Name</button>
            </div> :
            <EditForm firstName={firstName} lastName={lastName}/>}
            <h2 className={headerStyles.srOnly}>Accounts</h2>
            <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance" />
            <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />
            <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance" />
         </main>
      </div>
      ) 
    }

export default User;