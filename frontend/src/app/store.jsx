import { configureStore } from "@reduxjs/toolkit";
import userReducer, { setUser } from "../reducer/UserSlice";
import { api } from "../components/api";

const store = configureStore({
  reducer: {
    users: userReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

const token = sessionStorage.getItem("token");
if (token) {
  const user = JSON.parse(sessionStorage.getItem("user"));
  store.dispatch(
    setUser({
      userId: user.userId,
      token,
      userName: user.userName,
      firstName: user.firstName,
      lastName: user.lastName,
    })
  );
}
export default store;
