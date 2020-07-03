require("dotenv").config();
require("./db-conn");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/file.js', function(req, res){
  res.sendFile(__dirname + '/file.js');
});
app.get("/", (req, res) => {
  res.sendFile("index.html", {root: __dirname});
});

//const {PORT} = process.env;
app.listen(5001, () => console.log("Running server on port 5001"));