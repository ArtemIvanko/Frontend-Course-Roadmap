import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import swapiReducer from "./swapiSlice";
import todosReducer from "./todosSlice";
import rootSaga from "./sagas";
import { thunk } from "redux-thunk";
import { sagaTodosReducer } from "./sagaTodoReducer";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer : {
    swapi : swapiReducer,
    todos : todosReducer,
    sagaTodos : sagaTodosReducer,
  },
  middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk, sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
