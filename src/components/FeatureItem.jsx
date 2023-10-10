import React from "react";
import styles from "../style/main.css"
import IconChat from "../img/icon-chat.png"
import IconTrust from "../img/icon-security.png"
import IconMoney from "../img/icon-money.png"
import Item from "./Item";

const FeatureItem = () => {
    return (
        <section className="features">
            <h2 className="srOnly">Features</h2>
            <Item 
              img={IconChat} 
              titre="You are our #1 priority" 
              description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."/>
            
            <Item 
              img={IconTrust} 
              titre="More savings means higher rates" 
              description="The more you save with us, the higher your interest rate will be!"/>
            
            <Item 
              img={IconMoney} 
              titre="Security you can trust" 
              description="We use top of the line encryption to make sure your data and money is always safe."/>
            
        </section> 
    )
}
export default FeatureItem