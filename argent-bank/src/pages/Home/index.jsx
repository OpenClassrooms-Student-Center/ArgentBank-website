import React from 'react';

import iconMessages from './../../assets/icon-money.png';
import iconMoney from './../../assets/icon-chat.png';
import iconShield from '../../assets/icon-security.png'

import Features from "../../components/Features";

function Home() {
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
                <Features
                    icon={iconMessages}
                    alt="Messages Icon"
                    title="You are our #1 priority"
                    description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
                />
                <Features
                    icon={iconMoney}
                    alt="Money icon"
                    title="More savings means higher rates"
                    description="The more you save with us, the higher your interest rate will be!"
                />
                
                <Features
                    icon={iconShield}
                    alt="shield icon"
                    title="Security you can trust"
                    description="We use top of the line encryption to make sure your data and money is always safe."
                />
            </section>
        </main>
    );
 };
 
 export default Home;