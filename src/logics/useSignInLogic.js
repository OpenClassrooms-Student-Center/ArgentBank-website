import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import loginUser from "../services/AuthApi";
import { userLogin } from "../Store/features/userSlice";

function useSignInLogic() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(""); 

    //utiliser dans la page login
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await loginUser({
                email: e.target["email"].value,
                password: e.target["password"].value, 
            });

            dispatch(
                userLogin({
                    token: response,
                    email: e.target["email"].value,
                    
                })
            );

            navigate("/profile");
        } catch (error) {
            console.log(error.message);
            error.message === "Invalid email and/or password"
                ? setErrorMessage("Invalid email and/or password ")
                : setErrorMessage("An error occurred during login");
        }
    };

    return {
        handleSubmit,
        errorMessage,
    };
}
export default useSignInLogic;