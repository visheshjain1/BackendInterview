const { Schema, model } = require("mongoose");

module.exports.Interview = model('Interview', Schema({
    name: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        required: true,
      },
      feedback: {
        type: String,
      },
      rating: {
        type: Number,
      },
      userId: {
        type: String, 
        required: true,
      }
}, { timestamps: true }))