const express = require('express')
const controller = require('../controllers/auth')
const { check } = require('express-validator')
const upload = require('../middleware/upload')

const router = express.Router()

router.post('/login', controller.login)
router.post(
  '/register',
  [
    upload.single('photo'),
    check('email', 'Некоректный email').isEmail(),
    check('name', 'Поле должно быть заполнено').notEmpty(),
    check('password', 'Минимальная длина пароля 6 символов').isLength({ min: 6 }),
  ],
  controller.register,
)

module.exports = router
