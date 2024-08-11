import { useState, useEffect } from "react";

export const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const todosStorage = JSON.parse(localStorage.getItem("todos"));
    if (todosStorage) {
      setTodos(todosStorage);
    }
  }, []);

  const addTodo = () => {
    const newTodos = [...todos, inputValue];
    setTodos(newTodos);
    setInputValue("");

    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  return (
    <div>
      <h2>TodoList</h2>
      <input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
};
