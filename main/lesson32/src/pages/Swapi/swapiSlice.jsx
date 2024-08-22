import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data : [],
  status : "idle",
  error : null,
};

const swapiSlice = createSlice({
  name : "swapi",
  initialState,
  reducers : {
    fetchDataStart(state) {
      state.status = "loading";
    },
    fetchDataSuccess(state, action) {
      state.status = "succeeded";
      state.data = action.payload;
    },
    fetchDataFailure(state, action) {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = swapiSlice.actions;
export default swapiSlice.reducer;

export const fetchSwapiData = () => async (dispatch) => {
  dispatch(fetchDataStart());
  try {
    const response = await fetch("https://swapi.dev/api/people/");
    const data = await response.json();
    dispatch(fetchDataSuccess(data.results));
  } catch (error) {
    dispatch(fetchDataFailure(error.toString()));
  }
};
