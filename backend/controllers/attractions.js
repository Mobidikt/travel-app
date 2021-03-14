const errorHandler = require('../utils/errorHandler')
const Attraction = require('../models/Attraction')

module.exports.getAll = async function (req, res) {
  try {
    const data = await Attraction.find()
    res.status(200).json(attractions)
  } catch (e) {
    errorHandler(e)
  }
}

module.exports.create = async function (req, res) {
  try {
    const { idCountry, name, picture, description } = req.body
    const newAttraction = await new Attraction({
        idCountry, 
        name, 
        picture, 
        description
    }).save()
    res.status(201).json(newAttraction)
  } catch (e) {
    errorHandler(e)
  }
}

module.exports.getById = async function (req, res) {
  try {
    const data = await Attraction.find({ id: req.params['id'] }).populate().exec()
    return res.send(data)
  } catch (e) {
    errorHandler(e)
  }
}
