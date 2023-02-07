
import{Navigate} from "react-router-dom";
 import React from 'react';
 import User from "../pages/user";

const ProtectrdRoute = ({user}) => {

 
    if (!user){
        return < Navigate to = "/notFound"/>
    }
  
        return <User />
 

};

export default ProtectrdRoute
