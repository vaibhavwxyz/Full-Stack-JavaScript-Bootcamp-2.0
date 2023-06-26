const http = require("http");
const fs = require("fs");
const url = require("url");
const users = require("./MOCK_DATA.json");
const express = require("express");
const mongoose = require("mongoose");
const PORT = 8000;

// const myServer = http.createServer((req, res) => {
//   const log = `${Date.now()}: ${req.url}\n`;
//   const myUrl = url.parse(req.url, true);
//   console.log(myUrl);
//   if (req.url === "/favicon.ico") return res.end();
//   fs.appendFile("log.txt", log, () => {
//     switch (req.url) {
//       case "/":
//         res.end("Homepage");
//         break;
//       case "/about":
//         res.end("About us");
//         break;
//       case "/contact":
//         res.end("Contact us");
//         break;
//       default:
//         res.end("404 Not Found");
//     }
//   });
// });

// myServer.listen(PORT, () => console.log(`Server Started at ${PORT}`));

mongoose
  .connect("mongodb://127.0.0.1:27017/first_mongoose")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Mongo error: ", err));

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
  },
});

const User = mongoose.model("user", userSchema);

const app = express();

app.use(express.urlencoded({ extended: false }));
// app.get("/about", (req, res) => {
//   console.log(req);
//   return res.end(`Hello ${req.query.name}`);
// });

app.get("/", (req, res) => {
  const html = `<ul>${users
    .map((user) => `<li>${user.first_name}</li>`)
    .join("")}</ul>`;
  res.send(html);
});

app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const filteredUser = users.find((user) => user.id === id);
  if (!filteredUser)
    return res.status(404).json({ error: "User Not Found 404" });
  return res.json(filteredUser);
});

app.post("/api/users", (req, res) => {
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.json({ msg: "All Field Required" });
  }
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "Success", id: users.length });
  });
});

app.listen(PORT, () => console.log(`Server is Running at ${PORT}`));
