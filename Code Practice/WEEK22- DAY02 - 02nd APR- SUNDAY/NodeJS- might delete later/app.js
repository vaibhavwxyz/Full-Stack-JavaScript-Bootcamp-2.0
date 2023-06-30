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

app.get("/", async (req, res) => {
  const allDbUsers = await User.find({});
  const html = `<ul>${allDbUsers
    .map((user) => `<li>${user.firstName}</li>`)
    .join("")}</ul>`;
  res.send(html);
});

app.get("/api/users", async (req, res) => {
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
});

app
  .route("/api/users/:id")
  .get(async (req, res) => {
    // const id = Number(req.params.id);
    // const filteredUser = users.find((user) => user.id === id);
    const filteredUser = await User.findById(req.params.id);
    if (!filteredUser)
      return res.status(404).json({ error: "User Not Found 404" });
    return res.json(filteredUser);
  })
  .patch(async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, { gender: "female" });
    return res.json({ status: "Success" });
  })
  .delete(async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    return res.json({ status: "Success" });
  });

app.post("/api/users", async (req, res) => {
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ msg: "All Field Required" });
  }
  // users.push({ ...body, id: users.length + 1 });
  // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
  //   return res.json({ status: "Success", id: users.length });
  // });

  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,
  });

  console.log(result);

  return res.status(201).json({ msg: "Success" });
});

app.listen(PORT, () => console.log(`Server is Running at ${PORT}`));
