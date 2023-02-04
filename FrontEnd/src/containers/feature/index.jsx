import Item from "../../components/item";
import Image1 from "../../assets/img/icon-chat.png";
import Image2 from "../../assets/img/icon-money.png";
import Image3 from "../../assets/img/icon-security.png";
import "./style.css";
const infos = [
  {
    id: 1,
    img: Image1,
    title: "You are our #1 priority",
    text: `Need to talk to a representative? You can get in touch through our
    24/7  chat or through a phone call in less than 5 minutes.`,
  },
  {
    id: 2,
    img: Image2,
    title: "More savings means higher rates",
    text: `The more you save with us, the higher your interest rate will be!`,
  },
  {
    id: 3,
    img: Image3,
    title: "Security you can trust",
    text: ` We use top of the line encryption to make sure your data and money
    is always safe.`,
  },
];
const Feature = () => {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {infos.map((info) => (
        <Item
          img={info.img}
          title={info.title}
          text={info.text}
          key={info.id}
        />
      ))}
    </section>
  );
};

export default Feature;
