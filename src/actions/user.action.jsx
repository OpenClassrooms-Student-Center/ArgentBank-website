// FONCTIONNEL MAIS PAS OPTIMAL


import axios from "axios";

export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";

// Action pour gérer la connexion réussie de l'utilisateur
export const userLoginSuccess = () => ({
    type: USER_LOGIN_SUCCESS,
  });
  
  // Action pour gérer l'échec de connexion de l'utilisateur
  export const userLoginFailure = (error) => ({
    type: USER_LOGIN_FAILURE,
    payload: error,
  });

  //pour le login on a besoin de 2 params :
  // email : string
  //password : string
  //si connection ok => renvoi un token : string
  // avec token, on peut se connecter à la page profile

  export const loginUser = (email, password, navigate, rememberMe) => {
    return async (dispatch) => {
      try {
        const response = await axios.post(
          "http://localhost:3001/api/v1/user/login",
          {
            email: email,
            password: password,
          }
        );
  
        if (response.status === 200) {
          const token = response.data.body.token;
          
          if (rememberMe) {
            localStorage.setItem("token", token);
          } else {
            sessionStorage.setItem("token", token);
          }
          navigate("/user-account");
          dispatch(userLoginSuccess());
        } else {
          localStorage.removeItem("token");
          sessionStorage.removeItem("token");
        }
  
        if (response.status === 401) {
          localStorage.removeItem("token");
          sessionStorage.removeItem("token");
          navigate("/login");
        }
      } catch (error) {
        dispatch(userLoginFailure("identifiants incorrects"));
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
      }
    };
  };
  