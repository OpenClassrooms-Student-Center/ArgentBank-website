import React from 'react';
import { Link } from 'react-router-dom';


function Account(item) {
   const props = item.props
   return (
      <section className="account">
         <div className="account-content-wrapper">
            <h3 className="account-title">{props.title}</h3>
            <p className="account-amount">{props.amount}</p>
            <p className="account-amount-description">{props.description}</p>
         </div>
         <div className="account-content-wrapper cta">
            <Link to={props.linkPath} className="account-button-link">
               <button className="transaction-button">
                  {props.transButton}
               </button>
            </Link>
         </div>
      </section>
   );
};

export default Account;