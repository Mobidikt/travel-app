const express = require('express')
const Attraction = require('../models/Attraction')

const router = express.Router()

router.get('/attraction/:attractionId', async (req, res, next) => {
  try {
    const data = await Attraction.find({ id: req.params['attractionId'] }).populate().exec()
    return res.send(data)
  } catch (err) {
    console.log(err)
    return res.sendStatus(500)
  }
})

module.exports = router