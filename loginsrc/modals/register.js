const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RegisterSchema = new Schema({
  name: { type: String },
  phoneNo: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: "Email address is required",
  },
  password: {
    type: Number,
    required: "Phone number is required",
  },
});

const UserRegister = mongoose.model("UserRegister", RegisterSchema);

module.exports = UserRegister;
