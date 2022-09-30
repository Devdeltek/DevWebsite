const express = require("express")
//Ascii cats did not print correctly in the webpage, kept it in for the console
const catMe = require('cat-me')
const catFacts = require('get-cat-facts')

const app = express()

app.set("view engine", "ejs")

app.use(express.static("public"))

 

//routes
app.get("/", async (req, res) =>{

console.log(catMe())
let results = await catFacts.random([2])
res.render("index",{"cat":results[0].text});

});


app.get("/java", async (req, res) =>{
console.log(catMe())
let results = await catFacts.random([2])
res.render("java",{"cat":results[0].text});
});

app.get("/python", async (req, res) =>{
console.log(catMe())
let results = await catFacts.random([2])
res.render("python",{"cat":results[0].text});
});

app.get("/swift", async (req, res) =>{
console.log(catMe())
let results = await catFacts.random([2])
res.render("swift",{"cat":results[0].text});
});



app.listen(3000, () =>{
  console.log("express server is being run");
});


