const { generateCountriesTranslationOjbect } = require('./generateTranslateObject')

const countries = generateCountriesTranslationOjbect()

module.exports = {
  countries,
}
