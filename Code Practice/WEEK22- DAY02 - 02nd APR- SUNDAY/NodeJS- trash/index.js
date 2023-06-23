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
const url = require("url");

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: ${req.url} New Req Received\n`;
  const myUrl = url.parse(req.url, true);

  fs.appendFile("log.txt", log, () => {
    switch (req.url) {
      case "/":
        console.log(myUrl);
        res.end("Homepage");
        break;
      case "/about":
        res.end("About");
        break;
      case "/contact":
        res.end("Contact");
        break;
      default:
        res.end("404 Not Found");
    }
  });
});

myServer.listen(8000, () => console.log("Server Started"));
