const dotenv = require('dotenv')
const path = require('path')

dotenv.config({
  path: path.join(__dirname, './.env'),
})

module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  MONGODB_URL: process.env.MONGODB_URL,
  JWT_KEY: process.env.JWT_SECRET_KEY,
}
