const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RegisterSchema = new Schema({
  name: { type: String },
  phoneNo: {
    type: Number,
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
  },
  password: {
    type: Number,
    required: "Phone number is required",
    unique: true,
  },
  confirmPassword: {
    type: Number,
    required: "Phone number is required",
    unique: true,
  },
});

const UserRegister = mongoose.model("UserRegister", RegisterSchema);

module.exports = UserRegister;
