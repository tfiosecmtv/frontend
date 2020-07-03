// var express = require('express');
// var router = express.Router();
// const bodyParser = require("body-parser");
// User = require('./model');


const button = document.getElementById('myButton');
if(button)
button.addEventListener('click', function(e) {
  
  console.log('button was clicked');
});



// router.get("/", (req, res) => {
//     user = new User({
//         Name: "TestName", 
//         Surname: "TestSurname"
//       })
//       user.save((err) => {
//         if (err)
//           console.log(err);
//         else
//           console.log("success!!! " + user)
//       })
// })
