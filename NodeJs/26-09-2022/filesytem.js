const fs = require("fs"); // import the module

//import {  } from 'fs'

//Read the demo.txt File or access the content of demo.txt

//Sychrnous and Asychronous

// const fileData = fs.readFileSync("demo.txt", "utf-8");

// console.log(fileData);

// const htmlData = fs.readFileSync("index.html", "utf-8");
// console.log(htmlData);

// console.log("HTML Code will be Printed");

//Asychrnous

// fs.readFile("index.html", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// console.log("I will execute before file content");

// fs.renameSync("index.html", "home.html");

const data = fs.readFileSync("home.html", "utf-8");
const data2 = fs.readFileSync("demo.txt", "utf-8");

fs.writeFileSync("NewFile.html", data);
// fs.writeFileSync("NewFile.html", data2);
