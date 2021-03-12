const User = require('../models/User')
const errorHandler = require('../utils/errorHandler')
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const { JWT_KEY } = require('../config')

const generateAuthToken = (id) => {
  return jwt.sign({ userId: id }, JWT_KEY, {
    expiresIn: '1h',
  })
}

module.exports.login = async function (req, res) {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (!user) {
      return res.status(400).json({ message: 'Пользователь с такой почтой не найден' })
    }

    const validPassword = bcrypt.compareSync(password, user.password)

    if (!validPassword) {
      return res.status(400).json({ message: 'Неверные данные' })
    }

    const token = generateAuthToken(user._id)
    res.status(200).json({ token: `Bearer ${token}`, email: user.email })
  } catch (error) {
    errorHandler(error)
  }
}

module.exports.register = async function (req, res) {
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ message: 'Ошибка при регистрации', errors })
    }

    const { email, password } = req.body

    const candidate = await User.findOne({ email })

    if (candidate) {
      return res.status(400).json({ message: 'Пользователь с такой почтой уже существует' })
    }

    const hashPassword = bcrypt.hashSync(password, 6)

    const user = await new User({ email, password: hashPassword }).save()

    res.status(201).json({ message: `Пользователь ${user.email} создан` })
  } catch (error) {
    errorHandler(error)
  }
}
