import "./App.css";
import { createContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { FinalForm } from "./FinalForm";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

export const Context = createContext();

const initialState = {
  count : 0,
};

const todosInitialState = {
  todos : [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count : state.count + 1,
      };
    case "DECREMENT":
      return {
        count : state.count - 1,
      };
    default:
      return state;
  }
};

const addTodo = (state = todosInitialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos : [...state.todos, action.payload],
      };
    default:
      return state;
  }
};

export const store = configureStore({
  reducer : {
    count : reducer,
    todos : addTodo,
  },
});

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
