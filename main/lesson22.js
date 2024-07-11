import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./styles.scss";

$(document).ready(() => {
  const todoList = $("#todo-list");

  const addTodoItem = (text) => {
    const newItem = $("<li class=\"list-group-item\"></li>").text(text);
    newItem.on("click", () => {
      $("#modal-body").text(newItem.text());
      $("#todoModal").modal("show");
    });
    todoList.append(newItem);
  };

  $("#add-todo").on("click", () => {
    const newTodo = prompt("Enter your new ToDo item:");
    if (newTodo) {
      addTodoItem(newTodo);
    }
  });
});
