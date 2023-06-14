// const math = require("./math")

// console.log(math);

// const http = require("http")
const fs = require("fs");

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
const express = require("express")
const users = require("./MOCK_DATA.json")
const app = express()
const PORT = 8000

app.use(express.urlencoded({extended: false}))

app.use((req, res, next) => {
  fs.appendFile("log.txt", `\n${Date.now()}: ${req.method}: ${req.path}`, (err, data) => {
    next()
  })
})

// ROUTES
// app.get("/api/users", (req, res) => { //api
//   return res.json(users)
// })

app.get('/users', (req, res) => { //server side rendering
  const html = `<ul>${users.map((user) => `<li>${user.first_name}</li>`).join("")}</ul>`
  return res.send(html)
})

// app.get('/api/users/:id', (req, res) => {
//   const id = Number(req.params.id);
//   const user = users.find((user) => user.id === id)
//   return res.json(user)
// })

app.route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id)
    return res.json(user)
  })
  .patch((req, res) => {
    return res.json({status: "pending"})
  })
  .delete((req, res) => {
    return res.json({status: "pending"})
  })

app.route("/api/users")
  .get((req, res) => {
    return res.json(users)
  })
  .post((req, res) => {
    const body = req.body
    users.push({...body, id: users.length + 1})
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
      return res.json({status: "success", id: users.length})
    })
  })

// Listen
app.listen(PORT, () => console.log(`Server Started at ${PORT}`))