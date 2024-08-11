// src/reducers/characterReducer.js
const initialState = {
  characters : [],
  loading : false,
  error : null,
};

export default function characterReducer(state = initialState, action) {
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
}
