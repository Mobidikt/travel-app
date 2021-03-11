const express = require('express')
const app = express()
const flash = require('express-flash')
const { PORT } = require('./config')

const { connectionDB } = require('./db/db')

connectionDB()

const countriesRouter = require('./routes/countries')
//const attractionsRouter = require('./routes/attractions')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
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

app.get('/', function (req, res) {
  console.log('index')
  return res.send('work')
})

app.use(countriesRouter)
//app.use(attractionsRouter)

app.listen(PORT, () => {
  console.log(`we're online on ${PORT} port!`)
})
