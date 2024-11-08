import Feature from '../../components/Feature/Feature';
import './Features.css';

const Features = () => {
    return (
        <div>
            <section className="features">
                <h2 className="sr-only">Features</h2>
                <Feature
                    featureIcon={"./img/icon-chat.png"}
                    featureIconAlt={"Chat Icon"}
                    featureTitle={"You are our #1 priority"}
                    featureDetail={"Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."}
                />
                <Feature
                    featureIcon={"./img/icon-money.png"}
                    featureIconAlt={"Money Icon"}
                    featureTitle={"More savings means higher rates"}
                    featureDetail={"The more you save with us, the higher your interest rate will be!"}
                />
                <Feature
                    featureIcon={"./img/icon-security.png"}
                    featureIconAlt={"Security Icon"}
                    featureTitle={"Security you can trust"}
                    featureDetail={"We use top of the line encryption to make sure your data and money"}
                />
            </section>
        </div>
    );
};

export default Features;