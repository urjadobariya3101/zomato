const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    role: {
      type: String,
      trim: true,
    },
    permission: {
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

const Admin = mongoose.model("admin", adminSchema);
module.exports = Admin;
