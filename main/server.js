const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const todoRoutes = require("./routes/todos");

const app = express();

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

mongoose.connect("mongodb://localhost:27017/todoapp", {
  useNewUrlParser : true,
  useUnifiedTopology : true,
})
.then(() => console.log("MongoDB connected..."))
.catch(err => console.error(err));

app.use("/api/todos", todoRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
