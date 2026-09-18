require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const Task = require("./models/Task");

const app = express();
const PORT = 3000;

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// GET all tasks
app.get("/api/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// POST new task
app.post("/api/tasks", async (req, res) => {
  const task = await Task.create({
    title: req.body.title
  });

  res.status(201).json(task);
});

// GET one task
app.get("/api/tasks/:id", async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    return res.status(404).json({ message: "Not found" });
  }

  res.json(task);
});

// PUT update task
app.put("/api/tasks/:id", async (req, res) => {
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(task);
});

// DELETE task
app.delete("/api/tasks/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);

  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});