const mongoose = require("mongoose");

const senderSchema = new mongoose.Schema({

  senderPsid: {
    type: String,
    required: true,
  },
  recipientId: {
    type: String,
    required: true,
  },
  message: {
    type: Array,
  },
  postback: {
    type: Array,
  },

});

module.exports = Sender = mongoose.model("sender", senderSchema);