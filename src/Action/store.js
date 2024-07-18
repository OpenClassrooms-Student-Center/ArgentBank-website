import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authSlice } from '../Action/authslice'
import { userSlice } from '../Action/User/userslice'

const state = {}

const store = configureStore({
    preloadedState: state,
    reducer: combineReducers({
        auth: authSlice.reducer,
        user: userSlice.reducer,
    }),
})

export default store
