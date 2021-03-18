const express = require('express')
const controller = require('../controllers/countries')

const router = express.Router()

router.get('/country/:countryId', controller.getById)
router.post('/country', controller.create)
router.get('/country', controller.getAll)

module.exports = router
