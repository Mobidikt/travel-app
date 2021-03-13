const errorHandler = require('../utils/errorHandler')
const Grade = require('../models/Grade')

module.exports.create = async function (req, res) {
  try {
    const { idCountry, value } = req.body
    const newGrade = await new Grade({
        idCountry,
        value
    }).save()
    return res.status(201).json(newGrade)
  } catch (e) {
    errorHandler(e)
  }
}

module.exports.getById = async function (req, res) {
  try {
    const data = await Grade.find({ id: req.params['countryId'] }).populate().exec()
    const res1 = data.value.reduce(f, el => f + el)
    const res2 = res1 / Grade.find().count()
    return res.send(res2)
  } catch (e) {
    errorHandler(e)
  }
}
