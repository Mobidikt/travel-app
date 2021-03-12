const express = require('express')
const controller = require('../controllers/auth')
const { check } = require('express-validator')

const router = express.Router()

router.post('/login', controller.login)
router.post(
  '/register',
  [
    check('email', 'Некоректный email').isEmail(),
    check('password', 'Пароль должен быть больше 5 ').isLength({ min: 6 }),
  ],
  controller.register,
)

module.exports = router
