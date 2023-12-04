
import produce from "immer";
import { selectLogin, selectCredentials } from "./selectors";


const initialState = {
	
	status: 'void',
    data: null,
	error: null,

    token: null,
    isConnected: false,

    url: 'http://localhost:3001/api/v1/user/login',

	
};



const FETCHING = 'login/fetching';
const RESOLVED = 'login/resolved';
const REJECTED = 'login/rejected';
const SIGNING_OUT = 'login/signingOut';


const loginFetching = () => ({type : FETCHING});
const loginResolved = (data) => ({type : RESOLVED, payload : data});
const loginRejected = (error) => ({type : REJECTED, payload : error});

export const signingOut = () => ({type: 'SIGNING_OUT'});





export default function loginReducer(state = initialState, action) {
    return produce(state, draft => {
        switch (action.type) {
            case FETCHING: {
                if(draft.status === 'void') {
                    draft.status = 'pending';
                    return
                }
                if (draft.status === 'rejected') {
                    draft.error = null
                    draft.status = 'pending'
                    return
                }
                if (draft.status === 'resolved') {
                    draft.status = 'updating'
                    return
                }
                return;                
            }
            case RESOLVED: {
                if (draft.status === 'pending' || draft.status === 'updating') {
                    
                    draft.data = action.payload
                    draft.isConnected = true
                    draft.token = action.payload.body.token
                    draft.status = 'resolved'
                    return
                }
                return

            }
            case REJECTED: {
                if (draft.status === 'pending' || draft.status === 'updating') {
                    draft.error = action.payload
                    draft.data = null
                    draft.isConnected = false
                    draft.token = ''
                    draft.status = 'rejected'
                    return
                }
                return

            }
            case SIGNING_OUT: {
                return initialState;
            }
            
            default:
                return
        }
    });
}

export function fetchOrUpdateLogin(store) {
    return async function() {
    
    
        const status = selectLogin(store.getState()).status;
        
        
        if (status === 'pending' || status === 'updating') {
        
        return
        }
        
        store.dispatch(loginFetching())
        
        try {
            
            const email = selectCredentials(store.getState()).email;
            const password = selectCredentials(store.getState()).password;
            const url = selectLogin(store.getState()).url;

        
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: email,
                    password: password,
                })
                });
            const data = await response.json();
            
                
            store.dispatch(loginResolved(data));
            
            
        } catch (error) {
        
        store.dispatch(loginRejected(error))
        
        }
    }
}

export function logOut(store) {
    return {type : SIGNING_OUT};

}
