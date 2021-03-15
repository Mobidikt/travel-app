const errorHandler = require('../utils/errorHandler')
const Country = require('../models/Country')
const lang = require('../db/lang')

module.exports.getAll = async function (req, res) {
  try {
    const langCode = req.header('Language-Code')
    const countries = await Country.find()

    const countriesWithTranslate = countries.map((country) => {
      return {
        _id: country._id,
        id: country.id,
        population: country.population,
        map: country.map,
        timeZone: country.timeZone,
        currency: country.currency,
        picture: country.picture,
        video: country.video,
        country: lang.countries[`id${country.id}`][langCode].country,
        capital: lang.countries[`id${country.id}`][langCode].capital,
        description: lang.countries[`id${country.id}`][langCode].description,
      }
    })

    res.status(200).json(countriesWithTranslate)
  } catch (e) {
    errorHandler(e)
  }
}

module.exports.create = async function (req, res) {
  try {
    const { country, population, capital, currency, description, picture, video } = req.body
    const newCountry = await new Country({
      country,
      population,
      capital,
      currency,
      description,
      picture,
      video,
    }).save()
    res.status(201).json(newCountry)
  } catch (e) {
    errorHandler(e)
  }
}

module.exports.getById = async function (req, res) {
  try {
    const data = await Country.find({ id: req.params['countryId'] }).populate().exec()
    return res.send(data)
  } catch (e) {
    errorHandler(e)
  }
}
