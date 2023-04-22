const mongoose = require("mongoose");

// user schema
const UserSchema = new mongoose.Schema({
    firstName: {
    type: String,
    required: [false, "Please provide a First Name!"],
    unique: [false, "First Name already exists"],
  },
    lastName: {
    type: String,
    required: [false, "Please provide a Last Name!"],
    unique: [false, "Last Name already exists"],
  },
  username: {
    type: String,
    required: [true, "Please provide an Username!"],
    unique: [true, "Username already exists"],
  },
  
  email: {
    type: String,
    required: [true, "Please provide an Email!"],
    unique: [true, "Email already exists"],
  },

  password: {
    type: String,
    required: [true, "Please provide a password!"],
    unique: false,
  },
});

module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);
