import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const FieldText = ({ value, onChange }) => {
  return (
    <input type="text" value={value} onChange={onChange}/>
  );
};

const AddButton = ({ onClick }) => {
  return (
    <button onClick={onClick}>Add</button>
  );
};

export const ReduxTodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addTodo = () => {
    if (inputValue.trim()) {
      dispatch({ type : "ADD_TODO", payload : inputValue });
      setInputValue("");
    }
  };

  return (
    <div>
      <h1>Redux Todo List</h1>
      <FieldText value={inputValue} onChange={handleInputChange}/>
      <AddButton onClick={addTodo}/>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};