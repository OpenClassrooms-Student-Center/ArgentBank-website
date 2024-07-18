import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    email: '',
    firstName: '',
    lastName: '',
    id: '',
    createdAt: '',
    updatedAt: '',
}

const BASE_URL = 'http://localhost:3001/api/v1/user/profile'

export const fetchUserData = createAsyncThunk(
    'user/getUserData',
    async (token,{rejectWithValue}) => {
        try{
            const response = await fetch (BASE_URL, {
                method: 'POST',
                headers: {Authorization: 'Bearer $ {token}', 'Content-Type': 'application/json'},
            });
        if (!response.ok) {
            throw new Error(response.statusText);
            }
            const data = await response.json();
            return data.body;
        } catch (error){
            return rejectWithValue(error.message);
        }
    }
);
     

export const updateUserData = createAsyncThunk(
    'user/updateUserData',
    async (data, {rejectWithValue}) => {
        try{
        const response = await fetch(BASE_URL,{
            method: 'put',
            headers: {Authorization: 'Bearer $ {token}', 'Content-Type': 'application/json'},
            body: JSON.stringify(data.userNames),
        });
        if (!response.ok){
            throw new Error(response.statusText);
        }
        const responseData = await response.json();    
        return responseData.body;
    } catch (error) {
        return rejectWithValue(error.message);
    }
}
);

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        emptyUserData(state) {
            state.email = ''
            state.firstName = ''
            state.lastName = ''
            state.id = ''
            state.createdAt = ''
            state.updatedAt = ''
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserData.fulfilled, (state, { payload }) => {
                state.email = payload.email
                state.firstName = payload.firstName
                state.lastName = payload.lastName
                state.id = payload.id
                state.createdAt = payload.createdAt
                state.updatedAt = payload.updatedAt
            })
            .addCase(updateUserData.fulfilled, (state, { payload }) => {
                state.firstName = payload.firstName
                state.lastName = payload.lastName
                state.updatedAt = payload.updatedAt
            })
    },
})

// selectors
export const getUserData = (state) => state.user

//actions
export const { emptyUserData } = userSlice.actions

//reducers
export const userReducer = userSlice.reducer