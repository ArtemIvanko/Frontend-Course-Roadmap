export const fetchTodosRequest = () => ({
  type : "FETCH_TODOS_REQUEST",
});

export const addTodo = (todo) => ({
  type : "ADD_TODO",
  payload : todo,
});

export const removeTodo = (id) => ({
  type : "REMOVE_TODO",
  payload : id,
});
