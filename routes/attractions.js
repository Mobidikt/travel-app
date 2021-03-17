const express = require('express')
const controller = require('../controllers/attractions')

const router = express.Router()

router.get('/attraction/:countryId', controller.getById)
router.post('/attraction', controller.create)
router.get('/attraction', controller.getAll)
router.patch('/attraction', controller.update)

module.exports = router
