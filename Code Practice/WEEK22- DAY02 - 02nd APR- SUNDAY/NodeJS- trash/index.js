//! fs
const fs = require("fs");

// fs.writeFile("text.txt", "Hello, Vaibhav", "utf-8", (err) => {
//   if (err) throw err;
//   console.log("Hello from Server");
// });

function callback(err) {
  if (err) throw err;
  console.log("File is copied to the destination");
}

fs.copyFile("text.txt", "log.txt", callback);

//! http

const http = require("http");

const myServer = http.createServer((req, res) => {
  console.log("New Req Rec");
  res.end("Hello from Server");
});

myServer.listen(8000, () => console.log("Server Started"));
