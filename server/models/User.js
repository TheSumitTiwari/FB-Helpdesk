const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

  userId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  picture: {
    type: String,
  },

});

module.exports = User = mongoose.model("user", userSchema);
