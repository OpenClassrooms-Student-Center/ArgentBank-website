//FONCTIONNEL MAIS PAS OPTIMAL


import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { setCredentials, logOut } from '../../features/auth/authSlice'

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:3001/api/v1',
    credentials: 'include',
    prepareHeaders: (headers, {getState})=>{
        const token = getState().auth.token
        if(token){
            headers.set("Authorization", `Bearer ${token}`)
        }
        return headers
    }
})


const baseQueryWithReauth = async (args, api, extraOptions)=>{
    let result = await baseQuery(args, api, extraOptions)

    if(result?.error?.originalStatus === 403) {
        console.log('sending refresh token')
    }


}