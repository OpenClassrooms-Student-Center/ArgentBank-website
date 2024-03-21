 
import "./style.css";

const Item = ({img,title,text}) => {
  return (
  
    <div className="feature-item">
          <img className="feature-icon"
            src={img}
            alt="Chat Icon"
            
          />
          <h3 className="feature-item-title">{title}</h3>
          <p>
            {text}
          </p>
        </div>
   
  );
};

export default Item;