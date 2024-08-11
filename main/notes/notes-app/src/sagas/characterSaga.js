import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function fetchCharactersApi() {
  return axios.get("https://swapi.dev/api/people/");
}

function * fetchCharacters() {
  try {
    const response = yield call(fetchCharactersApi);
    yield put({ type : "FETCH_CHARACTERS_SUCCESS", payload : response.data.results });
  } catch (error) {
    yield put({ type : "FETCH_CHARACTERS_FAILURE", error : error.message });
  }
}

function * characterSaga() {
  yield takeLatest("FETCH_CHARACTERS_REQUEST", fetchCharacters);
}

export default characterSaga;
