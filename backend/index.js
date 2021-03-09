const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const flash = require('express-flash')
const port = process.env.PORT || 3000

require('./db/db')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(flash())

app.use(async (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  )
  next()
})

app.listen(port)
