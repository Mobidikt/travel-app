const express = require('express')
const Grade = require('../models/Grade')

const router = express.Router()

router.get('/grade/:countryId', async (req, res, next) => {
  console.log('trying')
  try {
    const data = await Grade.find({ idCountry: req.params['countryId'] }).populate().exec()
    return res.send(data || 'not working')
  } catch (err) {
    console.log(err)
    return res.sendStatus(500)
  }
})

router.post('/grade/:countryId/:value', async (req, res) => {
  try {
    const grade = new Grade({
      idCountry: req.params['countryId'],
      value: req.params['value'] || 5,
    })
    await grade.save(function (err) {
      if (err) return console.log(err)
      console.log('Сохранен объект', grade)
    })
  } catch (err) {
    console.log(err)
    return res.sendStatus(500)
  }
})

module.exports = router
