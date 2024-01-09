// profileApiSlice.js
import { apiSlice } from '../../app/api/apiSlice';

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
      user: builder.query({
        query: () => ({
          url: "/profile",
          method: "POST",
          body: {},
        }),
        providesTags: ["user"],
      }),
      updateUser: builder.mutation({
        query: (username) => ({
          url: "/profile",
          method: "PUT",
          body: {...username},
        }),
        invalidatesTags: ["user"],
      }),
    }),
  });
  
  export const { useUserQuery, useUpdateUserMutation } = userApiSlice;