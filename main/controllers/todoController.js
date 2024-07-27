const Todo = require("../models/Todo");

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message : err.message });
  }
};

exports.createTodo = async (req, res) => {
  const { title } = req.body;
  const newTodo = new Todo({
    title,
    completed : false,
  });

  try {
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (err) {
    res.status(400).json({ message : err.message });
  }
};

exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { title, completed },
      { new : true },
    );

    if (!updatedTodo) {
      return res.status(404).json({ message : "Todo not found" });
    }

    res.json(updatedTodo);
  } catch (err) {
    res.status(400).json({ message : err.message });
  }
};

exports.deleteTodo = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTodo = await Todo.findByIdAndDelete(id);  // Використовуємо findByIdAndDelete

    if (!deletedTodo) {
      return res.status(404).json({ message : "Todo not found" });
    }

    res.json({ message : "Todo deleted" });
  } catch (err) {
    res.status(500).json({ message : err.message });
  }
};
