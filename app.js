// const req= require('./names')

//  const hojaa=require('./kamm')
// hojaa(req.name1)

// require("./add");

// // const os=require('os')
// // console.log(os.userInfo())

// // console.log(`The system uptime is ${os.uptime() } in seconds.`)

// // console.log(os.type)
// // console.log(os.totalmem())
// // console.log(os.freemem())

// // fs modules
// //Synchronous fs modules
// const { readFile, writeFile } = require("fs");

// const first = readFileSync("./content/first.txt", "utf-8");
// const firsty = readFileSync("./content/firsty.txt", "utf-8");

// writeFileSync(
//   "./content/newfile.txt",
//   `this the result ${first} and second(firsty) is${firsty}`,
//   { flag: "a" }
// );

// writeFileSync("./kkkk.txt", "thus is kkkk.txt", { flag: "a" });

// readFile("./kkkk.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   else{console.log(data)}
// });

//http module

let http = require("http");
let server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("This is home page");

  }
  if (req.url === "/about") {
    res.end(`<h1> About our Company</h1>
<p> about about about about about about about about abvout about about about abvout about</p>`);
  }


  res.end(`<h1> Oops can't find your page </h1>
<a href="/"> Back to home</a>`);
});


server.listen(5000 );
