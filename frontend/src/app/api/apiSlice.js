// apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { logOut, setNewToken } from '../../features/auth/authSlice';

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:3001/api/v1/user',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token;
        console.log('/////////////')
        console.log('[API] token getstate:',token);
        if (token) {
            console.log('[API] token headers:',token);
            headers.set('Authorization', `Bearer ${token}`);
        }
        console.log('/////////////')

        return headers;
    }
});

const baseQueryWithReAuth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    if (result?.error?.status === 401 || result?.error?.status === 403) {
      console.log("[API]Envoi nouveau tokenn");
  
      const refreshResult = await baseQuery(
        { url: "/refresh", method: "POST" },
        api,
        extraOptions
      );
      console.log("API]refresh result : ", refreshResult.data.token);
  
      if (refreshResult?.data) {
        // store the new token
        console.log("API]Nouveau token: ", refreshResult?.data?.token);
        api.dispatch(setNewToken({ token: refreshResult?.data?.token }));
  
        // retry original query with new access token
        result = await baseQuery(args, api, extraOptions);
        console.log(result);
      } else {
        if (refreshResult?.error?.status === 403) {
          refreshResult.error.data.message = "API]Vous avez été deconnecté.";
          api.dispatch(logOut());
        }
        console.log("API]Ne fonctionne pas: ", refreshResult);
        return refreshResult;
      }
    }
    return result;
  };

export const apiSlice = createApi({
    baseQuery: baseQueryWithReAuth,
    endpoints: (builder) => ({}),
});