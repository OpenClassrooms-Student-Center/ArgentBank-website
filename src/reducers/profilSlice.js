import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   user: null,
   error: false,
   isLoading: false,
}

const profilSlice = createSlice({
    name: 'profil',
    initialState,
    reducers: {
        setProfil: (state, {payload}) => {
            state.user = payload
        },
        setError: (state, {payload}) => {
            state.error = payload
        },
        setIsLoading: (state, {payload}) => {
            state.isLoading = payload
        }
    }
})

export const {setProfil, setError, setIsLoading} = profilSlice.actions;
export default profilSlice.reducer;