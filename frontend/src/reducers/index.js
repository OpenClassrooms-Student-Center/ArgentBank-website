//Reducers/index.js

import { combineReducers } from "redux";
import userReducer from "./user.reducer";

export default combineReducers({
    // REDUCERS
    user: userReducer,
});