//user.reducer.js

const initialstate = {
    isAuth: false,
    user:null,
};

export default function userReducer(state = initialstate, action) {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                isAuth: true,
                user: action.payload,
            };
        case "LOGOUT":
            return {
                isAuth: false,
                user: null,
            };
        case "UPDATE_USER":
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
};