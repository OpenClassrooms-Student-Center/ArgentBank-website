import Footer from "../../components/Footer/footer"
import Header from "../../components/Header/header"
import styles from './style/error.module.css'

function Error(){
    return(
        <div className={styles.error}>
            <Header />
            <h2 className={styles.errorTitle} >404</h2>
            <p className={styles.errorMsg}>Oups! La page que vous demandez n'existe pas.</p>
            <a href='/' className={styles.returnLink}>Retourner sur la page d’accueil</a>
            <Footer />
        </div>
    )
}

export default Error