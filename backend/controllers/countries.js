const errorHandler = require('../utils/errorHandler')
const Country = require('../models/Country')

module.exports.getAll = async function (req, res) {
  try {
    const langCode = req.header('Language-Code')
    const countries = await Country.find({ langCode })
    res.status(200).json(countries)
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
