const express = require('express')
const Attraction = require('../models/Attraction')

const router = express.Router()

router.get('/attraction/:countryId', async (req, res, next) => {
  try {
    const data = await Attraction.find({ idCountry: req.params['countryId'] }).populate().exec()
    return res.send(data || 'not working')
  } catch (err) {
    console.log(err)
    return res.sendStatus(500)
  }
})

module.exports = router
