const mongoose = require("mongoose");

// schema definition:

const employeesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  mobileNumber: {
    type: String,
    unique: true,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  bloodGroup: {
    type: String,
  },
});

//model creation

module.exports = mongoose.model("employees", employeesSchema);
