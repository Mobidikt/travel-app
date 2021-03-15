const {
  generateCountriesTranslationOjbect,
  generateAttractionsTranslationOjbect,
} = require('./generateTranslateObject')

const countries = generateCountriesTranslationOjbect()

const attractions = generateAttractionsTranslationOjbect()

module.exports = {
  countries,
  attractions
}
