import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style/main.css';

//REDUX
import { Provider } from 'react-redux';
import store from './Store/store.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);