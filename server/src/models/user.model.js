const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullname: {
      firstname: {
        type: String,
        required: true,
        minlength: 3,
      },

      lastname: {
        type: String,
        minlength: 3,
      },
    },

    email: {
      type: String,
      required: true,
      unique: true,
      minlength: 5,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("User", userSchema);
