const mongoose = require("mongoose");


const UserSchema = mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  Name: Number, 
  Surname: String
});

var TestUser = mongoose.model("TestUser", UserSchema);

module.exports = TestUser;