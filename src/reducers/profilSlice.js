import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom';
import { changeUserName,getUserInfo,logUser } from "../services";
import { useDispatch } from 'react-redux';

const initialState = {
   firstName: null,
   lastName: null,
   userName: null,
   error: false,
   isLoading: false,
   token: null,
}
const dispatch = useDispatch;
const navigate = useNavigate;
/**
 * cette fonction appel l'API login est retourne le token . L'état de la requête est verifier durant l'appel .
 */
export const logIn = createAsyncThunk(
    'profil/logIn',
    async (identify) => {
      const result = await logUser(identify).then(data => {
        const check = JSON.parse(identify);
        const token = data.body?.token;
      if(check.checked === true){
        localStorage.setItem('token', token);
      }
        sessionStorage.setItem('token', token)

        return data   
    })
    if(result.status === 200){
      return result;
    }
    else{
      throw new Error(result.message);
    }
    
});

/**
 * cette fonction effectue une requête PUT à l'API Profil  et retourne les informations de l'utilisateur avec le userName modifié  . L'état de la requête est verifier durant l'appel .
 */

export const changeTheUserName = createAsyncThunk(
  'profil/changeTheUserName',
  async (userName) => {
    const result = await changeUserName(userName);
    if(result.status === 200){
      return result;
    }
    else if(result.status === 401 || result.status === 403){
      localStorage.clear();
      sessionStorage.clear();
      dispatch(setToken(null));
      navigate('/logIn');
    }
    else{
      throw new Error(result.message);
    }
});


/**
 * cette fonction effectue une requête POST à l'API Profil  et retourne les informations de l'utilisateur . L'état de la requête est verifier durant l'appel .
 */
export const getUser = createAsyncThunk(
  'profil/getUser',
  async () => {
    const result = await getUserInfo()
    if(result.status === 200){
      return result;
    }
    else if(result.status === 401 || result.status === 403){
      localStorage.clear();
      sessionStorage.clear();
      dispatch(setToken(null));
      navigate('/logIn');
    }  
    throw new Error(result.message);
});


/**
 * Le profilSlice prend en paramètre l'état initial de notre application, séléctionne un état en particulier grace au reducer et  met à jour cette état grace au paramétre transmis dans le payload ou action.
 * l'extra reducers quand à lui gère l'état de nos requête à l'API et met à jours nos différent état en fonction de l'état de la requête (pending, fulfilled, rejected).
 */

const profilSlice = createSlice({
    name: 'profil',
    initialState,
    reducers: {
        setFirstName: (state, {payload}) => {
            state.firstName = payload
        },
        setLastName: (state, {payload}) => {
          state.lastName = payload
      },
        setUserName: (state, {payload}) => {
          state.userName = payload
        },
        setError: (state, {payload}) => {
            state.error = payload
        },
        setIsLoading: (state, {payload}) => {
            state.isLoading = payload
        },
        setToken: (state, {payload}) => {
            state.token = payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(logIn.pending, (state) => {
          state.isLoading = true;
          state.firstName = null;
          state.lastName = null;
          state.userName = null;
          state.error = false;
        })
        builder.addCase(logIn.fulfilled, (state, {payload}) => {
          state.isLoading = false;
          state.token = payload.body?.token;
          state.error = false;
        })
        builder.addCase(logIn.rejected, (state) => {
          state.isLoading = false;
          state.firstName = null;
          state.lastName = null;
          state.userName = null;
          state.error = true;
        })
        builder.addCase(changeTheUserName.pending, (state) => {
          state.isLoading = true;
          state.userName = null;
          state.error = false;
        })
        builder.addCase(changeTheUserName.fulfilled, (state, {payload}) => {
          state.isLoading = false;
          state.userName = payload.body?.userName;
          state.error = false;
        })
        builder.addCase(changeTheUserName.rejected, (state) => {
          state.isLoading = false;
          state.firstName = null;
          state.lastName = null;
          state.userName = null;
          state.error = true;
        })
        builder.addCase(getUser.pending, (state) => {
          state.isLoading = true;
          state.firstName = null;
          state.lastName = null;
          state.userName = null;
          state.error = false;
        })
        builder.addCase(getUser.fulfilled, (state, {payload}) => {
          state.isLoading = false;
          state.firstName = payload.body?.firstName;
          state.lastName = payload.body?.lastName;
          state.userName = payload.body?.userName;
          state.error = false;
        })
        builder.addCase(getUser.rejected, (state, {payload}) => {
          state.isLoading = false;
          state.firstName = null;
          state.lastName = null;
          state.userName = null;
          state.error = payload;
        })
      }
})

export const {setFirstName,setLastName, setError, setIsLoading, setToken, setUserName} = profilSlice.actions;
export default profilSlice.reducer;