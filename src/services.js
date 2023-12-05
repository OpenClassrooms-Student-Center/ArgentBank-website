import { useNavigate } from "react-router-dom"
import compareStorage from './utils/compareStorage'


/**
  * Cette fonction fait appel à l'API login et retourne le JWT si les identifiants envoyé sont correctes.
  */
async function logUser(infoUser) {
    const request = await fetch('http://localhost:3001/api/v1/user/login',{
        method : "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: infoUser
    })
    const result = await request.json();
    return result
}

/**
  * Cette fonction fait appel à l'API Profil et modifie le userName de l'utilisateur .
  */
async function changeUserName(userName){
    const token = compareStorage();
    const modifUserName = {
        userName: userName
    }
    const identifyUserName = JSON.stringify(modifUserName);
    const request = await fetch('http://localhost:3001/api/v1/user/profile',{
        method : "PUT",
        headers: {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json',
            'Authorization' : 'Bearer ' + token
        },
        body: identifyUserName
    })

    const result = await request.json();
    return result
};

/**
  * Cette fonction fait appel à l'API Profil et retourne les informations de l'utilisateur .
  */
async function getUserInfo(){
    const token = compareStorage();
    const navigate = useNavigate;
    const request = await fetch('http://localhost:3001/api/v1/user/profile',{
        method : "POST",
        headers: {
            'Accept' : 'application/json',
            'Authorization' : 'Bearer ' + token
        },
    })
     if(request.status === "401" || request.status === "403"){
        navigate('/logIn');
    }
    const result = await request.json();
    return result;
};

export {logUser, changeUserName, getUserInfo}