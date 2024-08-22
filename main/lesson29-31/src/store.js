import { configureStore } from "@reduxjs/toolkit";
import swapiReducer from "./swapiSlice";
import todosReducer from "./todosSlice";
import { thunk } from "redux-thunk";

export const store = configureStore({
  reducer : {
    swapi : swapiReducer,
    todos : todosReducer,
  },
  middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

const initialState = {
  count : 0,
};

// const addTodo = (state = todosInitialState, action) => {
//   switch (action.type) {
//     case "ADD_TODO":
//       return {
//         ...state,
//         todos : [...state.todos, action.payload],
//       };
//     default:
//       return state;
//   }
// };
//
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return {
//         count : state.count + 1,
//       };
//     case "DECREMENT":
//       return {
//         count : state.count - 1,
//       };
//     default:
//       return state;
//   }
// };
//
// export const store = createStore(combineReducers({ todos : addTodo, reducer }));
