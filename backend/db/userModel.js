const mongoose = require("mongoose");

// user schema
const UserSchema = new mongoose.Schema({
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
