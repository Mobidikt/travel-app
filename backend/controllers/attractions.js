const errorHandler = require('../utils/errorHandler')
const Attraction = require('../models/Attraction')
const lang = require('../db/lang')

module.exports.getAll = async function (req, res) {
  try {
    const data = await Attraction.find()
    res.status(200).json(data)
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
      description,
    }).save()
    res.status(201).json(newAttraction)
  } catch (e) {
    errorHandler(e)
  }
}

module.exports.getById = async function (req, res) {
  try {
    const attractions = await Attraction.find({ idCountry: req.params.countryId })
    const langCode = req.header('Language-Code')
    const attractionsWithFilter = attractions.map((attraction, idx) => {
      return {
        _id: attraction._id,
        id: attraction._id,
        name: lang.attractions[`id${attraction.idCountry}`][langCode][idx].name,
        picture: attraction.picture,
        description: lang.attractions[`id${attraction.idCountry}`][langCode][idx].description,
        score: attraction.score,
      }
    })
    return res.status(200).json(attractionsWithFilter)
  } catch (e) {
    errorHandler(e)
  }
}

module.exports.update = async function (req, res) {
  try {
    const { score, email, id } = req.body
    const attraction = await Attraction.findOne({ _id: id })

    if (attraction.score.votedPeople.includes(email)) {
      return res.status(400).json({ message: 'Вы уже проголосавали' })
    }

    const updated = {
      score: {
        score: attraction.score.score + score,
        votedPeople: [...attraction.score.votedPeople, email],
      },
    }

    const updatedAttraction = await Attraction.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updated,
      },
      {
        new: true,
      },
    )
    res.status(200).json(updatedAttraction)
  } catch (e) {
    errorHandler(e)
  }
}
