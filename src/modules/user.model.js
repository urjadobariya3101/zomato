const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    contactNo: {
      type: Number,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
    is_active: {
      type: Boolean,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const User = mongoose.model("user", userSchema);
module.exports = User;
