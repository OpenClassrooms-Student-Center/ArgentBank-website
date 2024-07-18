import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './Action/store';
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
