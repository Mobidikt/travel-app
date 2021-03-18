const mongoose = require('mongoose')
const Schema = mongoose.Schema

const countrySchema = new Schema({
  country: {
    type: String,
    required: true,
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
  map: {
    type: String,
    required: true,
  },
  timeZone: {
    type: String,
    required: true,
  },
  zip: {
    type: String,
    required: true,
  },
  langCode: {
    type: String,
    required: true,
  },
})

countrySchema.virtual('id').get(function () {
  return this._id.toHexString()
})

countrySchema.set('toJSON', { virtuals: true })

module.exports = mongoose.model('Country', countrySchema)
