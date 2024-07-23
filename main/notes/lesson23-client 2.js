const response = async () => {
  return fetch("http://localhost:3000/todos", { // Изменили маршрут на /todos
    method : "POST",
    headers : {
      "Content-Type" : "application/json",
    },
    body : JSON.stringify({ title : "Learn React", completed : false }),
  });
};

await response();
