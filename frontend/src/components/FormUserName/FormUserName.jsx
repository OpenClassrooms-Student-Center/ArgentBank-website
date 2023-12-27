// FormUserName.jsx
import { useDispatch, useSelector} from 'react-redux'
import { useState, useEffect } from "react";


import {  useUpdateUserMutation} from '../../features/User/UserApiSlice.js'
import { selectCurrentFirstname, selectCurrentLastname, selectCurrentUsername, setUserInfo } from "../../features/User/userSlice.js";

const FormUserName = ({setIsOpen}) => {

    const firstname = useSelector(selectCurrentFirstname);
    const lastname = useSelector(selectCurrentLastname);
    const username = useSelector(selectCurrentUsername);
    const dispatch = useDispatch();

    const [ updateUser ] = useUpdateUserMutation();
    const [updatedUsername, setUpdatedUsername] = useState();


    useEffect(() => {
        setUpdatedUsername(username ? username : '');
    }, [username]);


    const handleSubmit = async (e) => { 
        e.preventDefault();
        try {
          console.log(`[USERFORM] updatedUsername:`,updatedUsername);
            const result = await updateUser({ userName: updatedUsername }).unwrap();
            dispatch(setUserInfo({ userName: username }));
            console.log(`[USERFORM] handleSubmit succes:`,result);
            setIsOpen(false);
        } catch (error) {
              console.log(`[USERFORM] HandleSubmit error:`,error);
        }
    }


    return (
        <>
            <h2 className='user_form-title'>Edit User Info</h2>
            <form onSubmit={handleSubmit} className='user_form-container'>
                <div className="input-wrapper">
                    <label htmlFor="username" className='user_form-label'>
                        User Name
                        </label>
                        <input 
                            type="text" 
                            name="username" 
                            id="username"
                            className='user_form-input'
                            onChange={(e) => setUpdatedUsername(e.target.value)}
                            defaultValue={updatedUsername ? updatedUsername : username}
                             />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="username" className='user_form-label'>
                        First Name
                        </label>
                        <input 
                            type="text" 
                            name="firstname" 
                            id="firstname" 
                            className='user_form-input'
                            value={firstname}
                            disabled
                            />
                </div>
                <div className="input-wrapper" >
                    <label htmlFor="username"className='user_form-label'>
                        Last Name
                        </label>
                        <input 
                            type="text" 
                            name="lastname" 
                            id="lastname" 
                            className='user_form-input'
                            value={lastname}
                            disabled />
                </div>
                <div className='user_form_buttons-container'>
                    <button className="user_form-button" type="submit">Save</button>
                    <button className="user_form-button" type="button" onClick={()=> setIsOpen(false)}>Cancel</button>
                </div>
            </form>
        </>
    );
};

export default FormUserName;