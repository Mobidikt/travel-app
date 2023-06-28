const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ratingSchema = new Schema({
  score: {
    type: Number,
    default: 0,
  },
  votedPeople: [{ type: String, default: [] }],
})

const attractionSchema = new Schema({
  idCountry: {
    ref: 'Country',
    type: Schema.Types.ObjectId,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  picture: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  langCode: {
    type: String,
    required: true,
  },
  score: { type: ratingSchema },
})

const Attraction = mongoose.model('Attraction', attractionSchema)

module.exports = Attraction
