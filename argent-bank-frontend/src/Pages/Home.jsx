import React from "react";
import Banner from "../components/Banner";
import FeatureItem from "../components/FeatureItem";
import chatImage from "../assets/icon-chat.webp";
import moneyImage from "../assets/icon-money.webp";
import securityImage from "../assets/icon-security.webp";

const Home = () => {
  return (
    <div>
      <Banner />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <FeatureItem
          image={chatImage}
          alt="Chat Icon"
          title="You are our #1 priority"
          text="Need to talk to a representative? You can get in touch through our
        24/7 chat or through a phone call in less than 5 minutes."
        />
        <FeatureItem
          image={moneyImage}
          alt="Money Icon"
          title="More savings means higher rates"
          text="The more you save with us, the higher your interest rate will be!"
        />
        <FeatureItem
          image={securityImage}
          alt="Security Icon"
          title="Security you can trust"
          text="We use top of the line encryption to make sure your data and money
          is always safe."
        />
      </section>
    </div>
  );
};

export default Home;
