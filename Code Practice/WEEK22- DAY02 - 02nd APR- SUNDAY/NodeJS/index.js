// const math = require("./math")

// console.log(math);

// const http = require("http")
const fs = require("fs");
const mongoose = require("mongoose");

// connection
mongoose
  .connect("mongodb://127.0.0.1:27017/youtube-app-1")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error"));

// Schema
const userSchema = new mongoose.Schema(
  {
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
    },
    jobTitle: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

// const myServer = http.createServer((req, res) => {
//   const log = `${new Date().getDate().toLocaleString()}: ${req.url} New Req Received\n`;
//   fs.appendFile("log.txt", log, (err, data) => {
//     res.end("Hello from Server")
//   })
//   // console.log(req.headers);
//   // res.end("Hello from Server")
// })

// myServer.listen(8000, () => console.log("Server Started"))

// const myServer = http.createServer((req, res) => {
//   const log = `${Date.now()}: ${req.url} New Req Received\n`;
//   fs.appendFile("log.txt", log, (err, data) => {
//     res.end("Hello from Server")
//   })

// })

// myServer.listen(8000, () => console.log("Server Started"))

// const myServer = http.createServer((req, res) => {
//   const log = `${Date.now()}: ${req.url} New Req Received\n`;
//   fs.appendFile("./user-log.text", "log", (err, data) => {
//     res.end("hello")
//   })
// })

// myServer.listen(8000, () => console.log("Server Started"))

// Getting and Initializing
const express = require("express");
// const users = require("./MOCK_DATA.json");
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  fs.appendFile(
    "log.txt",
    `\n${Date.now()}: ${req.method}: ${req.path}`,
    (err, data) => {
      next();
    }
  );
});

app.use((req, res, next) => {
  res.setHeader("X-fName", "Vaibhav");
  next();
});

// ROUTES
// app.get("/api/users", (req, res) => { //api
//   return res.json(users)
// })

app.get("/users", async (req, res) => {
  const allDbUsers = await User.find({});
  //server side rendering
  // const html = `<ul>${users
  //   .map((user) => `<li>${user.first_name}</li>`)
  //   .join("")}</ul>`;
  const html = `<ul>${allDbUsers
    .map((user) => `<li>${user.firstName} - ${user.email}</li>`)
    .join("")}</ul>`;
  return res.send(html);
});

// app.get('/api/users/:id', (req, res) => {
//   const id = Number(req.params.id);
//   const user = users.find((user) => user.id === id)
//   return res.json(user)
// })

app
  .route("/api/users/:id")
  .get(async (req, res) => {
    // const id = Number(req.params.id);
    // const user = users.find((user) => user.id === id);
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "User Not Found" });
    return res.json(user);
  })
  .patch(async (req, res) => {
    const body = req.body;
    await User.findByIdAndUpdate(req.params.id, { jobTitle: body.job_title });
    return res.json({ status: "Success" });
  })
  .delete(async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    return res.json({ status: "Success" });
  });

app
  .route("/api/users")
  .get(async (req, res) => {
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);
  })
  .post(async (req, res) => {
    const body = req.body;
    if (
      !body ||
      !body.first_name ||
      !body.last_name ||
      !body.email ||
      !body.gender ||
      !body.job_title
    ) {
      return res.status(400).json({ msg: "All field required" });
    }
    // users.push({ ...body, id: users.length + 1 });
    // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    //   return res.json({ status: "success", id: users.length });
    // });

    const result = await User.create({
      firstName: body.first_name,
      lastName: body.last_name,
      email: body.email,
      gender: body.gender,
      jobTitle: body.job_title,
    });

    // console.log("result", result);

    return res.status(201).json({ msg: "Success" });
  });

// Listen
app.listen(PORT, () => console.log(`Server Started at ${PORT}`));
