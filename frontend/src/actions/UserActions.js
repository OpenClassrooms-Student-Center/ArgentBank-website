// UserActions.js

// INIT
export const login = (user) => ({
    type: 'LOGIN',
    payload: user,
});

export const logout = () => ({
    type: 'LOGOUT',
});

export const setUser = (user) => ({
    type: 'SET_USER',
    payload: user,
});

// FETCH CONNEXION

export const fetchUserData = (userData) => {
    return async (dispatch) => {
      try {
        const userJSON = JSON.stringify(userData);
        const response = await fetch(
            'http://localhost:3001/api/v1/user/login',{
                method: 'POST',
                body: userJSON,
                headers: {
                    'Content-Type': 'application/json; charset =UTF-8',
                    'Accept': 'application/json',
                },
                }
        );
        if(response.ok){
            const responseData = await response.json();
            console.log('[ACTION] Données utilisateur récupérées:', responseData);
            dispatch(setUser(responseData));
            return responseData;
        } else {
            throw new Error('Erreur lors de la connexion');
        }
      } catch (error) {
        console.error(
            '[ACTION]Erreur lors de la récupération des données utilisateur:',
             error
        );
        throw error; 
      }
    };
  };

// MODIFICATION DU USERNAME

export const updateUser = (updatedUserData) => ({
type: 'SET_USER',
payload: updatedUserData,
});