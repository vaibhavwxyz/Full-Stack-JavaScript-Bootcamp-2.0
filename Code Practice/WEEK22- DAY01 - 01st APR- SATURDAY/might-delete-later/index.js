const fs = require("fs");
const http = require("http");
const PORT = 3000;

function callback(err) {
  if (err) throw err;
  console.log("File Operation is Success..");
}

fs.writeFile("text.txt", "asdfsfsdf", "utf-8", callback);

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()} ${req.url}\n`;
  if (req.url === "/favicon.ico") return res.end();
  fs.appendFile("log.txt", log, () => {
    switch (req.url) {
      case "/":
        res.end("Homepage");
        break;
      case "/about":
        res.end("About us");
        break;
      case "/contact":
        res.end("Contact us");
        break;
      case "/career":
        res.end("Carrers Page");
        break;
      default:
        res.end("404 Page Not Found");
    }
  });
});

myServer.listen(PORT, console.log("Hello from Listen"));
