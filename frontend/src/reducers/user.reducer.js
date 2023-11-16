//user.reducer.js

const initialstate = {
    isAuth: false,
    token:null,
};

export default function userReducer(state = initialstate, action) {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                isAuth: true,
                token: action.payload,
            };
        case "LOGOUT":
            return {
                isAuth: false,
                token: null,
            };
        case "UPDATE_USER":
            return {
                ...state,
                token: action.payload,
            };
        default:
            return state;
    }
};