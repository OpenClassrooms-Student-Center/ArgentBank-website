import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import loginReducer from './login'
import credentialsReducer from './credentials';
import userReducer from './user'


import storage from 'redux-persist/lib/storage';
import { persistStore, persistCombineReducers } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
}



const persistedReducer = persistCombineReducers(persistConfig, {
  login : loginReducer,
  credentials : credentialsReducer,
  user : userReducer
})



const store = configureStore({
  reducer: persistedReducer,
  middleware : [thunk],
  devTools: process.env.NODE_ENV
  });

export default store;
export  const persistore = persistStore(store);