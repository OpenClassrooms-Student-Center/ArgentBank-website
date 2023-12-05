import Feature from "../../components/Feature/feature";
import Hero from "../../components/Hero/hero";
import chatIcon from "../../asset/img/icon-chat.png";
import moneyIcon from "../../asset/img/icon-money.png";
import securityIcon from "../../asset/img/icon-security.png";
import styles from './style/home.module.css';
import featureStyles from '../../components/Feature/style/feature.module.css';
import headerStyles from '../../components/Header/style/header.module.css';



function Home() {
    return (
      <div className={styles.home}>
         <Hero />
        <section className={styles.features}>
            <h2 className={headerStyles.srOnly}>Features</h2>
            <Feature title="You are our #1 priority" content="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.">
              {<img src={chatIcon} alt="Chat Icon" className={featureStyles.featureIcon} />}
            </Feature>
            <Feature title="More savings means higher rates" content="The more you save with us, the higher your interest rate will be!">
              {<img src={moneyIcon} alt="Money Icon" className={featureStyles.featureIcon} />}
            </Feature>
            <Feature title="Security you can trust" content="We use top of the line encryption to make sure your data and money is always safe.">
              {<img src={securityIcon} alt="Security Icon" className={featureStyles.featureIcon} />}
            </Feature>
        </section>
      </div>
      ) 
    }
      
  export default Home;