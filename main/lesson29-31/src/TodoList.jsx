import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./todosSlice";

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

export const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      dispatch(addTodo(inputValue));
      setInputValue("");
    }
  };

  return (
    <div>
      <h2>Redux Todo List</h2>
      <FieldText value={inputValue} onChange={handleInputChange}/>
      <AddButton onClick={handleAddTodo}/>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};
