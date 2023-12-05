import styles from './style/error.module.css'
import { useEffect,  } from "react";
import { useDispatch, useSelector } from "react-redux";
import compareStorage from "../../utils/compareStorage";
import { selectUserName } from "../../utils/selector";
import { getUser } from "../../reducers/profilSlice";

function Error(){
  const dispatch = useDispatch();
  const token = compareStorage();
  const userName = useSelector(selectUserName);
  useEffect(() => {
    if(token !== null && userName === null){
      dispatch(getUser());
    }
  },[])
  
    return(
        <div className={styles.error}>
            <h2 className={styles.errorTitle} >404</h2>
            <p className={styles.errorMsg}>Oups! La page que vous demandez n'existe pas.</p>
            <a href='/' className={styles.returnLink}>Retourner sur la page d’accueil</a>
        </div>
    )
}

export default Error