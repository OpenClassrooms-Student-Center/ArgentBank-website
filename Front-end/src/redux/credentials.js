const initialState = {
	
	
    email: '',
    password: '',
    

	
};

export const setEmail = (email) => ({type: 'SET_EMAIL', payload: email});
export const setPassword = (password) => ({type: 'SET_PASSWORD', payload: password});

export default function credentialsReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_EMAIL':
          return { ...state, email: action.payload };
        case 'SET_PASSWORD':
          return { ...state, password: action.payload };
        default:
          return state;
      }
}
