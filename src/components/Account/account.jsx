import PropTypes  from "prop-types";
import styles from './style/account.module.css';
import userStyles from '../../Pages/User/style/user.module.css';

function Account({title, amount, description}){
    return(
        <section className={styles.account}>
        <div className={styles.accountContentWrapper}>
          <h3 className={styles.accountTitle}>{title}</h3>
          <p className={styles.accountAmount}>{amount}</p>
          <p className={styles.accountAmountDescription}>{description}</p>
        </div>
        <div className={styles.accountContentWrapperCta}>
          <button className={userStyles.transactionButton}>View transactions</button>
        </div>
      </section>
    )
}

Account.propsTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
}

export default Account;