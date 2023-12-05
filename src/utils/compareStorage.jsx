  /**
  * Cette fonction compare le local storage et le session storage et retourne le token en fonction de la où il est stocker.
  */
  
  function compareStorage() {
    const token = sessionStorage.getItem('token');
    const locToken = localStorage.getItem('token');
    if(token !== null){
        return token;
    }else{
        return locToken;
    }
};


    
   export default compareStorage;