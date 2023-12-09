import React from "react";
import { useDispatch, useStore, useSelector } from "react-redux";
import { useState } from "react";
import { setUserName, updateProfile } from "../../redux/user";
import { fetchProfile } from "../../redux/user";





function Editable() {

   const dispatch = useDispatch();
   
   const store = useStore();
    
   
   
   const firstName = (useSelector((state) => state.user.firstName));
   const lastName = (useSelector((state) => state.user.lastName));
   const userName = (useSelector((state) => state.user.userName));
   const shownName = firstName + ' ' + lastName;
   
   const [displayName, setDisplayName] = useState('');

   const [isEditing, setisEditing] = useState(false);

   const [isThereUsername, setIsThereusername] = useState(userName !== '')


   const handleChangeEditingMode = (event) => {
      event.preventDefault();
		setisEditing(!isEditing);
      dispatch(fetchProfile(store));
        
	};



   const handleChangeName = async (event) => {
		event.preventDefault();
      
      if (displayName !== '') {

         setIsThereusername(true)
         dispatch(setUserName(displayName));
         
         dispatch(updateProfile(store));
         setisEditing(!isEditing);

      } else {
         setIsThereusername(false)

      }
      
      
      
	};

   

   return(
      <div className="edit-name">
      {!(isEditing) ? (
         <>
            <h1>
               Welcome back
               <br />
               {shownName}
            </h1>
            <button onClick={handleChangeEditingMode}
                     className="edit-button"
            >Edit Name</button>
         </>
            
               
         

         ) : (

            <form onSubmit={handleChangeName}>
               <div className="input-wrapper">
                  <label htmlFor="firstName">First Name</label>
                  <input className=" grey-form"
                  type="text"
                  id="firstName" 
                  
                  defaultValue={firstName}
                  disabled
                  />
               </div>
               <div className="input-wrapper">
                  <label htmlFor="lastName">Last Name</label>
                  <input className=" grey-form"
                  type="text"
                  id="lastName" 
                  
                  defaultValue={lastName}
                  disabled
                  />
               </div>
               <div className="input-wrapper">
                  <label htmlFor="username">Username</label>
                  <input className={`${isThereUsername ? "" : "error-form"}`}
                  type="text"
                  id="username" 
                  
                  defaultValue={userName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  autoComplete="on"
                  />
                  <i className="error-text">{isThereUsername ? ("") : ("You need to input your desired name")}</i>
               </div>
               
               <button className="sign-in-button">save</button>
               <button onClick={handleChangeEditingMode} className="sign-in-button">cancel</button>
            </form>

         )}
      
   
      </div>
   );

      
}

export default Editable;