const express = require('express')
const controller = require('../controllers/grades')

const router = express.Router()

router.get('/grade/:countryId', controller.getById)
router.post('/grade/:countryId/:value', controller.create)

module.exports = router
