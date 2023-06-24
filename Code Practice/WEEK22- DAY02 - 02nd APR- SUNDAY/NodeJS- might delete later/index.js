const fs = require("fs");
const http = require("http");
const url = require("url");
const PORT = 3000;

function callback(err) {
  if (err) throw console.log("Error occured: ", err);
}

fs.writeFile("text.txt", "Hello, Vaibhav", "utf-8", callback);

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: ${req.url} New Req Rec\n`;
  const myUrl = url.parse(res.url, true);
  fs.appendFile("log.txt", log, () => {
    switch (req.url) {
      case "/":
        console.log(myUrl);
        res.end("Homepage");
        break;
      case "/about":
        res.end("About us");
        break;
      case "/contact":
        res.end("Contact us");
        break;
      default:
        res.end("Error 404 Not Found");
    }
  });
});

myServer.listen(PORT, () => console.log(`Listing on Port: ${PORT}`));
