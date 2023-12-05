import Form from "../../components/Form/form";
import styles from './style/signIn.module.css';
import indexStyles from '../../index.module.css';
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../utils/selector";


function SignIn(){
  const token = useSelector(selectToken);
  if(!token){
    return(
      <div className="sign-in">
         <main className= {indexStyles.bgDark}>
            <section className={styles.signInContent}>
              <i className="fa fa-user-circle sign-in-icon"></i>
              <h1>Sign In</h1>
              <Form />
            </section>
         </main>
      </div>
      )}
      else{
        return <Navigate to="/profile" />;
      }
    }

export default SignIn;