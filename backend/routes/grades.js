const express = require('express')
const controller = require('../controllers/grades')

const router = express.Router()

router.get('/grade/', async (req, res) => {res.send('too soon')})
router.get('/grade/:attractionId', controller.getById)
router.post('/grade/:attractionId/:value', controller.create)

module.exports = router
