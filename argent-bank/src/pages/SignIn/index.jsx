
import React from "react";
import { useState } from "react";
import { useDispatch, useStore, useSelector } from "react-redux";
import { fetchOrUpdateLogin } from "../../redux/login";
import { setEmail, setPassword } from "../../redux/credentials";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";








function SignIn() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const store = useStore();
    const email = useSelector((state) => state.email);
    const password = useSelector((state) => state.password);
    const isConnected = (useSelector(state => state.login.isConnected));

    
    const checkLogged = () => {
        if (isConnected) {
            navigate("/profile");
        }   
    }

    const lastMail = localStorage.getItem("userEmail");
    const [displayMail, setDisplayMail] = useState(lastMail || '')
    const [displayPassword, setDisplayPassword] = useState('')
    const [isThereMail, setIsThereMail] = useState(email !== '');
    const [isTherePassword, setIsTherepassword] = useState(password !== '');
    

    useEffect(() => {
        checkLogged(store);
    });
    
	const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        
        rememberMe ? localStorage.setItem("userEmail", displayMail) : localStorage.removeItem("userEmail");
        
        
        
        if ((displayMail === '') || (displayPassword === '')) {
            if (displayMail === '') {
                setIsThereMail(false);
            }
            else {
                setIsThereMail(true)
            }
            setDisplayPassword('');
            setIsTherepassword(false);
            
            

        } else {

        dispatch(setEmail(displayMail))
        dispatch(setPassword(displayPassword))


		dispatch(fetchOrUpdateLogin(store));
        
        }
        
        

	};

    const handleChangeRememberMe = () => {
		setRememberMe(!rememberMe);
        
        
	};

    



    return (
      
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input className={`${isThereMail ? "" : "error-form"}`}
                        type="text"
                        id="username" 
                        
                        defaultValue={lastMail}
                        onChange={(e) => setDisplayMail(e.target.value)}
                        autoComplete="on"
                        />
                        <i className="error-text">{isThereMail ? ("") : ("This field is required")}</i>
                    </div>
                    
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input className={`${isTherePassword ? "" : "error-form"}`}
                        type="password"
                        id="password"
                        
                        onChange={(e) => setDisplayPassword(e.target.value)}
                        
                        />
                        <i className="error-text">{isTherePassword ? ("") : ("Password does not match")}</i>
                    </div>
                    
                    <div className="input-remember">
                        <label htmlFor="remember-me">Remember me</label>
                        <input
                        type="checkbox"
                        id="remember-me"
                        checked={rememberMe} 
                        onChange={handleChangeRememberMe}
                        />
                    </div>
                    <button className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
      
   );
};



export default SignIn;