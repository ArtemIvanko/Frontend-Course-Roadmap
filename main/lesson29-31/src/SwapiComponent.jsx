import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSwapiData } from "./swapiSlice";
import { addTodo, clearTodos } from "./todosSlice";

export const SwapiComponent = () => {
  const dispatch = useDispatch();
  const swapiData = useSelector((state) => state.swapi.data);
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchSwapiData());
  }, [dispatch]);

  const handleAddTodo = () => {
    dispatch(addTodo("New TODO"));
  };

  const handleClearTodos = () => {
    dispatch(clearTodos());
  };

  return (
    <div>
      <h1>Swapi Data</h1>
      <ul>
        {swapiData.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
      <h2>TODO List</h2>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <footer>
        <button onClick={handleClearTodos}>Clear TODOs</button>
      </footer>
    </div>
  );
};
