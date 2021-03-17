const User = require('../models/User')
const errorHandler = require('../utils/errorHandler')
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const JWT_KEY = process.env.JWT_KEY

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
      return res
        .status(400)
        .json({ message: 'Пользователь с такой почтой не найден' })
    }

    const validPassword = bcrypt.compareSync(password, user.password)

    if (!validPassword) {
      return res.status(400).json({ message: 'Вы ввели неверный пароль' })
    }

    const token = generateAuthToken(user._id)
    res
      .status(200)
      .json({
        token: `Bearer ${token}`,
        email: user.email,
        photo: user.photo,
        name: user.name,
      })
  } catch (error) {
    errorHandler(error)
  }
}

module.exports.register = async function (req, res) {
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      const e = errors.errors[0].msg
      return res.status(400).json({ message: e })
    }

    const { name, email, password } = req.body

    const candidate = await User.findOne({ email })

    if (candidate) {
      return res
        .status(400)
        .json({ message: 'Пользователь с такой почтой уже существует' })
    }

    const hashPassword = bcrypt.hashSync(password, 6)

    const photo = req.file ? req.file.path : null

    await new User({ email, name, password: hashPassword, photo }).save()

    res.status(201).json({ message: `Пользователь создан` })
  } catch (error) {
    errorHandler(error)
  }
}
