import React, {useState} from "react";

function TransactionDetails(props) {
    
    const [isOpen, setIsOpen] = useState(false);
    
    const display = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <tr>
            <td>
                {props.date}
                
            </td>
            <td>
                {props.description}
            </td>
            <td>
                {props.amount}
            </td>
            <td>
                {props.balance}
            </td>
            <td onClick={display}>
                {isOpen ? (<i className="fa fa-chevron-down"></i>) : (<i className="fa fa-chevron-up"></i>)}
            </td>
            
        </tr>
       );
    };
    
    export default TransactionDetails;