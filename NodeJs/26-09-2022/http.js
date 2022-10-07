//import http Module

const http = require("http");
const fs = require("fs");

const host = "127.89.98.1"; // http:127.89.98.1:7676
const port = 7676;

// const server = http.createServer((req, res) => {
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Welcome to NodeJS Server");
// });

// const server = http.createServer((req, res) => {
//   res.setHeader("Content-Type", "text/html");
//   res.end(`<h2>Welcome to HTML</h2>`);
// });
const server = http.createServer((req, res) => {
  fs.readFile("home.html", "utf-8", (err, data) => {
    if (err) throw err;
    res.setHeader("Content-Type", "text/html");
    res.end(data);
  });
});

server.listen(port, host, () => {
  console.log("Server Started");
});
