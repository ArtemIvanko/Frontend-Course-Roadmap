import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name : "todos",
  initialState : [],
  reducers : {
    addTodo : (state, action) => {
      state.push({ id : Date.now(), text : action.payload });
    },
    clearTodos : () => [],
  },
});

export const { addTodo, clearTodos } = todosSlice.actions;
export default todosSlice.reducer;
