const mongoose = require('mongoose')
const Schema = mongoose.Schema

const countrySchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  country: {
    type: String,
    required: true,
    unique: true,
    index: {
      unique: true,
      dropDups: true,
    },
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
  versionKey: false,
})

const Country = mongoose.model('Country', countrySchema)

module.exports = Country
