import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name : "todos",
  initialState : { todos : [] },
  reducers : {
    addTodo : (state, action) => {
      state.todos.push(action.payload);
    },
    clearTodos : (state) => {
      state.todos = [];
    },
  },
});

export const { addTodo, clearTodos } = todosSlice.actions;
export default todosSlice.reducer;
