const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const flash = require('express-flash')
const { PORT } = require('./config')

const { connectionDB } = require('./db/db')

connectionDB()

const countriesRouter = require('./routes/countries')
const attractionsRouter = require('./routes/attractions')
const authRoutes = require('./routes/auth')
const gradeRoutes = require('./routes/grades')
const attrRoutes = require('./routes/attractions')
const Attraction = require('./models/Attraction')

app.use('/uploads', express.static('uploads'))

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(flash())
app.use(cors())

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
app.use(attractionsRouter)
app.use('/auth', authRoutes)
app.use(gradeRoutes)
app.use(attrRoutes)



app.listen(PORT, () => {
  console.log(`we're online on ${PORT} port!`)
})
