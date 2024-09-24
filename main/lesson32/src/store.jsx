import { configureStore } from "@reduxjs/toolkit";
import swapiReducer from "./pages/Swapi";
import { thunk } from "redux-thunk";

export const store = configureStore({
  reducer : {
    swapi : swapiReducer,
  },
  middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});