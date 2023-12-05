import bankTree from "../../asset/img/bank-tree.jpeg";
import styles from './style/hero.module.css';
import headerStyles from '../Header/style/header.module.css';

function Hero(){
    return(
        <div className={styles.hero} style={{backgroundImage: `url(${bankTree})`}}>
        <section className={styles.heroContent}>
          <h2 className={headerStyles.srOnly}>Promoted Content</h2>
          <p className={styles.subtitle}>No fees.</p>
          <p className={styles.subtitle}>No minimum deposit.</p>
          <p className={styles.subtitle}>High interest rates.</p>
          <p className={styles.text}>Open a savings account with Argent Bank today!</p>
        </section> 
      </div>
    )
}

export default Hero;