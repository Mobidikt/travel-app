const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userScheme = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    index: {
      unique: true,
      dropDups: true,
    },
  },
  email: {
    type: String,
    required: true,
    index: {
      unique: true,
      dropDups: true,
    },
  },
  password: {
    type: String,
    required: true,
  },
  versionKey: false,
})

const User = mongoose.model('User', userScheme)

module.exports = User
