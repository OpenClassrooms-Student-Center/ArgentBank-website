import React from "react";
import IconChat from "../img/icon-chat.avif"
import IconTrust from "../img/icon-security.avif"
import IconMoney from "../img/icon-money.avif"
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
              img={IconMoney} 
              titre="More savings means higher rates" 
              description="The more you save with us, the higher your interest rate will be!"/>
            
            <Item 
              img={IconTrust} 
              titre="Security you can trust" 
              description="We use top of the line encryption to make sure your data and money is always safe."/>
            
        </section> 
    )
}
export default FeatureItem