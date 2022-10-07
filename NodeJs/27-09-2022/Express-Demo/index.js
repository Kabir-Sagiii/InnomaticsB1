const express = require("express");

const app = express();
const port = 7878;

app.get("/", (req, res) => {
  res.send("Welcome To Express JS"); // http://localhost:7878/
});

app.get("/html", (req, res) => {
  res.send(`<h2>Welcome to Express JS</h2>`); //http://localhost:7878/html
});

app.get("/json", (req, res) => {
  res.send([{ name: "Kabir" }, { name: "Rahuls" }]); //http://localhost:7878/json
});

app.listen(port, () => {
  console.log("Server started");
});
