const mongoose = require('mongoose')
require('dotenv').config()

const { MONGODB_URL } = require('../config')

const connectionDB = () => {
  mongoose
    .connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.log(error))
}

exports.connectionDB = connectionDB
