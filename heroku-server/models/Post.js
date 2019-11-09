const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({

  id: {
    type: Number,
    required: true,
    default: Date.now
  },
  text: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    required: false,
    default: false
  },
  edit: {
    type: Boolean,
    required: true,
    default: false
  }
})

module.exports = mongoose.model('Todo', todoSchema)