import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  const handleAddTask = () => {
    if (!task.trim()) {
      setError("Task cannot be empty");
      return;
    }

    setTasks([...tasks, task]);
    setTask("");
    setError("");
  };

  return (
    <div className="App">
      <h1>TODO</h1>
      <input
        type="text"
        placeholder="Add your task here"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>
      {error && <p role="alert">{error}</p>}
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
