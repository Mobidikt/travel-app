const mongoose = require('mongoose')
const Schema = mongoose.Schema

const countrySchema = new Schema({
  country: {
    type: String,
    required: true,
    unique: true,
  },
  population: {
    type: Number,
    required: true,
  },
  capital: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  video: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('Country', countrySchema)
