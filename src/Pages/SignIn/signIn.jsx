import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import Form from "../../components/Form/form";
import styles from './style/signIn.module.css';
import indexStyles from '../../index.module.css';

function SignIn(){
    return(
      <div className="sign-in">
         <Header />
         <main className= {indexStyles.bgDark}>
            <section className={styles.signInContent}>
              <i className="fa fa-user-circle sign-in-icon"></i>
              <h1>Sign In</h1>
              <Form />
            </section>
         </main>
         <Footer />
      </div>
      ) 
    }

export default SignIn;