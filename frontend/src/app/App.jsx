import { Provider } from "react-redux";
import store from "./store";
import "../index.css";
import "../global.css";

import Router from "../components/routes/Router";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router />
      </div>
    </Provider>
  );
}

export default App;
