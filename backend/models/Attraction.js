const mongoose = require('mongoose')
const Schema = mongoose.Schema

const attractionSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  id: {
    type: Number,
    required: true,
    unique: true,
    index: {
      unique: true,
      dropDups: true,
    },
  },
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
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  versionKey: false,
})

const Attraction = mongoose.model('Country', attractionSchema)

module.exports = Attraction
