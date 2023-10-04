import React from "react";
import styles from "../style/main.css"
import IconChat from "../img/icon-chat.png"
import IconTrust from "../img/icon-security.png"

export const FeatureInfos = [
    {id:1, title:"You are our #1 priority", text:"Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.", img:"../img/icon-chat.png"},
    {id:2, title:"More savings means higher rates", text:"The more you save with us, the higher your interest rate will be!", img:""},
    {id:3, title:"Security you can trust", text:"We use top of the line encryption to make sure your data and money is always safe.", img:{IconTrust}}
]

const FeatureItem = () => {
    return (
        <section className="features">
            <h2 className="srOnly">Features</h2>
            {FeatureInfos.map(item=>(
                <div className="featureItem">
                    <img
                        src={IconChat}
                        alt="Icon"
                        className="featureIcon"
                        width={100} height={100}
                        key={item.id}
                        />
                    <h3 className="featureItemTitle">{item.title}</h3>
                    <p>{item.text}</p>
                </div>  
            ))}
        </section>
    )
}
export default FeatureItem