import { useNavigate} from "react-router-dom"
import styles from './style/form.module.css';



function Form(){
  const redirect = () => (navigate("/user"));
  const navigate = useNavigate();
    return(
        <form>
          <div className={styles.inputWrapper}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className={styles.inputRemember}>
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className={styles.signInButton} onClick={redirect}>Sign In</button>
        </form>
    )
}

export default Form;