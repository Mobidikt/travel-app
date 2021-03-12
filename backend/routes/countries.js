const express = require('express')
const Country = require('../models/Country')

const router = express.Router()

router.get('/country/:countryId', async (req, res, next) => {
  try {
    const data = await Country.find({ _id: req.params['countryId'] }).populate().exec()
    return res.send(data)
  } catch (err) {
    console.log(err)
    return res.sendStatus(500)
  }
})

module.exports = router
