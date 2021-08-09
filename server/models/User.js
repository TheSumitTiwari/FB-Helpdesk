const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

  id: {
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
  phone: {
    type: String,
  },
  profilePicture: {
    type: String,
  },

});

module.exports = User = mongoose.model("user", userSchema);
