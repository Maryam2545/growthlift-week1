const express = require("express");

const app = express();
const PORT = 3000;

// Middleware: request logging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Middleware: JSON body parsing
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to GrowthLift API");
});

// About route
app.get("/about", (req, res) => {
  res.send("This is the About route");
});

// Interns route
app.get("/api/interns", (req, res) => {
  res.json({
    interns: ["Ali", "Sara", "Bilal"]
  });
});

// Route parameter
app.get("/api/interns/:id", (req, res) => {
  res.json({
    id: req.params.id,
    name: "Sample Intern"
  });
});

// Query parameter
app.get("/api/search", (req, res) => {
  res.json({
    query: req.query.q
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});