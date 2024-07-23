$(document).ready(function () {
  let todoList = $("#todo-list");

  $("#add-todo").click(function () {
    let newTodo = prompt("Enter your new ToDo item:");
    if (newTodo) {
      let newItem = $("<li class=\"list-group-item\"></li>").text(newTodo);
      newItem.click(function () {
        $("#modal-body").text($(this).text());
        $("#todoModal").modal("show");
      });
      todoList.append(newItem);
    }
  });

  $(document).on("click", ".list-group-item", function () {
    $("#modal-body").text($(this).text());
    $("#todoModal").modal("show");
  });
});
