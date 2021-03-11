const mongoose = require('mongoose')
const Schema = mongoose.Schema

const attractionSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  idCountry: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
    index: {
      unique: true,
      dropDups: true,
    },
  },
  picture: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  versionKey: false,
})

const Attraction = mongoose.model('Attraction', attractionSchema)

module.exports = Attraction
