const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/insta", (req, res) => {
  const insta = {
    username: "vaibhavwxzy",
    follower: 18,
    following: 10,
  };
  res.status(200).json({ insta });
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
