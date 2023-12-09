import React from 'react';

import iconMessages from './../../assets/icon-money.png';
import iconMoney from './../../assets/icon-chat.png';
import iconShield from '../../assets/icon-security.png'

import Features from "../../components/Features";

function Home() {

    const data = [
        { id: 1, icon: iconMessages,  title: "You are our #1 priority", alt: "Messages Icon", description: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes." },
        { id: 2, icon: iconMoney, title: "More savings means higher rates", alt: "Money icon", description: "The more you save with us, the higher your interest rate will be!" },
        { id: 3, icon: iconShield, title: "Security you can trust", alt: "shield icon", description: "We use top of the line encryption to make sure your data and money is always safe." },
      ];
    return (
        <main>
            <section className="hero">
                <div className="hero-content">
                    <p className="subtitle">No fees.</p>
                    <p className="subtitle">No minimum deposit.</p>
                    <p className="subtitle">High interest rates.</p>
                    <p className="text">
                        Open a savings account with Argent Bank today!
                    </p>
                </div>
            </section>
            <section className="features">
                {data.map((item) => (
                    
                    <Features key={item.id} props={item}/>
                ))}
                
            </section>
        </main>
    );
 };
 
 export default Home;