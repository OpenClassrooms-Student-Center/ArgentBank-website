import styles from './style/footer.module.css';

function Footer({content}){
    return(
    <footer className={styles.footer}>
      <p className={styles.footerText}>{content}</p>
    </footer>
    )
}

export default Footer;