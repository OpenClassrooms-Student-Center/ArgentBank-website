import produce from "immer";
import { selectUser, selectLogin } from "./selectors";

const initialState = {
	
	
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  userName: '',

  
  data: null,
  error: null,
  url: 'http://localhost:3001/api/v1/user/profile',

  userNameIsThere: false,
  
	
};


const U_RESOLVED = 'user/resolved';
const U_REJECTED = 'user/rejected';



const userResolved = (data) => ({type : U_RESOLVED, payload : data});
const userRejected = (error) => ({type : U_REJECTED, payload : error});


export const setUserName = (userName) => ({type: 'SET_USER_NAME', payload: userName});
const noUserName = ({type : 'NO_USER_NAME'})

export default function userReducer(state = initialState, action) {
  return produce(state, draft => {
      switch (action.type) {

        
          case U_RESOLVED: {
                
            
            draft.data = action.payload
            draft.firstName = action.payload.body.firstName
            draft.lastName = action.payload.body.lastName
            draft.userName = action.payload.body.userName
            if (draft.userName !== '') {
              draft.userNameIsThere = true
            } else {
              draft.userNameIsThere = false
            }
            
            return
              
              

          }
          case U_REJECTED: {
              
                  draft.error = action.payload


                  
                  return
              

          }
          case 'SET_USER_NAME':
          return { ...state, userName: action.payload };

          case 'NO_USER_NAME':
            
            draft.userNameIsThere = false
            return;
          
          default:
              return
      }
  });
}

export function fetchProfile(store) {
  
  return async function() {
    
  
  
      
     
      try {
          
          
          const url = selectUser(store.getState()).url;
          const token = selectLogin(store.getState()).token;
      
          const response = await fetch(url, {
              method: "POST",
              headers: { "Content-Type": "application/json",
                "Authorization": "Bearer " + token },
  
              });
          
          const data = await response.json();
          
          
          store.dispatch(userResolved(data));
          
          
      } catch (error) {
      
      store.dispatch(userRejected(error))
      
      }
  }
}

export function updateProfile(store) {
  return async function() {
    

    try {
        
        
        const url = selectUser(store.getState()).url;
        const token = selectLogin(store.getState()).token;
        const userName = selectUser(store.getState()).userName;
        
        if (userName === '') {
          
          store.dispatch(noUserName)

        } else {
          await fetch(url, {
            method: "PUT",
            headers: { "Content-Type": "application/json",
              "Authorization": "Bearer " + token },
            body: JSON.stringify({
              "userName" : userName
          })

            });
        
        
        }

        
        
        
        
    } catch (error) {
    
    store.dispatch(userRejected(error))
    
    }
}
}