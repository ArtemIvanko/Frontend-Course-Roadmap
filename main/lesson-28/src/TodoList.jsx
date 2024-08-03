import { Formik } from "formik";
import { useState } from "react";

export const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (values, { resetForm }) => {
    setTodos([
      ...todos,
      {
        id : todos.length + 1,
        title : values.todo,
      },
    ]);
    resetForm();
  };

  return (
    <div>
      <h1>Todo List</h1>
      <Formik
        initialValues={{ todo : "" }}
        onSubmit={addTodo}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="todo"
              value={values.todo}
              onChange={handleChange}
            />
            <button type="submit">Add</button>
          </form>
        )}
      </Formik>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};