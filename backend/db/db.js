const mongoose = require('mongoose')
require('dotenv').config()

mongoose.set('useCreateIndex', true)

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  // we're connected!
})
