import React from "react";

const FeatureItem = ({ image, alt, title, text }) => {
  return (
    <div>
      <div className="feature-item">
        <img src={image} alt={alt} className="feature-icon" />
        <h3 className="feature-item-title"> {title} </h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
