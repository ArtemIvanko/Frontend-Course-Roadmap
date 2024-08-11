import "./App.css";
import { createContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { FinalForm } from "./FinalForm";
import { Provider } from "react-redux";
import { store } from "./store";

export const Context = createContext();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router>
          <FinalForm/>
        </Router>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
