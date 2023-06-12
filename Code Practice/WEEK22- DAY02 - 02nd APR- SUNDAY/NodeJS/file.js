const fs = require("fs");

// fs.writeFileSync("./text.txt", "Hey There Vaibhav Shinde")
// fs.writeFile("./address.txt", "Xrbia Township", err => {
//   if(err){
//     console.error(err)
//   }
// })

const result = fs.readFileSync("./text.txt", "utf-8")
console.log(result);

fs.readFile("./address.txt", "utf-8", (err, result) => {
  if(err){
    console.log("Error", err)
  }else{
    console.log(result);
  }
})

fs.appendFileSync("./text.txt", new Date().getDate().toLocaleString())