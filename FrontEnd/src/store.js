import { configureStore } from "@reduxjs/toolkit";
import  useReducer  from "./helpers/features/userSlice";


export default configureStore({
    reducer:{
        user:useReducer
    }
})