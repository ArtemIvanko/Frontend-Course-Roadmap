import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

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

const characterInitialState = {
  characters : [],
  loading : false,
  error : null,
};

const characterReducer = (state = characterInitialState, action) => {
  switch (action.type) {
    case "FETCH_CHARACTERS_REQUEST":
      return { ...state, loading : true, error : null };
    case "FETCH_CHARACTERS_SUCCESS":
      return { ...state, loading : false, characters : action.payload };
    case "FETCH_CHARACTERS_FAILURE":
      return { ...state, loading : false, error : action.error };
    default:
      return state;
  }
};

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer : {
    count : reducer,
    todos : addTodo,
    character : characterReducer,
  },
  middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
