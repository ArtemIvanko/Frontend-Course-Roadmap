import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function fetchTodosApi() {
  return axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5");
}

function * fetchTodos() {
  try {
    const response = yield call(fetchTodosApi);
    yield put({ type : "FETCH_TODOS_SUCCESS", payload : response.data });
  } catch (error) {
    yield put({ type : "FETCH_TODOS_FAILURE", error : error.message });
  }
}

function * watchFetchTodos() {
  yield takeEvery("FETCH_TODOS_REQUEST", fetchTodos);
}

export default watchFetchTodos;
