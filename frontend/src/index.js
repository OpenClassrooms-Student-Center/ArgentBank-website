import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// REDUX

import { Provider } from 'react-redux';
import {configureStore} from "@reduxjs/toolkit";
import rootReducer from './reducers';

const store = configureStore( {
  reducer: rootReducer,
  devTools: true,
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store= {store}>
    <App />
  </Provider>
);