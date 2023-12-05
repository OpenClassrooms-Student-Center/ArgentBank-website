import bankTree from "../../asset/img/bank-tree.webp";
import styles from './style/hero.module.css';
import headerStyles from '../Header/style/header.module.css';

function Hero(){
    return(
        <div className={styles.hero} style={{backgroundImage: `url(${bankTree})`}}>
        <section className={styles.heroContent}>
          <h2 className={headerStyles.srOnly}>Promoted Content</h2>
          <h3 className={styles.subtitle}>No fees.</h3>
          <h3 className={styles.subtitle}>No minimum deposit.</h3>
          <h3 className={styles.subtitle}>High interest rates.</h3>
          <h3 className={styles.text}>Open a savings account with Argent Bank today!</h3>
        </section> 
      </div>
    )
}

export default Hero;