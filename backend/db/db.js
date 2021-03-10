const mongoose = require('mongoose')

mongoose.set('useCreateIndex', true)

const uri = 'mongodb://localhost/test'
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  // we're connected!
})
