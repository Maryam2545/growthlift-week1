require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const cors = require("cors");

const Task = require("./models/Task");

const app = express();

const authRoutes = require("./routes/auth"); 

const protect = require("./middleware/auth");
// Security middleware
app.use(helmet());
app.use(cors());

// JSON middleware
app.use(express.json());

app.use("/api/auth", authRoutes);
// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
  });


// GET all tasks
app.get("/api/tasks", protect, async (req, res, next) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    next(err);
  }
});


// GET one task
app.get("/api/tasks/:id", protect, async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: "Not found"
      });
    }

    res.json(task);

  } catch (err) {
    res.status(400).json({
      message: "Invalid ID format"
    });
  }
});


// POST new task
app.post("/api/tasks", protect, async (req, res, next) => {
 console.log("POST BODY:", req.body);
  // Input validation
  if (!req.body.title) {
    return res.status(400).json({
      message: "Title is required"
    });
  }

  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);

  } catch (err) {
    next(err);
  }
});


// PUT update task
app.put("/api/tasks/:id", protect, async (req, res) => {
  try {

    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!task) {
      return res.status(404).json({
        message: "Not found"
      });
    }

    res.json(task);

  } catch (err) {

    // Invalid MongoDB ID
    if (err instanceof mongoose.Error.CastError) {
      return res.status(400).json({
        message: "Invalid ID format"
      });
    }

    res.status(500).json({
      message: "Something went wrong on the server"
    });
  }
});


// DELETE task
app.delete("/api/tasks/:id", protect, async (req, res) => {
  
  try {

    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: "Not found"
      });
    }

    res.json({
      message: "Task deleted successfully"
    });

  } catch (err) {

    res.status(400).json({
      message: "Invalid ID format"
    });

  }
});


// 404 handler for unknown routes
app.use((req, res) => {
  res.status(404).json({
    message: "Route not found"
  });
});


// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    message: "Something went wrong on the server"
  });
});


// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});