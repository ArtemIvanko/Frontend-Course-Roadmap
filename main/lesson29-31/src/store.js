import { combineReducers, createStore } from "redux";

const todosInitialState = {
  todos : [],
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

export const store = createStore(combineReducers({ todos : addTodo }));