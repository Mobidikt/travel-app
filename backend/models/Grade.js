const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gradeSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  idCountry: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
  versionKey: false,
})

const Grade = mongoose.model('Grade', gradeSchema)

module.exports = Grade
