const Todo = require("../models/Todo");

exports.createTodo = async (req, res) => {
  try {
    const newTodo = new Todo({
      title : req.body.title,
    });
    const todo = await newTodo.save();
    res.json(todo);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      { title : req.body.title, completed : req.body.completed },
      { new : true },
    );
    res.json(todo);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ msg : "Todo removed" });
  } catch (err) {
    res.status(500).send("Server error");
  }
};
