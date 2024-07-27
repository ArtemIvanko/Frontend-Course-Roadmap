document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("todo-form");
  const input = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");

  loadTodos();

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = input.value.trim();
    if (title) {
      createTodo(title);
      input.value = "";
    }
  });

  function loadTodos() {
    fetch("/api/todos")
    .then(response => response.json())
    .then(todos => {
      todoList.innerHTML = "";
      todos.forEach(todo => {
        const todoItem = createTodoElement(todo);
        todoList.appendChild(todoItem);
      });
    });
  }

  function createTodo(title) {
    fetch("/api/todos", {
      method : "POST",
      headers : { "Content-Type" : "application/json" },
      body : JSON.stringify({ title }),
    })
    .then(response => response.json())
    .then(todo => {
      const todoItem = createTodoElement(todo);
      todoList.appendChild(todoItem);
    });
  }

  function createTodoElement(todo) {
    const div = document.createElement("div");
    div.className = "todo-item";
    div.innerHTML = `
            <input type="checkbox" ${todo.completed ? "checked" : ""} onchange="toggleComplete('${todo._id}', this)">
            <span>${todo.title}</span>
            <button onclick="deleteTodo('${todo._id}')">Delete</button>
        `;
    return div;
  }

  window.toggleComplete = function (id, checkbox) {
    fetch(`/api/todos/${id}`, {
      method : "PUT",
      headers : { "Content-Type" : "application/json" },
      body : JSON.stringify({ completed : checkbox.checked }),
    })
    .then(response => response.json())
    .then(todo => {
      checkbox.parentElement.querySelector("span").textContent = todo.title;
    });
  };

  window.deleteTodo = function (id) {
    fetch(`/api/todos/${id}`, {
      method : "DELETE",
    })
    .then(() => {
      loadTodos();
    });
  };
});
