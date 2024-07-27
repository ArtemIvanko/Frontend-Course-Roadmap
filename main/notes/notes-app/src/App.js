import "./App.css";
import { createContext } from "react";
import { Container } from "./Container";
import { BrowserRouter } from "react-router-dom";

export const Context = createContext();

function App() {
  return (
    <BrowserRouter>
      <Context.Provider value={{}}>
        <Container/>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
