const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: { type: Number, required: true },
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true},
  dateOfBirth: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;