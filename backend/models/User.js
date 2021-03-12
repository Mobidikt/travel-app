const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userScheme = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
  },
})

module.exports = mongoose.model('users', userScheme)
