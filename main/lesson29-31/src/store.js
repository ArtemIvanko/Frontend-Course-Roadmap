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
