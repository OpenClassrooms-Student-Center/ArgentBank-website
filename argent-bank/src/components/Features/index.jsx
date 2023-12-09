import React from 'react';


function Features(item) {
   const props = item.props
   return (
      <div className="feature-item">
         <img src={props.icon} alt={props.alt} className="feature-icon" />
         <h3 className="feature-item-title">{props.title}</h3>
         <p>{props.description}</p>
      </div>
   );
};

export default Features;