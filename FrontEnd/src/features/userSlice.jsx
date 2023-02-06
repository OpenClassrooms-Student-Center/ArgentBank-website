import {createSlice} from "@reduxjs/toolkit"



export const userSlice= createSlice({
    name:"user",
    
    initialState:{
        user:null,
        data:null
       
    },
    reducers:{
        login:(state,action)=>{
            state.user=action.payload;
        },
        logout:(state)=>{
            state.user=null;
        },
        body:(state, action)=>{
            state.body=action.payload;
        },
    },
});

export const {login,logout}=userSlice.actions;
export const{body}=userSlice.actions;
export const selectUser=(state)=>state.user.user;

export default userSlice.reducer;