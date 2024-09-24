const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

const todos = [
  { id : 1, title : "Learn Node.js", completed : false },
  { id : 2, title : "Learn Express", completed : false },
];

app.get("/todos", (req, res) => {
  res.send(todos);
});

app.post("/todos", (req, res) => {
  console.log(req.body);
  todos.push(req.body);
  res.status(201).send(req.body);
});

app.post("/todos", (req, res) => {
  const newTodo = { ...req.body, id : Math.random() };
  todos.push(newTodo);
  res.status(201).send(newTodo);
});

app.get("/todos/:id", (req, res) => {
  const id = +req.params.id;
  const todo = todos.find((todo) => todo.id === id);
  res.send(todo);
});