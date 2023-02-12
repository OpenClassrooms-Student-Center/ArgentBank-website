
//import{Navigate} from "react-router-dom";
 import React from 'react';
 import User from "../pages/user";
 import Login from "../pages/login";
const ProtectrdRoute = ({user}) => {

 
    if (!user){
        return < Login/>
    }
  
        return <User />
 

};

export default ProtectrdRoute
