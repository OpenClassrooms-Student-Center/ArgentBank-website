import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/api/v1/user",
    prepareHeaders: (headers, { getState }) => {
      const state = getState();
      const users = state.users;

      console.log("État des utilisateurs :", state.users);
      if (users) {
        console.log("Entités des utilisateurs :", users.entities);
      } else {
        console.error("État des utilisateurs non défini");
      }

      if (users && users.entities && Object.keys(users.entities).length > 0) {
        const userId = Object.keys(users.entities)[0]; // Récupère le premier utilisateur
        const user = users.entities[userId];
        if (user && user.token) {
          headers.set("authorization", `Bearer ${user.token}`);
        } else {
          console.warn(
            `Utilisateur avec l'ID ${userId} non trouvé ou token manquant`
          );
        }
      } else {
        console.error("État des utilisateurs non défini ou pas d'entités");
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    signup: builder.mutation({
      query: (userData) => ({
        url: "/signup",
        method: "POST}),",
        body: userData,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    getProfile: builder.query({
      query: (userData) => ({
        url: "/profile",
        method: "POST",
        body: userData,
      }),
    }),
    updateProfile: builder.mutation({
      query: (updatedProfile) => ({
        url: "/profile",
        method: "PUT",
        body: updatedProfile,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useGetProfileQuery,
  useUpdateProfileMutation,
} = api;

export default api;
