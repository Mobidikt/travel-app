const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gradeSchema = new Schema({
  idAttraction: {
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

module.exports = mongoose.model('Grade', gradeSchema)
